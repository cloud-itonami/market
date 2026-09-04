goog.provide('cloud_itonami.market.desktop');
if((typeof cloud_itonami !== 'undefined') && (typeof cloud_itonami.market !== 'undefined') && (typeof cloud_itonami.market.desktop !== 'undefined') && (typeof cloud_itonami.market.desktop.root !== 'undefined')){
} else {
cloud_itonami.market.desktop.root = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
cloud_itonami.market.desktop.init_BANG_ = (function cloud_itonami$market$desktop$init_BANG_(){
var el = document.getElementById("app");
if(cljs.core.truth_(cljs.core.deref(cloud_itonami.market.desktop.root))){
} else {
cljs.core.reset_BANG_(cloud_itonami.market.desktop.root,reagent.dom.client.create_root(el));
}

return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cloud_itonami.market.desktop.root),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.market.ui.root], null));
});

//# sourceMappingURL=cloud_itonami.market.desktop.js.map
