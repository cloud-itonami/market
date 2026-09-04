goog.provide('appkit.core');
/**
 * Desktop panes read as flush/embedded, not floating — `:thick` surface for
 *   legibility over busy dense content, `:flat` elevation (no shadow) because
 *   panes sit side-by-side rather than stacked.
 */
appkit.core.default_panel_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"surface","surface",699915646),new cljs.core.Keyword(null,"thick","thick",-1141078578),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),new cljs.core.Keyword(null,"flat","flat",577594262)], null);
appkit.core.default_list_view_opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"surface","surface",699915646),new cljs.core.Keyword(null,"thick","thick",-1141078578)], null);
appkit.core.panel = (function appkit$core$panel(var_args){
var G__23529 = arguments.length;
switch (G__23529) {
case 1:
return appkit.core.panel.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return appkit.core.panel.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(appkit.core.panel.cljs$core$IFn$_invoke$arity$1 = (function (body){
return appkit.core.panel.cljs$core$IFn$_invoke$arity$2(body,cljs.core.PersistentArrayMap.EMPTY);
}));

(appkit.core.panel.cljs$core$IFn$_invoke$arity$2 = (function (body,opts){
var G__23531 = body;
var G__23532 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([appkit.core.default_panel_opts,opts], 0));
return (kotoba_ui.core.panel.cljs$core$IFn$_invoke$arity$2 ? kotoba_ui.core.panel.cljs$core$IFn$_invoke$arity$2(G__23531,G__23532) : kotoba_ui.core.panel.call(null, G__23531,G__23532));
}));

(appkit.core.panel.cljs$lang$maxFixedArity = 2);

appkit.core.list_view = (function appkit$core$list_view(var_args){
var G__23535 = arguments.length;
switch (G__23535) {
case 1:
return appkit.core.list_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return appkit.core.list_view.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(appkit.core.list_view.cljs$core$IFn$_invoke$arity$1 = (function (rows){
return appkit.core.list_view.cljs$core$IFn$_invoke$arity$2(rows,cljs.core.PersistentArrayMap.EMPTY);
}));

(appkit.core.list_view.cljs$core$IFn$_invoke$arity$2 = (function (rows,opts){
var G__23539 = rows;
var G__23540 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([appkit.core.default_list_view_opts,opts], 0));
return (kotoba_ui.core.list_view.cljs$core$IFn$_invoke$arity$2 ? kotoba_ui.core.list_view.cljs$core$IFn$_invoke$arity$2(G__23539,G__23540) : kotoba_ui.core.list_view.call(null, G__23539,G__23540));
}));

(appkit.core.list_view.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=appkit.core.js.map
