# market — appview surface for the Etzhayyim capital-flow clearinghouse

**この repo が持っているのは配信面（Cloudflare Worker + CLJS appview）だけで、
ドメインロジックは 1 行も入っていない。** `market` という名前は機能を示さないので
先に名乗る: `market.etzhayyim.com` として公開されるはずの **appview**（`kotodama.jsonld`
の `"uiType": "appview"` / `"performerType": "service"`）であり、注文の掲示・見積り・
請求の決済・需要観測といった判断は、すべて上流の dispatcher / MCP router 側にある。

`etzhayyim/root` の `60-apps/etzhayyim-project-market` から切り出した抽出物
（`migration.edn`: source revision `c9e7df4b`、tracked 12 files / 22,009 bytes）。

**UI は SvelteKit → CLJS へ 2 段階で移行した。** 2026-09-04 の PR #1 は
shadow-cljs + reagent + `kotoba-ui`/`appkit`（murakumo-studio 構成）に移し、
ビルド出力（`web/dist/js/cljs-runtime/*.js`）を git に直接コミットする形を取った。
この repo を今回改めて棚卸しした結果、それは workspace の現行既定
（`jp-go-dds` が base design system、ADR-2608260900）と食い違っており、かつ
移行時に旧 SvelteKit の XRPC プロキシ route（`+server.ts`）を退避せず削除して
いたため（`git show <PR#1 の親 commit>:.../svelte/src/routes/xrpc/[...path]/+server.ts`
で復元可能だったが、そのまま main には残っていなかった）、**同じ Svelte→cljs
移行をこの repo についてもう一度、今回は次の形でやり直した**:

- `web/dist/` への直接コミットをやめ、`appview/etzhayyim-wasm-market-mk7r3x9p/cljs/`
  配下に build ツールチェーンをまとめ、`cljs/public/js/` は `.gitignore` する
  （生成物は commit しない）。
- design system を `kotoba-ui`/`appkit` から **jp-go-dds**（デジタル庁デザイン
  システム）に、state を re-frame に変える。
- 削除されていた旧 XRPC プロキシを、削除前の commit から byte-identical に
  復元し `appview/etzhayyim-wasm-market-mk7r3x9p/src/xrpc-mcp-router-proxy.ts`
  として保存（配線はしない。理由は同ファイルの header コメントと後述「境界」節）。

参照実装: `orgs/cloud-itonami/cloud-itonami-isic-6110/worker/`（同じ shadow-cljs +
reagent + re-frame + jp-go-dds の scaffold 形）。

## 中身

| パス | 役割 |
|---|---|
| `appview/etzhayyim-wasm-market-mk7r3x9p/src/app.ts` | Worker facade（XRPC → dispatcher 転送 + `/health` + 静的アセット fallthrough）。`wrangler.jsonc` の `main` はここを指す |
| `appview/etzhayyim-wasm-market-mk7r3x9p/src/xrpc-mcp-router-proxy.ts` | 旧 SvelteKit の `+server.ts`（AGENTGATEWAY_MCP_ROUTER_URL 宛の別の XRPC プロキシ）を byte-identical に保存したもの。**配線されていない**（header 参照） |
| `appview/etzhayyim-wasm-market-mk7r3x9p/wrangler.jsonc` | Worker 定義。`main: ./src/app.ts`、静的アセットは `assets.directory: ./cljs/public`。変更の経緯は先頭のコメント block |
| `appview/etzhayyim-wasm-market-mk7r3x9p/cljs/` | CLJS appview UI 一式（`deps.edn` / `shadow-cljs.edn` / `package.json` / `public/index.html` / `src/` / `test/`）。単一 document・単一 bundle（ADR-2608080100 single-page-app 規則） |
| `appview/etzhayyim-wasm-market-mk7r3x9p/cljs/src/cloud_itonami/market/app.cljk` | reagent + re-frame 製 UI（旧 `+page.svelte` を 1:1 移植、jp-go-dds hiccup） |
| `appview/etzhayyim-wasm-market-mk7r3x9p/kotodama.jsonld` | actor 宣言（DID・lane・NSID・KPI） |
| `CLAUDE.md` / `PROJECT.jsonld` | 上流由来の説明。**コードと一致していない**（後述、この migration の対象外） |
| `README.edn` / `migration.edn` | 抽出時のメタデータ |

ビルド・起動の手順は **[`docs/operator-quickstart.md`](docs/operator-quickstart.md)**。

## 境界 — 判断はここに無い

`src/app.ts` がやるのは、`POST /xrpc/<nsid>` を dispatcher 宛に転送すること（Bearer
JWT + `lxm` 検証 + 5 NSID の許可リスト付き）と `/health` を返すこと、あとは静的アセット
への fallthrough だけ。認証の発行も lane の判断もこの repo には無い。

```
ブラウザ ──▶ market appview (この repo) ──▶ dispatcher.etzhayyim.com  ──▶ 判断はここ
```

`kotodama.jsonld` が宣言する NSID は 3 collection
（`com.etzhayyim.market.listing` / `.settlement` / `.demandSignal`）、
`src/app.ts` が持つ許可リストは 5 NSID（`listOffer` / `publishOffer` / `quotePrice` /
`settleInvoice` / `observeDemand`）、lane は `vault` / `sashiosae` / `lawfirm` /
`bpmn` / `murakumo` の 5 本。

`src/xrpc-mcp-router-proxy.ts`（旧 SvelteKit `+server.ts`）は別系統の XRPC 経路
（`AGENTGATEWAY_MCP_ROUTER_URL` へ MCP `tools/call` として転送）を実装していたが、
`src/app.ts` はそれを呼ばない。保存はしたが配線するかどうかはこの frontend
migration が決めることではない。

## 実測した現在地

**2026-08-14 UTC の実測**（SvelteKit 構成当時。§「ずれ」節はこの測定に基づく）:

| 対象 | 実測 |
|---|---|
| `etzhayyim.com` | 解決する（104.21.51.111 / 172.67.179.128、Cloudflare） |
| `market.etzhayyim.com` | **解決しない**（NXDOMAIN） |
| `mk7r3x9p.etzhayyim.com` | **解決しない** |
| `dispatcher.etzhayyim.com` | **解決しない** |
| `mcp.etzhayyim.com` | **解決しない** |

つまり **この appview は今どこにも live ではなく、live にしても上流が居ない。**
`wrangler.jsonc` の `routes` と `kotodama.jsonld` の `routes` が指すホストは
どちらも DNS に無い。ローカルで動かす分には quickstart の手順で完動する。

**このやり直し移行の実測**（`appview/etzhayyim-wasm-market-mk7r3x9p/cljs/` から）:

| 対象 | 実測 |
|---|---|
| `amu compile --target wasm32-browser app` | **通る**（`Build completed. (111 files, 110 compiled, 0 warnings, 41.95s)`） |
| `amu compile --target wasm32-browser test && node out/tests.js` | **通る**（`Ran 5 tests containing 14 assertions. 0 failures, 0 errors.`） |
| `wrangler deploy` / `wrangler dev` | **未実行**（wrangler.jsonc の変更は UNVERIFIED、同ファイル冒頭のコメント参照） |

## 移行によって解消された「2 つのずれ」

移行前（SvelteKit 構成）の README は「説明文が 2 系統あり、どちらもコードとは別の
ことを言っている」ことを記録していた。うち **ずれ②（`src/app.ts` がどこからも
参照されていない）は解消済み**: `wrangler.jsonc` の `main` が SvelteKit の生成物
（`.svelte-kit/cloudflare/_worker.js` — 実測で scaffold page + XRPC proxy しか含まず、
ドメインコードを含まなかった）から `./src/app.ts` に変わり、静的アセットも
（旧移行の `../../web/dist` を経て）`./cljs/public` に統一された。これで
`kotodama.jsonld` が名指す component と deploy 対象が同じ program を指す。

**ずれ①（`CLAUDE.md` / `PROJECT.jsonld` が別のアプリ — 暗号資産ポートフォリオ管理 —
の話をしている）は依然として残っている。** 両者が説明する実装はこの repo に無く、
`CLAUDE.md` 自身が「実装は `etzhayyim-project-global` の `global-ui-w5n8p3q6` にある」
と書いている。この repo のコードが実装するのは資本フローの clearinghouse（offer /
quote / settle / demand）で別物。修正権限は上流（`etzhayyim/root`）側にあり、
このフロントエンド migration の対象外。

## 依存

- CLJS 面: `react@18.2.0` / `react-dom@18.2.0`（npm、reagent が解決する）、
  `org.clojure/clojurescript` / `thheller/shadow-cljs 2.28.20` /
  `reagent 1.2.0` / `re-frame 1.4.3`（`:cljs` alias）、
  `io.github.kotoba-lang/jp-go-digital-design-system`（git/sha 固定、top-level
  `:deps` — JVM 側からも hiccup を authoring できるようにするため）。
- Worker 面: `src/app.ts` の facade（依存は上流 hoist 由来の
  `@etzhayyim/kotodama-host-sdk` 参照のまま。README「Known state」の注記は
  crypto-asset-freeze repo 側の記録を参照）。

## 移行履歴

- **2026-08-14 実測時点**: `appview/.../svelte/` の SvelteKit + Vite 構成。
  `vite build` → `.svelte-kit/cloudflare/_worker.js` を `main` に指し、UI は
  `+page.svelte` の静的ランディング 1 枚、XRPC 転送は `+server.ts` が担っていた。
  依存は `svelte@^5` / `@sveltejs/kit@^2` / `@sveltejs/adapter-cloudflare@^7` /
  `vite@^6` / `typescript@^5`。
- **PR #1（2026-09-04）**: shadow-cljs + reagent + `kotoba-ui`/`appkit` へ移行。
  ビルド出力を `web/dist/` として直接コミットし、旧 `+server.ts` は復元されずに
  削除された。
- **本 migration**: `appview/.../cljs/` へ再配置、design system を jp-go-dds に、
  state を re-frame に変更、ビルド出力を `.gitignore` に変更（コミットしない）、
  `+server.ts` を byte-identical に復元して `src/xrpc-mcp-router-proxy.ts` として
  保存。履歴は git が持つ。
