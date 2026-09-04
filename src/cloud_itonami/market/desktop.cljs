(ns cloud-itonami.market.desktop
  "Entry point for the shadow-cljs :app build (web/dist/js/main.js, loaded
  by web/index.html) — same mount pattern as murakumo-studio.desktop,
  cloud-itonami.app-itonami.desktop and cloud-itonami.crypto-asset-freeze.desktop."
  (:require [reagent.dom.client :as rdomc]
            [cloud-itonami.market.ui :as ui]))

(defonce root (atom nil))

(defn init! []
  (let [el (.getElementById js/document "app")]
    (when-not @root
      (reset! root (rdomc/create-root el)))
    (rdomc/render @root [ui/root])))
