(ns cloud-itonami.market.state
  "App state for the market appview UI. Ported 1:1 from the former
  appview/etzhayyim-wasm-market-mk7r3x9p/svelte/src/routes/+page.svelte
  template shell — a single static screen describing the app surface
  (title / project / routes / bindings / source path). Single reagent
  atom, murakumo-studio構成."
  (:require [reagent.core :as r]))

(defonce state
  (r/atom
   {:app {:title "Market Mk7r3x9p"
          :project "etzhayyim-project-market"
          :name "etzhayyim-wasm-market-mk7r3x9p"
          :kind "appview"
          :route-count 0
          :routes []
          :vars []
          :xrpc? true
          :relative-path "60-apps/etzhayyim-project-market/appview/etzhayyim-wasm-market-mk7r3x9p/svelte/src/routes/+page.svelte"}}))
