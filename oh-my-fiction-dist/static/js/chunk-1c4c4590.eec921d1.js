(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c4c4590"],{1446:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("article",{staticClass:"container"},[t.isLoading?i("section",{staticStyle:{margin:"50vh 0 0 25vw"}},[i("van-loading",{attrs:{size:"24px"}})],1):i("section",[i("van-sticky",[i("section",{staticClass:"header"},[i("section",{staticClass:"fictionInfo"},[i("div",{staticClass:"fictionName"},[t._v(t._s(t.bookTitle))]),i("div",{staticClass:"count"},[t._v("总章节数："+t._s(t.chapterLen))])]),i("section",{staticClass:"sort"},[i("van-icon",{attrs:{name:"bar-chart-o",size:"20px",color:"#fff"},on:{click:t.reverseBook}})],1)])]),i("van-list",{attrs:{finished:t.listDownFinished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.listDownLoading,callback:function(e){t.listDownLoading=e},expression:"listDownLoading"}},t._l(t.showingList,(function(e,n){return i("van-cell",{key:n,class:[t.curReadTitle==e.title?"highlight":""],attrs:{title:e.title},on:{click:function(i){return t.toExactChapter(e)}}})})),1),i("div")],1)])},r=[],o=(i("a4d3"),i("99af"),i("4de4"),i("e439"),i("dbb4"),i("b64b"),i("159b"),i("96cf"),i("1da1")),a=i("2909"),s=i("ade3"),c=i("a20f"),u=i("dafe"),h=i("4aa2");function l(t){return"[object String]"===Object.prototype.toString.call(t)}var f=Object(h["a"])((function(t){return l(t)?t.split("").reverse().join(""):Array.prototype.slice.call(t,0).reverse()})),p=f,d=i("2f62");function g(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function b(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?g(Object(i),!0).forEach((function(e){Object(s["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):g(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var w={props:{jumpChapter:{type:Function,default:function(){console.log("should be called!")}},isSidebar:{type:Boolean,default:!1}},data:function(){return{chapterList:[],showingList:[],showFlag:"positive",isLoading:!1,listDownLoading:!1,listDownFinished:!1,curReadTitle:"",pageIndex:0,bookInfo:{}}},computed:b({},Object(d["c"])(["currentView","collectedFiction"]),{negativePagingChapter:function(){return Object(u["c"])(p(this.chapterList),50)},positivePagingChapter:function(){return Object(u["c"])(this.chapterList,50)},chapterLen:function(){return this.chapterList.length},bookTitle:function(){return this.$route.params.title},_chapterList:function(){var t=this.$route.params.chapterList||this.currentView.chapterList;return t}}),methods:b({},Object(d["b"])(["setCurrentView"]),{toExactChapter:function(t){this.curReadTitle=t.title,this.isSidebar?this.$emit("updateContent",t.href):(this.setCurrentView(b({},this.currentView,{recentRead:t})),this.$router.push({name:"fiction_content"}))},onLoad:function(){this.listDownLoading=!0;var t="positive"===this.showFlag?this.positivePagingChapter:this.negativePagingChapter;this.showingList=[].concat(Object(a["a"])(this.showingList),Object(a["a"])(t[this.pageIndex++])),this.listDownLoading=!1,this.pageIndex>t.length&&(this.listDownFinished=!0)},initShowing:function(){this.showingList=[],this.pageIndex=0,this.onLoad()},reverseBook:function(){this.showFlag="negative"===this.showFlag?"positive":"negative",this.initShowing()},getBookChapter:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.isLoading=!0,t.t0=this._chapterList,t.t0){t.next=6;break}return t.next=5,Object(c["a"])(this.$route.query.chapterHref);case 5:t.t0=t.sent;case 6:e=t.t0,this.chapterList=e,this.isLoading=!1;case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}),mounted:function(){this.getBookChapter()}},v=w,O=(i("2b32"),i("2877")),j=Object(O["a"])(v,n,r,!1,null,"bbaa1552",null);e["default"]=j.exports},"2b32":function(t,e,i){"use strict";var n=i("feb6"),r=i.n(n);r.a},a20f:function(t,e,i){"use strict";i.d(e,"d",(function(){return r})),i.d(e,"e",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return c}));var n=i("64f3"),r=function(){return Object(n["a"])({url:"fiction/recommand",method:"get"})},o=function(t,e){return Object(n["a"])({url:"fiction/search",method:"get",params:{keyword:t,accurateSearch:e}})},a=function(t){return Object(n["a"])({url:"fiction/bookHome",method:"get",params:{url:t}})},s=function(t){return Object(n["a"])({url:"fiction/getChapterList",method:"get",params:{url:t}})},c=function(t){return Object(n["a"])({url:"fiction/getContent",method:"get",params:{url:t}})}},feb6:function(t,e,i){}}]);