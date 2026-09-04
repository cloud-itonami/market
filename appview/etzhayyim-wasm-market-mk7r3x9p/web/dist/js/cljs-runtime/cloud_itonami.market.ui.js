goog.provide('cloud_itonami.market.ui');
cloud_itonami.market.ui.css_text = "\n.mkt-app { min-height: 100vh; padding: 24px; background: var(--liquid-glass-bg, #11161d); color: var(--liquid-glass-fg, #eef4f8); font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif; }\n.mkt-top { margin-bottom: 18px; }\n.mkt-top p, .mkt-top span, .mkt-muted, .mkt-app h2, .mkt-facts span { color: #96a6b8; }\n.mkt-top p { margin: 0 0 8px; font-size: 12px; font-weight: 700; text-transform: uppercase; }\n.mkt-app h1, .mkt-app h2, .mkt-app p { margin: 0; }\n.mkt-app h1 { font-size: clamp(28px, 5vw, 48px); line-height: 1.05; }\n.mkt-top span { display: block; margin-top: 8px; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; overflow-wrap: anywhere; }\n.mkt-facts { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; margin-bottom: 12px; }\n.mkt-facts > div, .mkt-panel { border: 1px solid #2b3948; border-radius: 8px; background: #171f28; }\n.mkt-facts > div { padding: 14px; }\n.mkt-facts span { display: block; margin-bottom: 8px; font-size: 12px; }\n.mkt-facts strong { overflow-wrap: anywhere; }\n.mkt-panel { margin-bottom: 12px; padding: 16px; }\n.mkt-app h2 { margin-bottom: 12px; font-size: 13px; text-transform: uppercase; }\n.mkt-app ul { display: grid; gap: 8px; margin: 0; padding: 0; list-style: none; }\n.mkt-app li, .mkt-path p { border: 1px solid #263443; border-radius: 6px; background: #101720; padding: 9px 10px; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; overflow-wrap: anywhere; }\n.mkt-chips { grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); }\n@media (max-width: 760px) { .mkt-app { padding: 18px; } .mkt-facts { grid-template-columns: 1fr; } }\n";
cloud_itonami.market.ui.panel = (function cloud_itonami$market$ui$panel(title,body){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.mkt-panel","section.mkt-panel",-1838954295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),title], null),body], null);
});
cloud_itonami.market.ui.facts = (function cloud_itonami$market$ui$facts(app){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.mkt-facts","section.mkt-facts",1298307462),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Project"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.Keyword(null,"project","project",1124394579).cljs$core$IFn$_invoke$arity$1(app)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Routes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.Keyword(null,"route-count","route-count",-1535759193).cljs$core$IFn$_invoke$arity$1(app)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"XRPC"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),(cljs.core.truth_(new cljs.core.Keyword(null,"xrpc?","xrpc?",938402752).cljs$core$IFn$_invoke$arity$1(app))?"enabled":"not configured")], null)], null)], null);
});
cloud_itonami.market.ui.public_routes = (function cloud_itonami$market$ui$public_routes(p__23563){
var map__23564 = p__23563;
var map__23564__$1 = cljs.core.__destructure_map(map__23564);
var routes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23564__$1,new cljs.core.Keyword(null,"routes","routes",457900162));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.market.ui.panel,"Public Routes",((cljs.core.seq(routes))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5480__auto__ = (function cloud_itonami$market$ui$public_routes_$_iter__23572(s__23573){
return (new cljs.core.LazySeq(null,(function (){
var s__23573__$1 = s__23573;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__23573__$1);
if(temp__5825__auto__){
var s__23573__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23573__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__23573__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__23575 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__23574 = (0);
while(true){
if((i__23574 < size__5479__auto__)){
var r = cljs.core._nth(c__5478__auto__,i__23574);
cljs.core.chunk_append(b__23575,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),r], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),r], null)));

var G__23601 = (i__23574 + (1));
i__23574 = G__23601;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23575),cloud_itonami$market$ui$public_routes_$_iter__23572(cljs.core.chunk_rest(s__23573__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23575),null);
}
} else {
var r = cljs.core.first(s__23573__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),r], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),r], null)),cloud_itonami$market$ui$public_routes_$_iter__23572(cljs.core.rest(s__23573__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(routes);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mkt-muted","p.mkt-muted",-1462111790),"No public route is declared next to this app surface."], null))], null);
});
cloud_itonami.market.ui.runtime_bindings = (function cloud_itonami$market$ui$runtime_bindings(p__23585){
var map__23586 = p__23585;
var map__23586__$1 = cljs.core.__destructure_map(map__23586);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23586__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.market.ui.panel,"Runtime Bindings",((cljs.core.seq(vars))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.mkt-chips","ul.mkt-chips",1135058982),(function (){var iter__5480__auto__ = (function cloud_itonami$market$ui$runtime_bindings_$_iter__23587(s__23588){
return (new cljs.core.LazySeq(null,(function (){
var s__23588__$1 = s__23588;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__23588__$1);
if(temp__5825__auto__){
var s__23588__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23588__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__23588__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__23590 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__23589 = (0);
while(true){
if((i__23589 < size__5479__auto__)){
var k = cljs.core._nth(c__5478__auto__,i__23589);
cljs.core.chunk_append(b__23590,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),k], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));

var G__23611 = (i__23589 + (1));
i__23589 = G__23611;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23590),cloud_itonami$market$ui$runtime_bindings_$_iter__23587(cljs.core.chunk_rest(s__23588__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23590),null);
}
} else {
var k = cljs.core.first(s__23588__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),k], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),cloud_itonami$market$ui$runtime_bindings_$_iter__23587(cljs.core.rest(s__23588__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(vars);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mkt-muted","p.mkt-muted",-1462111790),"No public vars are declared in the nearest wrangler config."], null))], null);
});
cloud_itonami.market.ui.source = (function cloud_itonami$market$ui$source(p__23595){
var map__23596 = p__23595;
var map__23596__$1 = cljs.core.__destructure_map(map__23596);
var relative_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23596__$1,new cljs.core.Keyword(null,"relative-path","relative-path",1848635172));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.mkt-panel.mkt-path","section.mkt-panel.mkt-path",-185623689),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Source"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),relative_path], null)], null);
});
cloud_itonami.market.ui.root = (function cloud_itonami$market$ui$root(){
var map__23597 = cljs.core.deref(cloud_itonami.market.state.state);
var map__23597__$1 = cljs.core.__destructure_map(map__23597);
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23597__$1,new cljs.core.Keyword(null,"app","app",-560961707));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),cloud_itonami.market.ui.css_text], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [appkit.core.panel,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main.mkt-app","main.mkt-app",2034449199),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.mkt-top","section.mkt-top",-895885959),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Cloudflare ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(app))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(app)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(app)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.market.ui.facts,app], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.market.ui.public_routes,app], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.market.ui.runtime_bindings,app], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.market.ui.source,app], null)], null)], null)], null);
});

//# sourceMappingURL=cloud_itonami.market.ui.js.map
