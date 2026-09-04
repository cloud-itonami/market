goog.provide('shitsuke.tokens');
/**
 * Initial web-CSS token set. Deliberately small; dark mode / i18n typography
 *   are extension points (see docs/design.md), not v1.
 */
shitsuke.tokens.default_tokens = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("shitsuke","colors","shitsuke/colors",-494612392),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"ink","ink",1753764830),"#17202A",new cljs.core.Keyword(null,"muted","muted",1275109029),"#526170",new cljs.core.Keyword(null,"line","line",212345235),"#D8DEE8",new cljs.core.Keyword(null,"panel","panel",-558637456),"#F7F8FB",new cljs.core.Keyword(null,"wash","wash",1591337248),"#FFFFFF",new cljs.core.Keyword(null,"accent","accent",-1826298468),"#496B9A",new cljs.core.Keyword(null,"accent2","accent2",-800234848),"#7C9A4B",new cljs.core.Keyword(null,"danger","danger",-624338030),"#B46A55"], null),new cljs.core.Keyword("shitsuke","type","shitsuke/type",1602529816),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"eyebrow","eyebrow",497521636),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Aptos Display, system-ui, sans-serif",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"10px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(700),new cljs.core.Keyword(null,"color","color",1011675173),"var(--shitsuke-colors-accent2)"], null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Aptos Display, system-ui, sans-serif",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"38px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(700),new cljs.core.Keyword(null,"color","color",1011675173),"var(--shitsuke-colors-ink)"], null),new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Aptos, system-ui, sans-serif",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(400),new cljs.core.Keyword(null,"color","color",1011675173),"var(--shitsuke-colors-muted)"], null),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Aptos, system-ui, sans-serif",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"16px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(400),new cljs.core.Keyword(null,"color","color",1011675173),"var(--shitsuke-colors-ink)"], null),new cljs.core.Keyword(null,"caption","caption",-855383902),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Aptos, system-ui, sans-serif",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"9px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(400),new cljs.core.Keyword(null,"color","color",1011675173),"var(--shitsuke-colors-muted)"], null)], null),new cljs.core.Keyword("shitsuke","spacing","shitsuke/spacing",-247854765),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"0","0",351625802),"0px",new cljs.core.Keyword(null,"1","1",-521621649),"4px",new cljs.core.Keyword(null,"2","2",-1645882217),"8px",new cljs.core.Keyword(null,"3","3",2097825370),"12px",new cljs.core.Keyword(null,"4","4",-1197948085),"16px",new cljs.core.Keyword(null,"5","5",538911032),"24px",new cljs.core.Keyword(null,"6","6",-1107752709),"32px"], null),new cljs.core.Keyword("shitsuke","motion","shitsuke/motion",-532300987),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fast","fast",-24391997),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"duration","duration",1444101068),"120ms",new cljs.core.Keyword(null,"easing","easing",735372043),"ease-out"], null),new cljs.core.Keyword(null,"normal","normal",-1519123858),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"duration","duration",1444101068),"200ms",new cljs.core.Keyword(null,"easing","easing",735372043),"ease-out"], null)], null),new cljs.core.Keyword("shitsuke","breakpoints","shitsuke/breakpoints",1567973223),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sm","sm",-1402575065),"640px",new cljs.core.Keyword(null,"md","md",707286655),"940px",new cljs.core.Keyword(null,"lg","lg",-80787836),"1200px"], null)], null);
/**
 * Right-biased recursive merge for token maps. Ported from slides.design so
 *   decks/repos can layer overrides on default-tokens.
 */
shitsuke.tokens.deep_merge = (function shitsuke$tokens$deep_merge(var_args){
var args__5732__auto__ = [];
var len__5726__auto___21949 = arguments.length;
var i__5727__auto___21950 = (0);
while(true){
if((i__5727__auto___21950 < len__5726__auto___21949)){
args__5732__auto__.push((arguments[i__5727__auto___21950]));

var G__21951 = (i__5727__auto___21950 + (1));
i__5727__auto___21950 = G__21951;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shitsuke.tokens.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shitsuke.tokens.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
var mrg = (function shitsuke$tokens$mrg(a,b){
if((b == null)){
return a;
} else {
if(((cljs.core.map_QMARK_(a)) && (cljs.core.map_QMARK_(b)))){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(shitsuke$tokens$mrg,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
} else {
return b;

}
}
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(mrg,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,maps));
}));

(shitsuke.tokens.deep_merge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shitsuke.tokens.deep_merge.cljs$lang$applyTo = (function (seq21871){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21871));
}));

/**
 * default-tokens deep-merged with overrides (a partial token map of the same
 *   shape). Deck/repo may supply any subset.
 */
shitsuke.tokens.resolve_tokens = (function shitsuke$tokens$resolve_tokens(overrides){
return shitsuke.tokens.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shitsuke.tokens.default_tokens,overrides], 0));
});
shitsuke.tokens.css_var_name = (function shitsuke$tokens$css_var_name(group,k){
return ["--shitsuke-",cljs.core.name(group),"-",cljs.core.name(k)].join('');
});
/**
 * Emit one `--name: value;` line for a scalar, or recurse into a nested map
 *   (used by :shitsuke/type entries that are themselves maps of CSS props).
 */
shitsuke.tokens.pair__GT_css = (function shitsuke$tokens$pair__GT_css(group,k,v){
if(cljs.core.map_QMARK_(v)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",(function (){var iter__5480__auto__ = (function shitsuke$tokens$pair__GT_css_$_iter__21882(s__21883){
return (new cljs.core.LazySeq(null,(function (){
var s__21883__$1 = s__21883;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__21883__$1);
if(temp__5825__auto__){
var s__21883__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21883__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__21883__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__21885 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__21884 = (0);
while(true){
if((i__21884 < size__5479__auto__)){
var vec__21892 = cljs.core._nth(c__5478__auto__,i__21884);
var pk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21892,(0),null);
var pv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21892,(1),null);
cljs.core.chunk_append(b__21885,["  ",shitsuke.tokens.css_var_name(group,k),"-",cljs.core.name(pk),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pv),";"].join(''));

var G__21955 = (i__21884 + (1));
i__21884 = G__21955;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21885),shitsuke$tokens$pair__GT_css_$_iter__21882(cljs.core.chunk_rest(s__21883__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21885),null);
}
} else {
var vec__21898 = cljs.core.first(s__21883__$2);
var pk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21898,(0),null);
var pv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21898,(1),null);
return cljs.core.cons(["  ",shitsuke.tokens.css_var_name(group,k),"-",cljs.core.name(pk),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pv),";"].join(''),shitsuke$tokens$pair__GT_css_$_iter__21882(cljs.core.rest(s__21883__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(v);
})());
} else {
return ["  ",shitsuke.tokens.css_var_name(group,k),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),";"].join('');

}
});
/**
 * Emit a `:root { ... }` CSS string from tokens (default merged with overrides).
 *   Suitable for an inline <style> in SSR or a generated CSS preamble.
 */
shitsuke.tokens.css_variables = (function shitsuke$tokens$css_variables(var_args){
var G__21907 = arguments.length;
switch (G__21907) {
case 0:
return shitsuke.tokens.css_variables.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shitsuke.tokens.css_variables.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shitsuke.tokens.css_variables.cljs$core$IFn$_invoke$arity$0 = (function (){
return shitsuke.tokens.css_variables.cljs$core$IFn$_invoke$arity$1(null);
}));

(shitsuke.tokens.css_variables.cljs$core$IFn$_invoke$arity$1 = (function (overrides){
var tokens = shitsuke.tokens.resolve_tokens(overrides);
var body = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",(function (){var iter__5480__auto__ = (function shitsuke$tokens$iter__21910(s__21911){
return (new cljs.core.LazySeq(null,(function (){
var s__21911__$1 = s__21911;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__21911__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var vec__21916 = cljs.core.first(xs__6385__auto__);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21916,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21916,(1),null);
var iterys__5476__auto__ = ((function (s__21911__$1,vec__21916,group,m,xs__6385__auto__,temp__5825__auto__,tokens){
return (function shitsuke$tokens$iter__21910_$_iter__21912(s__21913){
return (new cljs.core.LazySeq(null,((function (s__21911__$1,vec__21916,group,m,xs__6385__auto__,temp__5825__auto__,tokens){
return (function (){
var s__21913__$1 = s__21913;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__21913__$1);
if(temp__5825__auto____$1){
var s__21913__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21913__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__21913__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__21915 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__21914 = (0);
while(true){
if((i__21914 < size__5479__auto__)){
var vec__21920 = cljs.core._nth(c__5478__auto__,i__21914);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21920,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21920,(1),null);
if((!((v == null)))){
cljs.core.chunk_append(b__21915,shitsuke.tokens.pair__GT_css(group,k,v));

var G__21960 = (i__21914 + (1));
i__21914 = G__21960;
continue;
} else {
var G__21961 = (i__21914 + (1));
i__21914 = G__21961;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21915),shitsuke$tokens$iter__21910_$_iter__21912(cljs.core.chunk_rest(s__21913__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21915),null);
}
} else {
var vec__21923 = cljs.core.first(s__21913__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21923,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21923,(1),null);
if((!((v == null)))){
return cljs.core.cons(shitsuke.tokens.pair__GT_css(group,k,v),shitsuke$tokens$iter__21910_$_iter__21912(cljs.core.rest(s__21913__$2)));
} else {
var G__21964 = cljs.core.rest(s__21913__$2);
s__21913__$1 = G__21964;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__21911__$1,vec__21916,group,m,xs__6385__auto__,temp__5825__auto__,tokens))
,null,null));
});})(s__21911__$1,vec__21916,group,m,xs__6385__auto__,temp__5825__auto__,tokens))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(m));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shitsuke$tokens$iter__21910(cljs.core.rest(s__21911__$1)));
} else {
var G__21965 = cljs.core.rest(s__21911__$1);
s__21911__$1 = G__21965;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(tokens);
})());
return [":root {\n",body,"\n}"].join('');
}));

(shitsuke.tokens.css_variables.cljs$lang$maxFixedArity = 1);

/**
 * slides.design stores colors as hex WITHOUT leading # (office-style.color/*
 *   convention). CSS needs the #. Pass through if already #ff..., else prepend #.
 */
shitsuke.tokens.normalize_hex = (function shitsuke$tokens$normalize_hex(s){
var s__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(s);
if(clojure.string.starts_with_QMARK_(s__$1,"#")){
return s__$1;
} else {
return ["#",s__$1].join('');
}
});
/**
 * Adapter: build a shitsuke token overrides map from a slides.design deck design
 *   (:slides/theme colors/fonts + :slides/text-styles). Keeps slides' existing EDN
 *   design system reusable under the new CSS-var layer.
 */
shitsuke.tokens.from_slides_design = (function shitsuke$tokens$from_slides_design(deck_design){
var map__21926 = deck_design;
var map__21926__$1 = cljs.core.__destructure_map(map__21926);
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21926__$1,new cljs.core.Keyword("slides","theme","slides/theme",-79736158));
var text_styles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21926__$1,new cljs.core.Keyword("slides","text-styles","slides/text-styles",-2082623934));
var colors = new cljs.core.Keyword("slides","colors","slides/colors",429481390).cljs$core$IFn$_invoke$arity$1(theme);
var fonts = new cljs.core.Keyword("slides","fonts","slides/fonts",1479709021).cljs$core$IFn$_invoke$arity$1(theme);
var color_tokens = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__21928){
var vec__21929 = p__21928;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21929,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21929,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),shitsuke.tokens.normalize_hex(v)], null);
})),colors);
var type_tokens = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__21932){
var vec__21933 = p__21932;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21933,(0),null);
var ts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21933,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,(function (){var G__21936 = cljs.core.PersistentArrayMap.EMPTY;
var G__21936__$1 = (cljs.core.truth_(new cljs.core.Keyword("slides","font-size","slides/font-size",1476068328).cljs$core$IFn$_invoke$arity$1(ts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21936,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("slides","font-size","slides/font-size",1476068328).cljs$core$IFn$_invoke$arity$1(ts)),"px"].join('')):G__21936);
var G__21936__$2 = (cljs.core.truth_(new cljs.core.Keyword("slides","color","slides/color",1659726595).cljs$core$IFn$_invoke$arity$1(ts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21936__$1,new cljs.core.Keyword(null,"color","color",1011675173),shitsuke.tokens.normalize_hex(new cljs.core.Keyword("slides","color","slides/color",1659726595).cljs$core$IFn$_invoke$arity$1(ts))):G__21936__$1);
if(cljs.core.truth_(new cljs.core.Keyword("slides","bold","slides/bold",-1297473049).cljs$core$IFn$_invoke$arity$1(ts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21936__$2,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(700));
} else {
return G__21936__$2;
}
})()], null);
})),text_styles);
var font_family = (function (){var or__5002__auto__ = (function (){var G__21937 = new cljs.core.Keyword("office-style.font","majorFont","office-style.font/majorFont",1886256746).cljs$core$IFn$_invoke$arity$1(fonts);
if((G__21937 == null)){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21937),", system-ui, sans-serif"].join('');
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "system-ui, sans-serif";
}
})();
var G__21938 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("shitsuke","colors","shitsuke/colors",-494612392),color_tokens], null);
if(cljs.core.seq(type_tokens)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21938,new cljs.core.Keyword("shitsuke","type","shitsuke/type",1602529816),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__21939){
var vec__21940 = p__21939;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21940,(0),null);
var ts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21940,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ts,new cljs.core.Keyword(null,"font-family","font-family",-667419874),font_family)], null);
})),type_tokens));
} else {
return G__21938;
}
});

//# sourceMappingURL=shitsuke.tokens.js.map
