# operator quickstart — market appview

**このページの手順は 2026-08-14 (UTC) に、`node_modules` を消した状態から上から順に
実行して出力を確認したものだけを載せている。** 実行できないものは「やり方」ではなく
**なぜ今できないか**を書く（§6）。UI は **2026-09-04 に svelte→cljs へ移行済み** —
§1 は書き換え、§2〜§5 の SvelteKit 前提の手順は履歴として §8 に残した。

前提: Node と npm と Clojure CLI（`clojure` コマンド）。実測に使ったのは
**node v26.3.0 / npm 11.16.0**。作業ディレクトリは断りが無い限り repo ルート。

## 1. ビルドする（shadow-cljs + reagent + kotoba-ui、murakumo-studio構成）

```bash
npm install
npx shadow-cljs compile app
```

実測（2026-09-04）: `[:app] Build completed. (95 files, 94 compiled, 0 warnings, 18.02s)`。

生成物は `appview/etzhayyim-wasm-market-mk7r3x9p/web/dist/js/main.js`。
`web/dist/index.html`（= `web/index.html` と同一内容）が `js/main.js` と
`vendor/kotoba-ui.css` を読む。`vendor/kotoba-ui.css` は
`orgs/kotoba-lang/murakumo-studio` 由来の checked-in ファイルで、compile では生成されない。

生成される `node_modules/` `.shadow-cljs/` `.cpcache/` `package-lock.json` は
`.gitignore` 済み（この repo は lockfile を追跡しない方針）。

## 2. ローカルで面を叩く

```bash
cd appview/etzhayyim-wasm-market-mk7r3x9p/web/dist
python3 -m http.server 8731
```

別のシェルから:

```bash
curl -s -o /dev/null -w '%{http_code}\n' http://localhost:8731/                  # → 200
curl -s -o /dev/null -w '%{http_code}\n' http://localhost:8731/js/main.js        # → 200
curl -s -o /dev/null -w '%{http_code}\n' http://localhost:8731/vendor/kotoba-ui.css  # → 200
```

実測（2026-09-04）: 3 行とも 200。`/` の HTML は `<title>etzhayyim-wasm-market-mk7r3x9p</title>`
を持ち、`js/main.js` と `vendor/kotoba-ui.css` を参照する。ブラウザで開くと
reagent 製の appview 画面（Project / Routes / XRPC ファクト + Public Routes /
Runtime Bindings / Source パネル）が描画される。UI の実装は
`src/cloud_itonami/market/{state,ui,desktop}.cljs`。

## 3. Worker として動かす（wrangler）

`wrangler.jsonc` は `main: ./src/app.ts`（XRPC facade + `/health`）で、
静的アセットは `assets.directory: ../../web/dist` から配る。svelte→cljs 移行後、
`kotodama.jsonld` の `component.path` と deploy 対象は同じ program を指す。

```bash
cd appview/etzhayyim-wasm-market-mk7r3x9p
npx wrangler dev --port 4321 --local
```

```bash
curl -s -o /dev/null -w '%{http_code}\n' http://localhost:4321/          # → 200（web/dist の UI）
curl -s -o /dev/null -w '%{http_code}\n' http://localhost:4321/health    # → 200（app.ts の /health）
```

XRPC の往復は §6 のとおり上流 DNS 不在のため不可（移行前から変わらない）。

## 4. 変更を入れるときの最小ループ

```bash
npx shadow-cljs compile app     # Build completed, 0 errors を確認
git diff --stat                 # web/dist 配下の再生成差分を目視
```

`src/cloud_itonami/market/*.cljs` を編集したら compile して
`web/dist/js/` を更新する（dist は追跡対象 — 参照実装
`orgs/cloud-itonami/crypto-asset-freeze` と同じ方針）。

## 5. できないこと（と、その理由）

| やりたいこと | 今できない理由 |
|---|---|
| live に疎通する | `market.etzhayyim.com` / `mk7r3x9p.etzhayyim.com` とも **NXDOMAIN**（2026-08-14 UTC 実測。移行後も 2026-09-04 に変わらず） |
| XRPC を往復させる | 上流 `mcp.etzhayyim.com` / `dispatcher.etzhayyim.com` とも **NXDOMAIN** |

**この表は「壊れているものリスト」ではなく境界の記述。** §1〜§3 は実際に動く。
`wrangler deploy`（dry-run でない本番デプロイ）を**この quickstart は扱わない** ——
宛先ホストが DNS に無い以上、今それを踏んでも確かめられることが無い。

## 6. 移行履歴（旧 SvelteKit 構成、2026-09-04 に置き換え）

移行前（2026-08-14 実測）は `appview/.../svelte/` の SvelteKit + Vite
構成で、`vite build` → `.svelte-kit/cloudflare/_worker.js` を
`wrangler.jsonc` の `main` に指していた。実測で判明していた問題
（**_worker.js は scaffold page + XRPC proxy だけで、`src/app.ts` の
ドメインコマンドを含まない** / `src/app.ts` がどこからも参照されない）
は、移行によって `main: ./src/app.ts` + `assets: web/dist` に統一して解消した。
README の Layout 節も参照。
