goog.provide('kotoba_ui.product');
kotoba_ui.product.classes = (function kotoba_ui$product$classes(base,extra){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),((cljs.core.seq(extra))?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra)].join(''):null)].join('');
});
/**
 * Compact labelled value. opts: :label, :value, :detail, :status, :id, :class.
 */
kotoba_ui.product.metric = (function kotoba_ui$product$metric(p__22863){
var map__22864 = p__22863;
var map__22864__$1 = cljs.core.__destructure_map(map__22864);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22864__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22864__$1,new cljs.core.Keyword(null,"value","value",305978217));
var detail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22864__$1,new cljs.core.Keyword(null,"detail","detail",-1545345025));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22864__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22864__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22864__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__22865 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),kotoba_ui.product.classes("kotoba-product__metric",class$)], null);
if(cljs.core.truth_(id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22865,new cljs.core.Keyword(null,"id","id",-1388402092),id);
} else {
return G__22865;
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"kotoba-product__metric-label hig-footnote"], null),label], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"kotoba-product__metric-value hig-title2"], null),value], null),(cljs.core.truth_((function (){var or__5002__auto__ = detail;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return status;
}
})())?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"kotoba-product__metric-detail hig-footnote"], null),(cljs.core.truth_(status)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"kotoba-product__status"], null),status], null):null),detail], null):null)], null);
});
/**
 * Purposeful empty state. opts: :title, :body, :actions, :id, :class.
 */
kotoba_ui.product.empty_state = (function kotoba_ui$product$empty_state(p__22866){
var map__22867 = p__22866;
var map__22867__$1 = cljs.core.__destructure_map(map__22867);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22867__$1,new cljs.core.Keyword(null,"title","title",636505583));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22867__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22867__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22867__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22867__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__22868 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),kotoba_ui.product.classes("kotoba-product__empty",class$)], null);
if(cljs.core.truth_(id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22868,new cljs.core.Keyword(null,"id","id",-1388402092),id);
} else {
return G__22868;
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"hig-headline"], null),title], null),(cljs.core.truth_(body)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"hig-footnote kotoba-product__muted"], null),body], null):null),((cljs.core.seq(actions))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"kotoba-product__empty-actions"], null)], null),actions):null)], null);
});
/**
 * Accessible responsive table. Columns are {:key k :label s}; rows are maps.
 *   Cell values may be hiccup. opts: :caption, :columns, :rows, :empty, :id, :class.
 */
kotoba_ui.product.data_table = (function kotoba_ui$product$data_table(p__22869){
var map__22870 = p__22869;
var map__22870__$1 = cljs.core.__destructure_map(map__22870);
var caption = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22870__$1,new cljs.core.Keyword(null,"caption","caption",-855383902));
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22870__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22870__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var empty = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22870__$1,new cljs.core.Keyword(null,"empty","empty",767870958));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22870__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22870__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
if(cljs.core.seq(rows)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"kotoba-product__table-scroll"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),(function (){var G__22871 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),kotoba_ui.product.classes("kotoba-product__table",class$)], null);
if(cljs.core.truth_(id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22871,new cljs.core.Keyword(null,"id","id",-1388402092),id);
} else {
return G__22871;
}
})(),(cljs.core.truth_(caption)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"caption","caption",-855383902),caption], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__5480__auto__ = (function kotoba_ui$product$data_table_$_iter__22872(s__22873){
return (new cljs.core.LazySeq(null,(function (){
var s__22873__$1 = s__22873;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22873__$1);
if(temp__5825__auto__){
var s__22873__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22873__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22873__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22875 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22874 = (0);
while(true){
if((i__22874 < size__5479__auto__)){
var map__22878 = cljs.core._nth(c__5478__auto__,i__22874);
var map__22878__$1 = cljs.core.__destructure_map(map__22878);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22878__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22878__$1,new cljs.core.Keyword(null,"label","label",1718410804));
cljs.core.chunk_append(b__22875,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scope","scope",-439358418),"col",new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)], null),label], null));

var G__22974 = (i__22874 + (1));
i__22874 = G__22974;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22875),kotoba_ui$product$data_table_$_iter__22872(cljs.core.chunk_rest(s__22873__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22875),null);
}
} else {
var map__22879 = cljs.core.first(s__22873__$2);
var map__22879__$1 = cljs.core.__destructure_map(map__22879);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22879__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22879__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scope","scope",-439358418),"col",new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)], null),label], null),kotoba_ui$product$data_table_$_iter__22872(cljs.core.rest(s__22873__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(columns);
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5480__auto__ = (function kotoba_ui$product$data_table_$_iter__22880(s__22881){
return (new cljs.core.LazySeq(null,(function (){
var s__22881__$1 = s__22881;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22881__$1);
if(temp__5825__auto__){
var s__22881__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22881__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22881__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22883 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22882 = (0);
while(true){
if((i__22882 < size__5479__auto__)){
var vec__22889 = cljs.core._nth(c__5478__auto__,i__22882);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22889,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22889,(1),null);
cljs.core.chunk_append(b__22883,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null),(function (){var iter__5480__auto__ = ((function (i__22882,vec__22889,idx,row,c__5478__auto__,size__5479__auto__,b__22883,s__22881__$2,temp__5825__auto__,map__22870,map__22870__$1,caption,columns,rows,empty,id,class$){
return (function kotoba_ui$product$data_table_$_iter__22880_$_iter__22892(s__22893){
return (new cljs.core.LazySeq(null,((function (i__22882,vec__22889,idx,row,c__5478__auto__,size__5479__auto__,b__22883,s__22881__$2,temp__5825__auto__,map__22870,map__22870__$1,caption,columns,rows,empty,id,class$){
return (function (){
var s__22893__$1 = s__22893;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__22893__$1);
if(temp__5825__auto____$1){
var s__22893__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22893__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first(s__22893__$2);
var size__5479__auto____$1 = cljs.core.count(c__5478__auto____$1);
var b__22895 = cljs.core.chunk_buffer(size__5479__auto____$1);
if((function (){var i__22894 = (0);
while(true){
if((i__22894 < size__5479__auto____$1)){
var map__22897 = cljs.core._nth(c__5478__auto____$1,i__22894);
var map__22897__$1 = cljs.core.__destructure_map(map__22897);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22897__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
cljs.core.chunk_append(b__22895,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,key)], null));

var G__22998 = (i__22894 + (1));
i__22894 = G__22998;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22895),kotoba_ui$product$data_table_$_iter__22880_$_iter__22892(cljs.core.chunk_rest(s__22893__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22895),null);
}
} else {
var map__22900 = cljs.core.first(s__22893__$2);
var map__22900__$1 = cljs.core.__destructure_map(map__22900);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22900__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,key)], null),kotoba_ui$product$data_table_$_iter__22880_$_iter__22892(cljs.core.rest(s__22893__$2)));
}
} else {
return null;
}
break;
}
});})(i__22882,vec__22889,idx,row,c__5478__auto__,size__5479__auto__,b__22883,s__22881__$2,temp__5825__auto__,map__22870,map__22870__$1,caption,columns,rows,empty,id,class$))
,null,null));
});})(i__22882,vec__22889,idx,row,c__5478__auto__,size__5479__auto__,b__22883,s__22881__$2,temp__5825__auto__,map__22870,map__22870__$1,caption,columns,rows,empty,id,class$))
;
return iter__5480__auto__(columns);
})()], null));

var G__22999 = (i__22882 + (1));
i__22882 = G__22999;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22883),kotoba_ui$product$data_table_$_iter__22880(cljs.core.chunk_rest(s__22881__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22883),null);
}
} else {
var vec__22902 = cljs.core.first(s__22881__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22902,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22902,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null),(function (){var iter__5480__auto__ = ((function (vec__22902,idx,row,s__22881__$2,temp__5825__auto__,map__22870,map__22870__$1,caption,columns,rows,empty,id,class$){
return (function kotoba_ui$product$data_table_$_iter__22880_$_iter__22905(s__22906){
return (new cljs.core.LazySeq(null,(function (){
var s__22906__$1 = s__22906;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__22906__$1);
if(temp__5825__auto____$1){
var s__22906__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22906__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22906__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22908 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22907 = (0);
while(true){
if((i__22907 < size__5479__auto__)){
var map__22909 = cljs.core._nth(c__5478__auto__,i__22907);
var map__22909__$1 = cljs.core.__destructure_map(map__22909);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22909__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
cljs.core.chunk_append(b__22908,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,key)], null));

var G__23001 = (i__22907 + (1));
i__22907 = G__23001;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22908),kotoba_ui$product$data_table_$_iter__22880_$_iter__22905(cljs.core.chunk_rest(s__22906__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22908),null);
}
} else {
var map__22910 = cljs.core.first(s__22906__$2);
var map__22910__$1 = cljs.core.__destructure_map(map__22910);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22910__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,key)], null),kotoba_ui$product$data_table_$_iter__22880_$_iter__22905(cljs.core.rest(s__22906__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__22902,idx,row,s__22881__$2,temp__5825__auto__,map__22870,map__22870__$1,caption,columns,rows,empty,id,class$))
;
return iter__5480__auto__(columns);
})()], null),kotoba_ui$product$data_table_$_iter__22880(cljs.core.rest(s__22881__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,rows));
})()], null)], null)], null);
} else {
var or__5002__auto__ = empty;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return kotoba_ui.product.empty_state(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Nothing here yet"], null));
}
}
});
kotoba_ui.product.product_css = ["@layer kotoba.hig{",".kotoba-product__metric{min-width:0;padding:var(--hig-spacing-3);border:var(--hig-hairline) solid var(--hig-color-separator);border-radius:var(--hig-radius-large);background:var(--hig-color-secondary-system-background)}",".kotoba-product__metric-label,.kotoba-product__metric-detail,.kotoba-product__muted{color:var(--hig-color-secondary-label)}",".kotoba-product__metric-value{margin:var(--hig-spacing-1) 0;overflow-wrap:anywhere}",".kotoba-product__status{display:inline-block;margin-right:var(--hig-spacing-2);color:var(--hig-color-tint);font-weight:600}",".kotoba-product__empty{text-align:center;padding:var(--hig-spacing-6);border:var(--hig-hairline) dashed var(--hig-color-separator);border-radius:var(--hig-radius-large)}",".kotoba-product__empty-actions{display:flex;justify-content:center;flex-wrap:wrap;gap:var(--hig-spacing-2);margin-top:var(--hig-spacing-3)}",".kotoba-product__table-scroll{overflow-x:auto}",".kotoba-product__table{width:100%;border-collapse:collapse}",".kotoba-product__table caption{text-align:left;margin-bottom:var(--hig-spacing-2);font-weight:600}",".kotoba-product__table th,.kotoba-product__table td{text-align:left;vertical-align:top;padding:var(--hig-spacing-2) var(--hig-spacing-3);border-bottom:var(--hig-hairline) solid var(--hig-color-separator)}",".kotoba-product__table th{color:var(--hig-color-secondary-label);font-weight:600}","}"].join('');

//# sourceMappingURL=kotoba_ui.product.js.map
