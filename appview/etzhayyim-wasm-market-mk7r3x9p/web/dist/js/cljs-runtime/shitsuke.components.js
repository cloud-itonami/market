goog.provide('shitsuke.components');
/**
 * Render an `act` value to the data-act attribute string, preserving the
 *   keyword namespace: :cart/add → "cart/add", :new-deck → "new-deck".
 *   Strings pass through; nil stays nil (attribute dropped).
 */
shitsuke.components.act__GT_str = (function shitsuke$components$act__GT_str(a){
if((a == null)){
return null;
} else {
if(typeof a === 'string'){
return a;
} else {
if((a instanceof cljs.core.Keyword)){
var temp__5823__auto__ = cljs.core.namespace(a);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return [ns,"/",cljs.core.name(a)].join('');
} else {
return cljs.core.name(a);
}
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(a);

}
}
}
});
/**
 * Plain button. `label` may be string or hiccup. opts: :class, :act, :disabled,
 *   :title, :type.
 */
shitsuke.components.button = (function shitsuke$components$button(var_args){
var G__22208 = arguments.length;
switch (G__22208) {
case 1:
return shitsuke.components.button.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shitsuke.components.button.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shitsuke.components.button.cljs$core$IFn$_invoke$arity$1 = (function (label){
return shitsuke.components.button.cljs$core$IFn$_invoke$arity$2(label,null);
}));

(shitsuke.components.button.cljs$core$IFn$_invoke$arity$2 = (function (label,opts){
var map__22212 = opts;
var map__22212__$1 = cljs.core.__destructure_map(map__22212);
var act = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22212__$1,new cljs.core.Keyword(null,"act","act",190231886));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22212__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22212__$1,new cljs.core.Keyword(null,"title","title",636505583));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22212__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22212__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),[shitsuke.style.class_name(new cljs.core.Keyword(null,"button","button",1456579943)),(cljs.core.truth_(class$)?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''):null)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__5002__auto__ = type;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "button";
}
})(),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(cljs.core.truth_(disabled)?true:null),new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"data-act","data-act",-318247081),(function (){var G__22214 = act;
if((G__22214 == null)){
return null;
} else {
return shitsuke.components.act__GT_str(G__22214);
}
})()], null),label], null);
}));

(shitsuke.components.button.cljs$lang$maxFixedArity = 2);

/**
 * Button whose label is an icon glyph (string/hiccup). Same opts as button.
 */
shitsuke.components.icon_button = (function shitsuke$components$icon_button(var_args){
var G__22217 = arguments.length;
switch (G__22217) {
case 1:
return shitsuke.components.icon_button.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shitsuke.components.icon_button.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shitsuke.components.icon_button.cljs$core$IFn$_invoke$arity$1 = (function (icon){
return shitsuke.components.icon_button.cljs$core$IFn$_invoke$arity$2(icon,null);
}));

(shitsuke.components.icon_button.cljs$core$IFn$_invoke$arity$2 = (function (icon,opts){
return shitsuke.components.button.cljs$core$IFn$_invoke$arity$2(icon,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"class","class",-2030961996),[shitsuke.style.class_name(new cljs.core.Keyword(null,"icon-button","icon-button",-1094997778)),(function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5825__auto__)){
var c = temp__5825__auto__;
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
} else {
return null;
}
})()].join('')));
}));

(shitsuke.components.icon_button.cljs$lang$maxFixedArity = 2);

/**
 * Label + control row. `control` is hiccup (input/textarea/select).
 */
shitsuke.components.field = (function shitsuke$components$field(var_args){
var G__22221 = arguments.length;
switch (G__22221) {
case 2:
return shitsuke.components.field.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shitsuke.components.field.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shitsuke.components.field.cljs$core$IFn$_invoke$arity$2 = (function (label_text,control){
return shitsuke.components.field.cljs$core$IFn$_invoke$arity$3(label_text,control,null);
}));

(shitsuke.components.field.cljs$core$IFn$_invoke$arity$3 = (function (label_text,control,opts){
var map__22222 = opts;
var map__22222__$1 = cljs.core.__destructure_map(map__22222);
var for_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22222__$1,new cljs.core.Keyword(null,"for-id","for-id",-1264833830));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22222__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[shitsuke.style.class_name(new cljs.core.Keyword(null,"field","field",-1302436500)),(cljs.core.truth_(class$)?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''):null)].join('')], null),(cljs.core.truth_(label_text)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),for_id], null),label_text], null):null),control], null);
}));

(shitsuke.components.field.cljs$lang$maxFixedArity = 3);

/**
 * Shared attrs builder for the native text controls (`input`/`textarea`).
 * 
 *   - A caller `:on-input` is re-attached as `:on-change` when no `:on-change`
 *  is given (kept as-is when the caller wired both — an explicit `:on-change`
 *  always wins, never clobbered). React's `onChange` on text controls fires
 *  on the native `input` event, so the caller-visible semantics
 *  (per-keystroke, `(.. e -target -value)`) are identical — but the rename
 *  matters under reagent: reagent's async-rendering-safe controlled-input
 *  path (reagent.impl.input/input-render-setup) only engages when the props
 *  carry BOTH `value` and `onChange`. With `:value` + `:on-input` the control
 *  is a plain React controlled input under reagent's rAF-batched re-rendering:
 *  after every keystroke React restores the DOM to the last-*rendered* (stale)
 *  value, so any keystroke landing before the next render is typed into a
 *  reverted field and everything but the last keystroke is lost. Reproduced
 *  against reagent 1.2.0/React 18; root-caused downstream in
 *  kotoba-lang/liquid-glass-ui PR #3 (net-babiniku text fields).
 *   - Every other caller opt passes through untouched (`:on-key-down`,
 *  `:disabled`, `:aria-label`, `:maxLength`, ...); `:class` is appended to
 *  the base `shitsuke__<component>` class; `:act` maps to `:data-act`.
 *   - Pure data in → pure data out: equal opts produce `=` hiccup.
 * 
 *   `base` is the control-specific leading attrs (:id/:class/:type/:rows),
 *   passed pre-built so the emitted attribute order — and therefore the SSR
 *   HTML string — stays stable.
 */
shitsuke.components.control_attrs = (function shitsuke$components$control_attrs(opts,base){
var map__22225 = opts;
var map__22225__$1 = cljs.core.__destructure_map(map__22225);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22225__$1,new cljs.core.Keyword(null,"value","value",305978217));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22225__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var on_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22225__$1,new cljs.core.Keyword(null,"on-input","on-input",-267523366));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22225__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var act = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22225__$1,new cljs.core.Keyword(null,"act","act",190231886));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(base,new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5002__auto__ = value;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){var or__5002__auto__ = on_change;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return on_input;
}
})(),new cljs.core.Keyword(null,"on-input","on-input",-267523366),(cljs.core.truth_(on_change)?on_input:null),new cljs.core.Keyword(null,"data-act","data-act",-318247081),(function (){var G__22228 = act;
if((G__22228 == null)){
return null;
} else {
return shitsuke.components.act__GT_str(G__22228);
}
})()], 0)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"on-input","on-input",-267523366),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"act","act",190231886)], 0))], 0));
});
/**
 * Text input. opts: :id, :value, :placeholder, :type, :on-input (cljs — see
 *   `control-attrs`: attached to the hiccup as :on-change so reagent's
 *   async-safe controlled-input path engages; an explicit :on-change wins),
 *   :act (ssr), :class, plus full attr passthrough (:disabled, :aria-*, ...).
 */
shitsuke.components.input = (function shitsuke$components$input(opts){
var map__22230 = opts;
var map__22230__$1 = cljs.core.__destructure_map(map__22230);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22230__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22230__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22230__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),shitsuke.components.control_attrs(opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),[shitsuke.style.class_name(new cljs.core.Keyword(null,"input","input",556931961)),(cljs.core.truth_(class$)?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''):null)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__5002__auto__ = type;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "text";
}
})()], null))], null);
});
/**
 * Textarea. Same opts contract as `input` (plus :rows, default 6; no :type).
 *   :value rides as an *attribute* (not element content) so reagent keeps the
 *   control following app state — value-as-child is read by React only at mount
 *   and the field silently stops being controlled. For SSR,
 *   shitsuke.hiccup/->html special-cases <textarea>: a :value attribute renders
 *   as escaped element content (real HTML has no value attribute on textarea).
 */
shitsuke.components.textarea = (function shitsuke$components$textarea(opts){
var map__22232 = opts;
var map__22232__$1 = cljs.core.__destructure_map(map__22232);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22232__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22232__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22232__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),shitsuke.components.control_attrs(opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),[shitsuke.style.class_name(new cljs.core.Keyword(null,"textarea","textarea",-650375824)),(cljs.core.truth_(class$)?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''):null)].join(''),new cljs.core.Keyword(null,"rows","rows",850049680),(function (){var or__5002__auto__ = rows;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (6);
}
})()], null))], null);
});
/**
 * `options` is a vec of [value label] pairs. opts: :id, :value, :on-change, :act.
 */
shitsuke.components.select = (function shitsuke$components$select(options,opts){
var map__22238 = opts;
var map__22238__$1 = cljs.core.__destructure_map(map__22238);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22238__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22238__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22238__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var act = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22238__$1,new cljs.core.Keyword(null,"act","act",190231886));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),shitsuke.style.class_name(new cljs.core.Keyword(null,"select","select",1147833503)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"data-act","data-act",-318247081),(function (){var G__22239 = act;
if((G__22239 == null)){
return null;
} else {
return shitsuke.components.act__GT_str(G__22239);
}
})()], null),(function (){var iter__5480__auto__ = (function shitsuke$components$select_$_iter__22240(s__22241){
return (new cljs.core.LazySeq(null,(function (){
var s__22241__$1 = s__22241;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22241__$1);
if(temp__5825__auto__){
var s__22241__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22241__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22241__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22243 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22242 = (0);
while(true){
if((i__22242 < size__5479__auto__)){
var vec__22244 = cljs.core._nth(c__5478__auto__,i__22242);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22244,(0),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22244,(1),null);
cljs.core.chunk_append(b__22243,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value))], null),l], null));

var G__22331 = (i__22242 + (1));
i__22242 = G__22331;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22243),shitsuke$components$select_$_iter__22240(cljs.core.chunk_rest(s__22241__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22243),null);
}
} else {
var vec__22248 = cljs.core.first(s__22241__$2);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22248,(0),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22248,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value))], null),l], null),shitsuke$components$select_$_iter__22240(cljs.core.rest(s__22241__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(options);
})()], null);
});
/**
 * Box container. `body` is hiccup or seq. opts: :class, :id.
 */
shitsuke.components.card = (function shitsuke$components$card(var_args){
var G__22252 = arguments.length;
switch (G__22252) {
case 1:
return shitsuke.components.card.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shitsuke.components.card.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shitsuke.components.card.cljs$core$IFn$_invoke$arity$1 = (function (body){
return shitsuke.components.card.cljs$core$IFn$_invoke$arity$2(body,null);
}));

(shitsuke.components.card.cljs$core$IFn$_invoke$arity$2 = (function (body,opts){
var map__22255 = opts;
var map__22255__$1 = cljs.core.__destructure_map(map__22255);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22255__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22255__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),[shitsuke.style.class_name(new cljs.core.Keyword(null,"card","card",-1430355152)),(cljs.core.truth_(class$)?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''):null)].join('')], null),body], null);
}));

(shitsuke.components.card.cljs$lang$maxFixedArity = 2);

/**
 * Horizontal action row. `actions` is a seq of hiccup (typically buttons).
 */
shitsuke.components.toolbar = (function shitsuke$components$toolbar(var_args){
var G__22260 = arguments.length;
switch (G__22260) {
case 1:
return shitsuke.components.toolbar.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shitsuke.components.toolbar.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shitsuke.components.toolbar.cljs$core$IFn$_invoke$arity$1 = (function (actions){
return shitsuke.components.toolbar.cljs$core$IFn$_invoke$arity$2(actions,null);
}));

(shitsuke.components.toolbar.cljs$core$IFn$_invoke$arity$2 = (function (actions,opts){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[shitsuke.style.class_name(new cljs.core.Keyword(null,"toolbar","toolbar",-1172789065)),(function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5825__auto__)){
var c = temp__5825__auto__;
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
} else {
return null;
}
})()].join('')], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477)], null),actions)], null);
}));

(shitsuke.components.toolbar.cljs$lang$maxFixedArity = 2);

/**
 * Tab strip. `tabs` is [id label] pairs; `current` is the active id.
 */
shitsuke.components.mode_tabs = (function shitsuke$components$mode_tabs(var_args){
var G__22264 = arguments.length;
switch (G__22264) {
case 2:
return shitsuke.components.mode_tabs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shitsuke.components.mode_tabs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shitsuke.components.mode_tabs.cljs$core$IFn$_invoke$arity$2 = (function (tabs,current){
return shitsuke.components.mode_tabs.cljs$core$IFn$_invoke$arity$3(tabs,current,null);
}));

(shitsuke.components.mode_tabs.cljs$core$IFn$_invoke$arity$3 = (function (tabs,current,opts){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),shitsuke.style.class_name(new cljs.core.Keyword(null,"mode-tabs","mode-tabs",955511815))], null),(function (){var iter__5480__auto__ = (function shitsuke$components$iter__22266(s__22267){
return (new cljs.core.LazySeq(null,(function (){
var s__22267__$1 = s__22267;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22267__$1);
if(temp__5825__auto__){
var s__22267__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22267__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22267__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22269 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22268 = (0);
while(true){
if((i__22268 < size__5479__auto__)){
var vec__22271 = cljs.core._nth(c__5478__auto__,i__22268);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22271,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22271,(1),null);
cljs.core.chunk_append(b__22269,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(id),new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),[shitsuke.style.class_name(new cljs.core.Keyword(null,"tab","tab",-559583621)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current))?[" ",shitsuke.style.class_name(new cljs.core.Keyword(null,"tab--active","tab--active",-1453423711))].join(''):null)].join(''),new cljs.core.Keyword(null,"data-act","data-act",-318247081),(function (){var G__22280 = id;
if((G__22280 == null)){
return null;
} else {
return shitsuke.components.act__GT_str(G__22280);
}
})()], null),label], null));

var G__22453 = (i__22268 + (1));
i__22268 = G__22453;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22269),shitsuke$components$iter__22266(cljs.core.chunk_rest(s__22267__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22269),null);
}
} else {
var vec__22281 = cljs.core.first(s__22267__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22281,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22281,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(id),new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),[shitsuke.style.class_name(new cljs.core.Keyword(null,"tab","tab",-559583621)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current))?[" ",shitsuke.style.class_name(new cljs.core.Keyword(null,"tab--active","tab--active",-1453423711))].join(''):null)].join(''),new cljs.core.Keyword(null,"data-act","data-act",-318247081),(function (){var G__22286 = id;
if((G__22286 == null)){
return null;
} else {
return shitsuke.components.act__GT_str(G__22286);
}
})()], null),label], null),shitsuke$components$iter__22266(cljs.core.rest(s__22267__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(tabs);
})()], null);
}));

(shitsuke.components.mode_tabs.cljs$lang$maxFixedArity = 3);

/**
 * Selectable thumbnail. `active?` toggles the active class. `body` is hiccup.
 */
shitsuke.components.thumb = (function shitsuke$components$thumb(var_args){
var G__22288 = arguments.length;
switch (G__22288) {
case 2:
return shitsuke.components.thumb.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shitsuke.components.thumb.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shitsuke.components.thumb.cljs$core$IFn$_invoke$arity$2 = (function (body,active_QMARK_){
return shitsuke.components.thumb.cljs$core$IFn$_invoke$arity$3(body,active_QMARK_,null);
}));

(shitsuke.components.thumb.cljs$core$IFn$_invoke$arity$3 = (function (body,active_QMARK_,opts){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),[shitsuke.style.class_name(new cljs.core.Keyword(null,"thumb","thumb",1718947232)),(cljs.core.truth_(active_QMARK_)?[" ",shitsuke.style.class_name(new cljs.core.Keyword(null,"thumb--active","thumb--active",1524288554))].join(''):null)].join(''),new cljs.core.Keyword(null,"data-act","data-act",-318247081),(function (){var G__22289 = new cljs.core.Keyword(null,"act","act",190231886).cljs$core$IFn$_invoke$arity$1(opts);
if((G__22289 == null)){
return null;
} else {
return shitsuke.components.act__GT_str(G__22289);
}
})()], null),body], null);
}));

(shitsuke.components.thumb.cljs$lang$maxFixedArity = 3);

/**
 * Visibility-toggled pane. `hidden?` hides it. `body` is hiccup.
 */
shitsuke.components.pane = (function shitsuke$components$pane(hidden_QMARK_,body){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),shitsuke.style.class_name(new cljs.core.Keyword(null,"pane","pane",1593450723)),new cljs.core.Keyword(null,"hidden","hidden",-312506092),(cljs.core.truth_(hidden_QMARK_)?true:null)], null),body], null);
});

//# sourceMappingURL=shitsuke.components.js.map
