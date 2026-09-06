(ns cloud-itonami.market.app-test
  (:require [cljs.test :refer [deftest is testing use-fixtures]]
            [re-frame.core :as rf]
            [re-frame.db :as rf-db]
            [cloud-itonami.market.app :as app]))

(use-fixtures :each
  {:before (fn [] (rf/clear-subscription-cache!) (reset! rf-db/app-db {}))})

(deftest initialize-db-sets-defaults
  (testing ":initialize-db populates every fact the Svelte scaffold held (route-count/routes/vars corrected to wrangler.jsonc)"
    (rf/dispatch-sync [:initialize-db])
    (is (= app/default-db @rf-db/app-db))
    (is (= "Market Mk7r3x9p" @(rf/subscribe [:app/title])))
    (is (= "etzhayyim-wasm-market-mk7r3x9p" @(rf/subscribe [:app/name])))
    (is (= "etzhayyim-project-market" @(rf/subscribe [:app/project])))
    (is (= "appview" @(rf/subscribe [:app/kind])))
    (is (= 2 @(rf/subscribe [:app/route-count])))
    (is (= ["mk7r3x9p.etzhayyim.com/*" "market.etzhayyim.com/*"]
           @(rf/subscribe [:app/routes])))
    (is (= ["AGENTGATEWAY_MCP_ROUTER_URL" "APP_ACTOR_HANDLE" "APP_CAPABILITIES"
            "APP_DESCRIPTION" "APP_DISPLAY_NAME" "APP_EMBED_URL" "APP_FRAMEWORK"
            "APP_NANOID" "APP_PERFORMER_TYPE" "APP_UI_TYPE"]
           @(rf/subscribe [:app/vars])))
    (is (true? @(rf/subscribe [:app/xrpc?])))
    (is (= "appview/etzhayyim-wasm-market-mk7r3x9p/cljs/src/cloud_itonami/market/app.cljs"
           @(rf/subscribe [:app/relative-path])))))

(deftest routes-sub-reflects-db
  (testing ":app/routes reads whatever is in the db, not a fixed value"
    (reset! rf-db/app-db {:app/routes ["only-one.example.com/*"]})
    (is (= ["only-one.example.com/*"] @(rf/subscribe [:app/routes])))))

(deftest vars-sub-reflects-db
  (testing ":app/vars reads whatever is in the db, not a fixed value"
    (reset! rf-db/app-db {:app/vars []})
    (is (= [] @(rf/subscribe [:app/vars])))))

(deftest xrpc-sub-reflects-db
  (testing ":app/xrpc? reads whatever is in the db, not a fixed value"
    (reset! rf-db/app-db {:app/xrpc? false})
    (is (false? @(rf/subscribe [:app/xrpc?])))))

(deftest initialize-db-overwrites-prior-state
  (testing ":initialize-db resets to defaults even if the db already had other data"
    (reset! rf-db/app-db {:app/title "stale" :app/xrpc? false :unrelated 42})
    (rf/dispatch-sync [:initialize-db])
    (is (= app/default-db @rf-db/app-db))))
