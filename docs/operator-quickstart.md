# operator quickstart — market appview

**このページの手順は、`appview/etzhayyim-wasm-market-mk7r3x9p/cljs/` から
`node_modules` を消した状態から上から順に実行して出力を確認したものだけを
載せている。** 実行できないものは「やり方」ではなく **なぜ今できないか**を書く
（§5）。UI は SvelteKit → CLJS へ移行済み（README の「移行履歴」参照）— §1〜§4
は現行の cljs/ 構成の手順、§6 に旧構成の履歴を残した。

前提: Node と npm。作業ディレクトリは断りが無い限り
`appview/etzhayyim-wasm-market-mk7r3x9p/cljs/`。

## 1. ビルドする（shadow-cljs + reagent + re-frame + jp-go-dds）

```bash
cd appview/etzhayyim-wasm-market-mk7r3x9p/cljs
npm install
amu compile --target wasm32-browser app
```

実測: `[:app] Build completed. (111 files, 110 compiled, 0 warnings, 41.95s)`。

生成物は `public/js/app.js`（+ `public/js/cljs-runtime/*` + `public/js/manifest.edn`）。
`public/index.html` がそれを `js/app.js` として読む。これらは
`appview/etzhayyim-wasm-market-mk7r3x9p/cljs/.gitignore` の `public/js/` で
除外されており、追跡対象ではない（コミットするのはソースだけ）。

生成される `node_modules/` `.shadow-cljs/` `.cpcache/` `out/` `public/js/` は
すべて `.gitignore` 済み。`package-lock.json` は追跡対象（reference 実装
`cloud-itonami-isic-6110/worker/cljs/` と同じ方針）。

## 2. ローカルで面を叩く

```bash
cd appview/etzhayyim-wasm-market-mk7r3x9p/cljs/public
python3 -m http.server 8731
```

別のシェルから:

```bash
curl -s -o /dev/null -w '%{http_code}\n' http://localhost:8731/               # → 200
curl -s -o /dev/null -w '%{http_code}\n' http://localhost:8731/js/app.js      # → 200
```

`/` の HTML は `<title>etzhayyim-wasm-market-mk7r3x9p</title>` を持つ。ブラウザで
開くと reagent + re-frame 製の appview 画面（Project / Routes / XRPC ファクト +
Public Routes / Runtime Bindings / Source パネル、jp-go-dds ベース）が描画される。
UI の実装は `src/cloud_itonami/market/app.cljs`（単一 namespace・単一 document —
ADR-2608080100 single-page-app 規則）。

## 3. テストを回す

```bash
cd appview/etzhayyim-wasm-market-mk7r3x9p/cljs
amu compile --target wasm32-browser test
node out/tests.js
```

実測: `Ran 5 tests containing 14 assertions. 0 failures, 0 errors.`
（`re-frame: Subscribe was called outside of a reactive context.` の警告は
`cljs.test` が reagent の render サイクル外で subscription を deref するために
出る既知の無害な警告 — reference 実装でも同じ形で出る）。

## 4. Worker として動かす（wrangler）— 未検証

`wrangler.jsonc` は `main: ./src/app.ts`（XRPC facade + `/health` + 静的アセット
fallthrough）で、静的アセットは `assets.directory: ./cljs/public` から配る設定に
変更した。**この変更は `wrangler dev` / デプロイ実行のどちらでも検証していない**
（`wrangler.jsonc` 冒頭のコメント参照）。試す場合:

```bash
cd appview/etzhayyim-wasm-market-mk7r3x9p
npx wrangler dev --port 4321 --local
```

```bash
curl -s -o /dev/null -w '%{http_code}\n' http://localhost:4321/          # 期待: 200（cljs/public の UI）
curl -s -o /dev/null -w '%{http_code}\n' http://localhost:4321/health    # 期待: 200（app.ts の /health）
```

XRPC の往復は §5 のとおり上流 DNS 不在のため確認できない。

## 5. できないこと（と、その理由）

| やりたいこと | 今できない理由 |
|---|---|
| live に疎通する | `market.etzhayyim.com` / `mk7r3x9p.etzhayyim.com` とも **NXDOMAIN**（2026-08-14 UTC 実測。README「実測した現在地」参照） |
| XRPC を往復させる | 上流 `mcp.etzhayyim.com` / `dispatcher.etzhayyim.com` とも **NXDOMAIN** |
| `wrangler dev` / `wrangler deploy` の動作確認 | このフロントエンド migration では実行していない（§4） |

**この表は「壊れているものリスト」ではなく境界の記述。** §1〜§3 は実際に動く。

## 6. 移行履歴（旧構成）

- **旧 SvelteKit 構成**（2026-08-14 実測）: `appview/.../svelte/` の
  SvelteKit + Vite 構成で、`vite build` → `.svelte-kit/cloudflare/_worker.js` を
  `wrangler.jsonc` の `main` に指していた。実測で判明していた問題
  （`_worker.js` は scaffold page + XRPC proxy だけで `src/app.ts` の
  ドメインコマンドを含まない／`src/app.ts` がどこからも参照されない）は、
  `main: ./src/app.ts` への変更で解消した。
- **旧 cljs 構成**（PR #1、2026-09-04）: shadow-cljs + reagent + `kotoba-ui`/
  `appkit`（murakumo-studio 構成）で、ビルド出力を
  `appview/.../web/dist/js/` として直接コミットしていた。本 quickstart が
  記す現行構成（`appview/.../cljs/`、jp-go-dds + re-frame、ビルド出力は
  `.gitignore`）はこれを置き換えたもの。README の「移行履歴」節も参照。
