# market — appview surface for the Etzhayyim capital-flow clearinghouse

**この repo が持っているのは配信面（Cloudflare Worker + CLJS appview）だけで、
ドメインロジックは 1 行も入っていない。** `market` という名前は機能を示さないので
先に名乗る: `market.etzhayyim.com` として公開されるはずの **appview**（`kotodama.jsonld`
の `"uiType": "appview"` / `"performerType": "service"`）であり、注文の掲示・見積り・
請求の決済・需要観測といった判断は、すべて上流の dispatcher / MCP router 側にある。

`etzhayyim/root` の `60-apps/etzhayyim-project-market` から切り出した抽出物
（`migration.edn`: source revision `c9e7df4b`、tracked 12 files / 22,009 bytes）。

**UI は 2026-09-04 に SvelteKit → CLJS（shadow-cljs + reagent + kotoba-ui、
murakumo-studio構成）へ移行した**（参照実装: `orgs/cloud-itonami/crypto-asset-freeze`
— 同日 PR #1 で main 着地済み、`orgs/cloud-itonami/app-itonami`）。

## 中身

| パス | 役割 |
|---|---|
| `appview/etzhayyim-wasm-market-mk7r3x9p/src/app.ts` | Worker facade（XRPC → dispatcher 転送 + `/health`）。**移行後は `wrangler.jsonc` の `main` がここを指す** |
| `appview/etzhayyim-wasm-market-mk7r3x9p/wrangler.jsonc` | Worker 定義。`main: ./src/app.ts`、静的アセットは `assets.directory: ../../web/dist` |
| `appview/etzhayyim-wasm-market-mk7r3x9p/web/` | CLJS appview UI の入口。`index.html` が `js/main.js` と `vendor/kotoba-ui.css` を読む（dist は追跡対象） |
| `shadow-cljs.edn` / `deps.edn` | CLJS ビルド定義。`:app` build → `appview/.../web/dist/js`、init-fn は `cloud-itonami.market.desktop/init!` |
| `src/cloud_itonami/market/{state,ui,desktop}.cljs` | reagent 製 UI（旧 `+page.svelte` を 1:1 移植。murakumo-studio構成: appkit.core + kotoba-ui.core） |
| `appview/etzhayyim-wasm-market-mk7r3x9p/kotodama.jsonld` | actor 宣言（DID・lane・NSID・KPI） |
| `CLAUDE.md` / `PROJECT.jsonld` | 上流由来の説明。**コードと一致していない**（後述） |
| `README.edn` / `migration.edn` | 抽出時のメタデータ |

ビルド・起動の手順は **[`docs/operator-quickstart.md`](docs/operator-quickstart.md)**。

## 境界 — 判断はここに無い

`src/app.ts` がやるのは、`POST /xrpc/<nsid>` を dispatcher 宛に転送すること（Bearer
JWT + `lxm` 検証 + 5 NSID の許可リスト付き）と `/health` を返すことだけ。認証の発行も
lane の判断もこの repo には無い。

```
ブラウザ ──▶ market appview (この repo) ──▶ dispatcher.etzhayyim.com  ──▶ 判断はここ
```

`kotodama.jsonld` が宣言する NSID は 3 collection
（`com.etzhayyim.market.listing` / `.settlement` / `.demandSignal`）、
`src/app.ts` が持つ許可リストは 5 NSID（`listOffer` / `publishOffer` / `quotePrice` /
`settleInvoice` / `observeDemand`）、lane は `vault` / `sashiosae` / `lawfirm` /
`bpmn` / `murakumo` の 5 本。

## 実測した現在地

**2026-08-14 UTC の実測**（SvelteKit 構成当時。§「2 つのずれ」の①②はこの測定に基づく）:

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

**2026-09-04 の svelte→cljs 移行後の実測**:

| 対象 | 実測 |
|---|---|
| `npx shadow-cljs compile app` | **通る**（`Build completed. (95 files, 94 compiled, 0 warnings, 18.02s)`、0 errors） |
| local http serve of `web/dist` | `/` 200 / `js/main.js` 200 / `vendor/kotoba-ui.css` 200 |

## 移行によって解消された「2 つのずれ」

移行前の README は「説明文が 2 系統あり、どちらもコードとは別のことを言っている」
ことを記録していた。うち **ずれ②（`src/app.ts` がどこからも参照されていない）は
移行で解消した**: `wrangler.jsonc` の `main` が SvelteKit の生成物
（`.svelte-kit/cloudflare/_worker.js` — 実測で scaffold page + XRPC proxy しか含まず、
`cryptoAssetFreeze` 級のドメインコードを含まなかった）から `./src/app.ts` に変わり、
静的アセットも `../../web/dist` に統一された。これで `kotodama.jsonld` が名指す
component と deploy 対象が同じ program を指す。

**ずれ①（`CLAUDE.md` / `PROJECT.jsonld` が別のアプリ — 暗号資産ポートフォリオ管理 —
の話をしている）は依然として残っている。** 両者が説明する実装はこの repo に無く、
`CLAUDE.md` 自身が「実装は `etzhayyim-project-global` の `global-ui-w5n8p3q6` にある」
と書いている。この repo のコードが実装するのは資本フローの clearinghouse（offer /
quote / settle / demand）で別物。修正権限は上流（`etzhayyim/root`）側にある。

## 依存

- CLJS 面（2026-09-04 以降）: `react@18` / `react-dom@18`（npm）、
  `thheller/shadow-cljs 2.28.20` / `reagent 1.2.0` /
  `io.github.kotoba-lang/appkit`（west sibling local/root — transitive で
  kotoba-ui → liquid-glass-ui → shitsuke）。
- Worker 面: `src/app.ts` の facade（依存は上流 hoist 由来の
  `@etzhayyim/kotodama-host-sdk` 参照のまま。README「Known state」の注記は
  crypto-asset-freeze repo 側の記録を参照）。

## 移行履歴（旧 SvelteKit 構成、2026-09-04 に置き換え）

移行前（2026-08-14 実測）は `appview/.../svelte/` の SvelteKit + Vite 構成で、
`vite build` → `.svelte-kit/cloudflare/_worker.js` を `main` に指し、UI は
`+page.svelte` の静的ランディング 1 枚、XRPC 転送は `+server.ts` が担っていた。
依存は `svelte@^5` / `@sveltejs/kit@^2` / `@sveltejs/adapter-cloudflare@^7` /
`vite@^6` / `typescript@^5`。履歴は git が持つ。
