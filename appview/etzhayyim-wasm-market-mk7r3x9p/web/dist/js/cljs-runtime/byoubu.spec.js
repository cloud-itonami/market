goog.provide('byoubu.spec');
/**
 * Every backdrop names the same nine roles. A fixed vocabulary is what lets
 *   `byoubu.plate` build a plate for any entry without special-casing, and
 *   what lets two backdrops be compared.
 */
byoubu.spec.required_palette_keys = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sky-zenith","sky-zenith",-20065151),new cljs.core.Keyword(null,"sky-mid","sky-mid",106630624),new cljs.core.Keyword(null,"sky-horizon","sky-horizon",-157541617),new cljs.core.Keyword(null,"haze","haze",-1024870708),new cljs.core.Keyword(null,"ridge-far","ridge-far",762525090),new cljs.core.Keyword(null,"ridge-near","ridge-near",1102584738),new cljs.core.Keyword(null,"dune-lit","dune-lit",790638115),new cljs.core.Keyword(null,"dune-shadow","dune-shadow",423450330),new cljs.core.Keyword(null,"star","star",279424429)], null);
byoubu.spec.required_scene_keys = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sky","sky",1271496862),new cljs.core.Keyword(null,"atmosphere","atmosphere",523254734),new cljs.core.Keyword(null,"terrain","terrain",704966005),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"grade","grade",2117054771)], null);
byoubu.spec.textures = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"moderate","moderate",-1039163165),null,new cljs.core.Keyword(null,"calm","calm",-533989756),null,new cljs.core.Keyword(null,"busy","busy",-328286801),null], null), null);
byoubu.spec.missing = (function byoubu$spec$missing(m,ks){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__22702_SHARP_){
return cljs.core.contains_QMARK_(m,p1__22702_SHARP_);
}),ks);
});
/**
 * Vector of problem descriptions for one backdrop; empty means valid.
 */
byoubu.spec.problems = (function byoubu$spec$problems(backdrop){
var id = new cljs.core.Keyword("byoubu","id","byoubu/id",459733156).cljs$core$IFn$_invoke$arity$1(backdrop);
var palette = new cljs.core.Keyword("byoubu","palette","byoubu/palette",851879321).cljs$core$IFn$_invoke$arity$1(backdrop);
var band = new cljs.core.Keyword("byoubu","content-band","byoubu/content-band",-1665630238).cljs$core$IFn$_invoke$arity$1(backdrop);
var scene = new cljs.core.Keyword("byoubu","scene","byoubu/scene",1831525071).cljs$core$IFn$_invoke$arity$1(backdrop);
var pfx = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0)),": "].join('');
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__22703(s__22704){
return (new cljs.core.LazySeq(null,(function (){
var s__22704__$1 = s__22704;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22704__$1);
if(temp__5825__auto__){
var s__22704__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22704__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22704__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22706 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22705 = (0);
while(true){
if((i__22705 < size__5479__auto__)){
var k = cljs.core._nth(c__5478__auto__,i__22705);
if((cljs.core.get.cljs$core$IFn$_invoke$arity$2(backdrop,k) == null)){
cljs.core.chunk_append(b__22706,[pfx,"missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));

var G__22795 = (i__22705 + (1));
i__22705 = G__22795;
continue;
} else {
var G__22796 = (i__22705 + (1));
i__22705 = G__22796;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22706),byoubu$spec$problems_$_iter__22703(cljs.core.chunk_rest(s__22704__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22706),null);
}
} else {
var k = cljs.core.first(s__22704__$2);
if((cljs.core.get.cljs$core$IFn$_invoke$arity$2(backdrop,k) == null)){
return cljs.core.cons([pfx,"missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),byoubu$spec$problems_$_iter__22703(cljs.core.rest(s__22704__$2)));
} else {
var G__22797 = cljs.core.rest(s__22704__$2);
s__22704__$1 = G__22797;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("byoubu","id","byoubu/id",459733156),new cljs.core.Keyword("byoubu","title","byoubu/title",1943539519),new cljs.core.Keyword("byoubu","summary","byoubu/summary",1753941440),new cljs.core.Keyword("byoubu","tags","byoubu/tags",-743870735),new cljs.core.Keyword("byoubu","seed","byoubu/seed",841916191),new cljs.core.Keyword("byoubu","texture","byoubu/texture",1576630445),new cljs.core.Keyword("byoubu","accent","byoubu/accent",553460268),new cljs.core.Keyword("byoubu","palette","byoubu/palette",851879321),new cljs.core.Keyword("byoubu","content-band","byoubu/content-band",-1665630238),new cljs.core.Keyword("byoubu","scene","byoubu/scene",1831525071)], null));
})(),(((id instanceof cljs.core.Keyword))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[pfx,"id must be a keyword"].join('')], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core.int_QMARK_(new cljs.core.Keyword("byoubu","seed","byoubu/seed",841916191).cljs$core$IFn$_invoke$arity$1(backdrop)))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[pfx,"seed must be an integer \u2014 a backdrop nobody can re-render ","is an asset, not a spec"].join('')], null)),((cljs.core.contains_QMARK_(byoubu.spec.textures,new cljs.core.Keyword("byoubu","texture","byoubu/texture",1576630445).cljs$core$IFn$_invoke$arity$1(backdrop)))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[pfx,"texture must be one of ",clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.sort.cljs$core$IFn$_invoke$arity$1(byoubu.spec.textures))].join('')], null)),(function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__22707(s__22708){
return (new cljs.core.LazySeq(null,(function (){
var s__22708__$1 = s__22708;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22708__$1);
if(temp__5825__auto__){
var s__22708__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22708__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22708__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22710 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22709 = (0);
while(true){
if((i__22709 < size__5479__auto__)){
var k = cljs.core._nth(c__5478__auto__,i__22709);
cljs.core.chunk_append(b__22710,[pfx,"palette missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));

var G__22810 = (i__22709 + (1));
i__22709 = G__22810;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22710),byoubu$spec$problems_$_iter__22707(cljs.core.chunk_rest(s__22708__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22710),null);
}
} else {
var k = cljs.core.first(s__22708__$2);
return cljs.core.cons([pfx,"palette missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),byoubu$spec$problems_$_iter__22707(cljs.core.rest(s__22708__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(byoubu.spec.missing(palette,byoubu.spec.required_palette_keys));
})(),(function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__22711(s__22712){
return (new cljs.core.LazySeq(null,(function (){
var s__22712__$1 = s__22712;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22712__$1);
if(temp__5825__auto__){
var s__22712__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22712__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22712__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22714 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22713 = (0);
while(true){
if((i__22713 < size__5479__auto__)){
var vec__22715 = cljs.core._nth(c__5478__auto__,i__22713);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22715,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22715,(1),null);
if((byoubu.color.hex__GT_rgb(v) == null)){
cljs.core.chunk_append(b__22714,[pfx,"palette ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," is not a hex color: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))].join(''));

var G__22813 = (i__22713 + (1));
i__22713 = G__22813;
continue;
} else {
var G__22814 = (i__22713 + (1));
i__22713 = G__22814;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22714),byoubu$spec$problems_$_iter__22711(cljs.core.chunk_rest(s__22712__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22714),null);
}
} else {
var vec__22718 = cljs.core.first(s__22712__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22718,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22718,(1),null);
if((byoubu.color.hex__GT_rgb(v) == null)){
return cljs.core.cons([pfx,"palette ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," is not a hex color: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))].join(''),byoubu$spec$problems_$_iter__22711(cljs.core.rest(s__22712__$2)));
} else {
var G__22816 = cljs.core.rest(s__22712__$2);
s__22712__$1 = G__22816;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(palette);
})(),((cljs.core.contains_QMARK_(palette,new cljs.core.Keyword("byoubu","accent","byoubu/accent",553460268).cljs$core$IFn$_invoke$arity$1(backdrop)))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[pfx,"accent ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("byoubu","accent","byoubu/accent",553460268).cljs$core$IFn$_invoke$arity$1(backdrop)], 0))," is not a palette key"].join('')], null)),(function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__22721(s__22722){
return (new cljs.core.LazySeq(null,(function (){
var s__22722__$1 = s__22722;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22722__$1);
if(temp__5825__auto__){
var s__22722__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22722__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22722__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22724 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22723 = (0);
while(true){
if((i__22723 < size__5479__auto__)){
var vec__22725 = cljs.core._nth(c__5478__auto__,i__22723);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22725,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22725,(1),null);
if((!(cljs.core.contains_QMARK_(palette,k)))){
cljs.core.chunk_append(b__22724,[pfx,"content-band references unknown palette key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));

var G__22817 = (i__22723 + (1));
i__22723 = G__22817;
continue;
} else {
var G__22818 = (i__22723 + (1));
i__22723 = G__22818;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22724),byoubu$spec$problems_$_iter__22721(cljs.core.chunk_rest(s__22722__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22724),null);
}
} else {
var vec__22728 = cljs.core.first(s__22722__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22728,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22728,(1),null);
if((!(cljs.core.contains_QMARK_(palette,k)))){
return cljs.core.cons([pfx,"content-band references unknown palette key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),byoubu$spec$problems_$_iter__22721(cljs.core.rest(s__22722__$2)));
} else {
var G__22819 = cljs.core.rest(s__22722__$2);
s__22722__$1 = G__22819;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(band);
})(),(function (){var total = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,0.0,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,band));
var drift = (total - 1.0);
var drift__$1 = (((drift < (0)))?(- drift):drift);
if((drift__$1 > 0.001)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[pfx,"content-band weights sum to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(total),", not 1.0"].join('')], null);
} else {
return null;
}
})(),(function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__22731(s__22732){
return (new cljs.core.LazySeq(null,(function (){
var s__22732__$1 = s__22732;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22732__$1);
if(temp__5825__auto__){
var s__22732__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22732__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22732__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22734 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22733 = (0);
while(true){
if((i__22733 < size__5479__auto__)){
var k = cljs.core._nth(c__5478__auto__,i__22733);
cljs.core.chunk_append(b__22734,[pfx,"scene missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));

var G__22823 = (i__22733 + (1));
i__22733 = G__22823;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22734),byoubu$spec$problems_$_iter__22731(cljs.core.chunk_rest(s__22732__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22734),null);
}
} else {
var k = cljs.core.first(s__22732__$2);
return cljs.core.cons([pfx,"scene missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),byoubu$spec$problems_$_iter__22731(cljs.core.rest(s__22732__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(byoubu.spec.missing(scene,byoubu.spec.required_scene_keys));
})(),(function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__22735(s__22736){
return (new cljs.core.LazySeq(null,(function (){
var s__22736__$1 = s__22736;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22736__$1);
if(temp__5825__auto__){
var s__22736__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22736__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22736__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22738 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22737 = (0);
while(true){
if((i__22737 < size__5479__auto__)){
var vec__22739 = cljs.core._nth(c__5478__auto__,i__22737);
var tier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22739,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22739,(1),null);
if((byoubu.color.hex__GT_rgb(new cljs.core.Keyword(null,"content-color","content-color",1294205929).cljs$core$IFn$_invoke$arity$1(m)) == null)){
cljs.core.chunk_append(b__22738,[pfx,"measured ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tier)," content-color is not a hex color: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"content-color","content-color",1294205929).cljs$core$IFn$_invoke$arity$1(m)], 0))].join(''));

var G__22852 = (i__22737 + (1));
i__22737 = G__22852;
continue;
} else {
var G__22854 = (i__22737 + (1));
i__22737 = G__22854;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22738),byoubu$spec$problems_$_iter__22735(cljs.core.chunk_rest(s__22736__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22738),null);
}
} else {
var vec__22743 = cljs.core.first(s__22736__$2);
var tier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22743,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22743,(1),null);
if((byoubu.color.hex__GT_rgb(new cljs.core.Keyword(null,"content-color","content-color",1294205929).cljs$core$IFn$_invoke$arity$1(m)) == null)){
return cljs.core.cons([pfx,"measured ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tier)," content-color is not a hex color: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"content-color","content-color",1294205929).cljs$core$IFn$_invoke$arity$1(m)], 0))].join(''),byoubu$spec$problems_$_iter__22735(cljs.core.rest(s__22736__$2)));
} else {
var G__22857 = cljs.core.rest(s__22736__$2);
s__22736__$1 = G__22857;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.select_keys(new cljs.core.Keyword("byoubu","measured","byoubu/measured",-610808208).cljs$core$IFn$_invoke$arity$1(backdrop),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plate","plate",-1920178141),new cljs.core.Keyword(null,"poster","poster",-1616913550)], null)));
})(),(function (){var f = byoubu.facts.derive_facts(backdrop);
var ink = new cljs.core.Keyword("byoubu.facts","ink","byoubu.facts/ink",567836213).cljs$core$IFn$_invoke$arity$1(f);
var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__22750(s__22751){
return (new cljs.core.LazySeq(null,(function (){
var s__22751__$1 = s__22751;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22751__$1);
if(temp__5825__auto__){
var s__22751__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22751__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22751__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22753 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22752 = (0);
while(true){
if((i__22752 < size__5479__auto__)){
var vec__22757 = cljs.core._nth(c__5478__auto__,i__22752);
var tier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22757,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22757,(1),null);
var r = byoubu.color.contrast_ratio(ink,c);
if(((function (){var or__5002__auto__ = r;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return 0.0;
}
})() < byoubu.facts.wcag_aa_body)){
cljs.core.chunk_append(b__22753,[pfx,"recommended ink ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ink)," on the ",cljs.core.name(tier)," content band ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)," has contrast ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),", below AA body ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(byoubu.facts.wcag_aa_body)].join(''));

var G__22859 = (i__22752 + (1));
i__22752 = G__22859;
continue;
} else {
var G__22860 = (i__22752 + (1));
i__22752 = G__22860;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22753),byoubu$spec$problems_$_iter__22750(cljs.core.chunk_rest(s__22751__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22753),null);
}
} else {
var vec__22761 = cljs.core.first(s__22751__$2);
var tier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22761,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22761,(1),null);
var r = byoubu.color.contrast_ratio(ink,c);
if(((function (){var or__5002__auto__ = r;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return 0.0;
}
})() < byoubu.facts.wcag_aa_body)){
return cljs.core.cons([pfx,"recommended ink ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ink)," on the ",cljs.core.name(tier)," content band ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)," has contrast ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),", below AA body ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(byoubu.facts.wcag_aa_body)].join(''),byoubu$spec$problems_$_iter__22750(cljs.core.rest(s__22751__$2)));
} else {
var G__22861 = cljs.core.rest(s__22751__$2);
s__22751__$1 = G__22861;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(byoubu.facts.tier_colors(backdrop));
})()], 0)));
});
byoubu.spec.valid_QMARK_ = (function byoubu$spec$valid_QMARK_(backdrop){
return cljs.core.empty_QMARK_(byoubu.spec.problems(backdrop));
});

//# sourceMappingURL=byoubu.spec.js.map
