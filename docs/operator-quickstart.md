# operator quickstart — market appview

**このページの手順は 2026-08-14 (UTC) に、`node_modules` を消した状態から上から順に
実行して出力を確認したものだけを載せている。** 実行できないものは「やり方」ではなく
**なぜ今できないか**を書く（§6）。

前提: Node と npm。実測に使ったのは **node v26.3.0 / npm 11.16.0**。
作業ディレクトリは断りが無い限り `appview/etzhayyim-wasm-market-mk7r3x9p/svelte`。

## 1. ビルドする（所要 1 分弱）

```bash
cd appview/etzhayyim-wasm-market-mk7r3x9p/svelte
npm install
npm run build
```

`npm install` は最後にこう警告するが、**このあとの手順はすべて通る**（実測）:

```
npm warn allow-scripts 3 packages have install scripts not yet covered by allowScripts:
npm warn allow-scripts   esbuild@0.25.12 (postinstall: node install.js)
npm warn allow-scripts   esbuild@0.28.1  (postinstall: node install.js)
npm warn allow-scripts   workerd@1.20260811.1 (postinstall: node install.js)
```

postinstall が保留されたままでも `vite build` も `wrangler dev`（§5）も完走する。
**この警告を見て手を止めないこと** —— 実際に踏んで確認済み。

> **重い build は resource governor を通す**（この workspace 全体の規則）。
> ```bash
> node <superproject>/scripts/resource-guard.mjs run build -- npm run build
> ```

成功すると `✓ built in ...` が 2 回（client / server）出る。

生成される `node_modules/` `.svelte-kit/` `.wrangler/` は `.gitignore` 済み。
**`package-lock.json` だけは ignore していない** —— この repo は lockfile を追跡して
おらず、コミットするかどうかは repo の所有者が決めることなので、こちらで既定を
作らなかった。`npm install` 後に untracked として見えるのはそのため。

## 2. ビルド成果物が wrangler の設定と一致することを確かめる

`wrangler.jsonc` の `main` と `assets.directory` が指す先が、実際に生成されているか:

```bash
ls -la .svelte-kit/cloudflare/_worker.js
ls    .svelte-kit/cloudflare/client
```

実測:

```
-rw-r--r--  1 ...  4335 Aug 15 01:01 .svelte-kit/cloudflare/_worker.js
_app
_headers
```

**この確認を飛ばさないこと。** `wrangler.jsonc` の `main` は `src/app.ts` ではなく
SvelteKit の生成物を指しており、両者は動作が違う（README の「2 つのずれ」を参照）。

## 3. 型検査

```bash
npm run check
```

実測: `COMPLETED 142 FILES 0 ERRORS 0 WARNINGS 0 FILES_WITH_PROBLEMS`。

**変更を入れる前に一度これを通す。** 0 errors から始まっていることを確かめておかないと、
自分の変更が壊したのかどうかを後で判定できない。

## 4. ローカルで起動して面を叩く（vite preview）

```bash
npm run preview -- --port 4319
```

別のシェルから。**期待値は「全部 200」ではない** —— 下の 4 行が揃って初めて正常:

```bash
curl -s -o /dev/null -w '%{http_code}\n' http://localhost:4319/
#   → 200   ランディングが描画される（<title>etzhayyim-wasm-market-mk7r3x9p</title>）

curl -s -o /dev/null -w '%{http_code}\n' -X OPTIONS http://localhost:4319/xrpc/com.etzhayyim.market.listOffer
#   → 204   CORS preflight

curl -s -o /dev/null -w '%{http_code}\n' http://localhost:4319/xrpc/com.etzhayyim.market.listOffer
#   → 405   GET は無い。+server.ts は POST と OPTIONS しか export していない

curl -s -X POST -H 'content-type: application/json' -d '{}' \
     http://localhost:4319/xrpc/com.etzhayyim.market.listOffer
#   → 500 {"message":"Internal Error"}
```

**最後の 500 は正常な結果である。** `+server.ts` は受け取った body を
`AGENTGATEWAY_MCP_ROUTER_URL`（既定 `https://mcp.etzhayyim.com/xrpc/com.etzhayyim.mcp.message`）へ
転送するが、**そのホストは DNS に存在しない**（§6）。つまりこの 500 は
「壊れている」ではなく「上流が居ない」を意味する。

終わったら止める: `pkill -f "vite preview"`

## 5. Worker として動かす・設定を検証する（wrangler）

**`wrangler` は `package.json` に書かれていないが、`@sveltejs/adapter-cloudflare@7.2.9`
の依存として入る**（実測 `wrangler@4.123.0`）。したがって別途インストールは要らない。
`wrangler.jsonc` が在るのは `svelte/` の**ひとつ上**なので、cd する:

```bash
cd appview/etzhayyim-wasm-market-mk7r3x9p
```

### 5a. 設定とバンドルを検証する（デプロイしない）

```bash
./svelte/node_modules/.bin/wrangler deploy --dry-run --outdir /tmp/mkt-dryrun
```

実測: exit 0。`Read 23 files from the assets directory` /
`Total Upload: 420.94 KiB / gzip: 94.69 KiB` と、`env.ASSETS` + 10 個の
Environment Variable が解決されることを表示して終わる。

**既知の警告 1 件**（無害だが、消したいなら `wrangler.jsonc` の `rules` に
`"fallthrough": true` を足す）:

```
▲ WARNING The module rule {"type":"CompiledWasm","globs":["**/*.wasm"]} does not have a fallback
```

### 5b. Worker をローカルで起動する

```bash
./svelte/node_modules/.bin/wrangler dev --port 4321 --local
```

`[wrangler:info] Ready on http://localhost:4321` が出るまで、**初回は 20〜30 秒**
（workerd の取得を含む）、**2 回目以降は約 3 秒**（実測）。実測した挙動は §4 と同じ:

```bash
curl -s -o /dev/null -w '%{http_code}\n' http://localhost:4321/          # → 200
curl -s -X POST -H 'content-type: application/json' -d '{}' \
     http://localhost:4321/xrpc/com.etzhayyim.market.listOffer            # → 500（上流不在）
```

POST のとき wrangler のログに `✘ [ERROR] Uncaught Error: internal error` が出るのは、
上流 fetch が DNS で失敗しているため。**`vite preview`（§4）との違いは
`platform.env` が実際に注入されること** —— 転送先を差し替えて経路を試したいなら、
`wrangler.jsonc` の `vars.AGENTGATEWAY_MCP_ROUTER_URL` を書き換えてこちらで動かす
（`vite preview` では `platform.env` が無いので `+server.ts` の既定値が効き、上書きできない）。

終わったら止める: `pkill -f "wrangler dev"`

## 6. できないこと（と、その理由）

| やりたいこと | 今できない理由 |
|---|---|
| live に疎通する | `market.etzhayyim.com` / `mk7r3x9p.etzhayyim.com` とも **NXDOMAIN**（2026-08-14 UTC 実測） |
| XRPC を往復させる | 上流 `mcp.etzhayyim.com` / `dispatcher.etzhayyim.com` とも **NXDOMAIN** |
| `src/app.ts` の `/health` を叩く | そのファイルは**どこからも参照されていない**。ビルドにも deploy にも入らない（README 参照） |

**この表は「壊れているものリスト」ではなく境界の記述。** §1〜§5 は実際に動く。
`wrangler deploy`（dry-run でない本番デプロイ）を**この quickstart は扱わない** ——
宛先ホストが DNS に無い以上、今それを踏んでも確かめられることが無い。

## 7. 変更を入れるときの最小ループ

```bash
cd appview/etzhayyim-wasm-market-mk7r3x9p/svelte
npm run check          # 変更前に 0 errors を確認
# ... 編集 ...
npm run check          # 失敗集合を比べる
npm run build          # _worker.js が生成され続けることを確認
cd .. && ./svelte/node_modules/.bin/wrangler deploy --dry-run --outdir /tmp/mkt-dryrun
```

この repo には**テストが 1 本も無い**（`package.json` に `test` script が無い）。したがって
`check` と `build` と dry-run と §4/§5 の curl が、今あるすべての回帰検査である。
