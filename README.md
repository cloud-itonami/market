# market — appview surface for the Etzhayyim capital-flow clearinghouse

**この repo が持っているのは配信面（Cloudflare Worker + SvelteKit）だけで、
ドメインロジックは 1 行も入っていない。** `market` という名前は機能を示さないので
先に名乗る: `market.etzhayyim.com` として公開されるはずの **appview**（`kotodama.jsonld`
の `"uiType": "appview"` / `"performerType": "service"`）であり、注文の掲示・見積り・
請求の決済・需要観測といった判断は、すべて上流の dispatcher / MCP router 側にある。

`etzhayyim/root` の `60-apps/etzhayyim-project-market` から切り出した抽出物
（`migration.edn`: source revision `c9e7df4b`、tracked 12 files / 22,009 bytes）。

## 中身の全部（14 ファイル）

| パス | 役割 |
|---|---|
| `appview/etzhayyim-wasm-market-mk7r3x9p/svelte/` | **実際にデプロイされる面。** SvelteKit + `@sveltejs/adapter-cloudflare` |
| `　└ src/routes/+page.svelte` | 静的なランディング 1 枚（`routeCount: 0`、リンク先なし） |
| `　└ src/routes/xrpc/[...path]/+server.ts` | XRPC → MCP router への転送（`POST` / `OPTIONS` のみ） |
| `appview/etzhayyim-wasm-market-mk7r3x9p/wrangler.jsonc` | Worker 定義。`main` は **SvelteKit のビルド成果物**を指す |
| `appview/etzhayyim-wasm-market-mk7r3x9p/src/app.ts` | Worker facade。**どこからも参照されていない**（後述） |
| `appview/etzhayyim-wasm-market-mk7r3x9p/kotodama.jsonld` | actor 宣言（DID・lane・NSID・KPI） |
| `CLAUDE.md` / `PROJECT.jsonld` | 上流由来の説明。**コードと一致していない**（後述） |
| `README.edn` / `migration.edn` | 抽出時のメタデータ |

ビルド・起動の手順は **[`docs/operator-quickstart.md`](docs/operator-quickstart.md)**。

## 境界 — 判断はここに無い

`+server.ts` がやるのは、`POST /xrpc/<nsid>` を MCP router 宛の JSON-RPC
`tools/call` に包み直して投げ、`result.structuredContent` を返すことだけ。認証も
lane の検証もこの repo には無い。

```
ブラウザ ──▶ market appview (この repo) ──▶ mcp.etzhayyim.com  ──▶ 判断はここ
                                              (AGENTGATEWAY_MCP_ROUTER_URL)
```

`kotodama.jsonld` が宣言する NSID は 3 collection
（`com.etzhayyim.market.listing` / `.settlement` / `.demandSignal`）、
`src/app.ts` が持つ許可リストは 5 NSID（`listOffer` / `publishOffer` / `quotePrice` /
`settleInvoice` / `observeDemand`）、lane は `vault` / `sashiosae` / `lawfirm` /
`bpmn` / `murakumo` の 5 本。**このうち `+server.ts` は NSID を検証しない** —— 任意の
`path` をそのまま MCP router の tool 名として転送する。

## 実測した現在地（2026-08-14 UTC）

**「無い」と書いてあるものは推測ではなく、この日に実際に引いて確かめた結果。**

| 対象 | 実測 |
|---|---|
| `npm install` → `npm run build` → `npm run check` | **通る**（`check` は 142 files / 0 errors / 0 warnings） |
| ビルド成果物 | `.svelte-kit/cloudflare/_worker.js`（4,335 B）+ `client/` —— `wrangler.jsonc` の `main` / `assets.directory` と一致 |
| `wrangler deploy --dry-run` | **通る**（assets 23 files / 420.94 KiB、binding 11 件が解決） |
| `wrangler dev --local` | **起動する**（初回 20〜30 秒 / 以降 約 3 秒。`/` が 200） |
| `GET /` | 200（`<title>etzhayyim-wasm-market-mk7r3x9p</title>`） |
| `OPTIONS /xrpc/<nsid>` | 204（CORS） |
| `GET /xrpc/<nsid>` | 405（`+server.ts` は `POST` / `OPTIONS` しか export していない） |
| `POST /xrpc/<nsid>` | 500 `{"message":"Internal Error"}` —— 上流が引けないため |
| `etzhayyim.com` | 解決する（104.21.51.111 / 172.67.179.128、Cloudflare） |
| `market.etzhayyim.com` | **解決しない**（NXDOMAIN） |
| `mk7r3x9p.etzhayyim.com` | **解決しない** |
| `dispatcher.etzhayyim.com` | **解決しない** |
| `mcp.etzhayyim.com` | **解決しない** |

つまり **この appview は今どこにも live ではなく、live にしても上流が居ない。**
`wrangler.jsonc` の `routes` と `kotodama.jsonld` の `routes` が指すホストは
どちらも DNS に無い。ローカルで動かす分には上表のとおり完動する。

## 読む前に知っておくべき 2 つのずれ

この repo の説明文は 2 系統あり、**どちらもコードとは別のことを言っている。**
直さずに残してあるのは、どちらが正しいかを決める権限がこの repo に無いため。

**① `CLAUDE.md` と `PROJECT.jsonld` は別のアプリの話をしている。**
両者が説明するのは暗号資産のポートフォリオ管理（取引履歴・PnL・リスク採点・
CoinGecko / DEXScreener 連携、KV bucket `global_crypto_history`）で、**その実装は
この repo に無い** —— `CLAUDE.md` 自身が「実装は `etzhayyim-project-global` の
`global-ui-w5n8p3q6` にある」と書いている。一方この repo のコードが実装しているのは
資本フローの clearinghouse（offer / quote / settle / demand）で、別物。
`README.edn` の `:name` も `com-etzhayyim-app-market` で、GitHub 上の `cloud-itonami/market`
とは違う。

**② `src/app.ts` はどこからも参照されていない。**
`wrangler.jsonc` の `main` は `svelte/.svelte-kit/cloudflare/_worker.js`（SvelteKit の
生成物）であり、`src/app.ts` ではない。`package.json` にも登場しない
（repo 全体を grep して参照 0 件）。しかも中身は `+server.ts` と**動作が違う**:

| | `src/app.ts`（未配線） | `+server.ts`（実際に動く） |
|---|---|---|
| 上流 | `dispatcher.etzhayyim.com/xrpc/<nsid>` | `mcp.etzhayyim.com`（JSON-RPC `tools/call`） |
| 認証 | Bearer JWT 必須（`lxm` 一致 + 寿命 60 秒以内） | **無し** |
| NSID 検証 | 5 件の許可リスト | 無し（任意の path を転送） |
| `/health` | 有り | 無し |

`src/app.ts` を「この Worker の実装」として読まないこと。配線するか消すかは
上流（`etzhayyim/root`）側の判断。

## 依存

`svelte@^5` / `@sveltejs/kit@^2` / `@sveltejs/adapter-cloudflare@^7` / `vite@^6` /
`typescript@^5`。

`wrangler` は `package.json` に**直接は**書かれていないが、
`@sveltejs/adapter-cloudflare@7.2.9` の依存として `wrangler@4.123.0` が入るので、
`wrangler dev` も `wrangler deploy --dry-run` も追加インストール無しで動く（実測）。
`npm install` が `workerd` の postinstall を保留したままでも動いた。
