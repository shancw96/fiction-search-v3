(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fb8dd058"],{"0340":function(t,e,n){"use strict";var r=n("8369"),i=n.n(r);i.a},"173c":function(t,e,n){"use strict";var r=n("bc2a"),i=n.n(r);i.a},8369:function(t,e,n){},"857a":function(t,e,n){var r=n("1d80"),i=/"/g;t.exports=function(t,e,n,s){var a=String(r(t)),o="<"+e;return""!==n&&(o+=" "+n+'="'+String(s).replace(i,"&quot;")+'"'),o+">"+a+"</"+e+">"}},"872d":function(t,e,n){},9911:function(t,e,n){"use strict";var r=n("23e7"),i=n("857a"),s=n("eae9");r({target:"String",proto:!0,forced:s("link")},{link:function(t){return i(this,"a","href",t)}})},bbe9:function(t,e,n){"use strict";var r=n("872d"),i=n.n(r);i.a},bc2a:function(t,e,n){},d89b:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[t.isLoadingBasic?n("Loading"):n("article",{staticClass:" border-box bgGrey",staticStyle:{padding:"5px","min-height":"100vh"}},[n("CellContainer",{staticStyle:{overflow:"hidden"}},[n("van-row",{staticClass:"textCenter border-box "},[n("div",{staticClass:"pd10 font20 bold"},[t._v(t._s(t.bookInfo.title))])]),n("van-row",{staticClass:"row1",attrs:{type:"flex",justify:"space-between"}},[n("van-col",{attrs:{span:"6"}},[n("Img",{attrs:{imgSrc:t.bookInfo.img}})],1),n("van-col",{staticClass:"pd10",staticStyle:{color:"rgb(90, 89, 89)"},attrs:{span:"17"}},[n("van-row",{staticClass:"font18 marginTop5"},[t._v("作者："+t._s(t.bookInfo.author))]),n("van-row",{staticClass:"font18 marginTop5"},[t._v("来源："+t._s(t.getHost(this.$route.query.link)))]),n("van-row",{staticClass:"marginTop10",attrs:{type:"flex",justify:"flex-start"}},t._l(t.bookInfo.tags,(function(e,r){return n("van-col",{key:r,staticStyle:{"margin-left":"5px"}},[n("van-tag",{attrs:{plain:"",type:"success"}},[t._v(t._s(e))])],1)})),1)],1)],1),n("van-row",{staticClass:"  row2 border-box marginTop10 ",attrs:{type:"flex",justify:"space-around"}},[n("van-col",{attrs:{span:"7"}},[n("van-button",{staticClass:"ellipsis",staticStyle:{width:"100%",margin:"0 auto"},attrs:{plain:""},on:{click:t.addToBookShelf}},[t._v("加入书架")])],1),n("van-col",{attrs:{span:"8"}},[n("van-button",{staticStyle:{width:"100%",margin:"0 auto"},attrs:{type:"primary"},on:{click:t.toContent}},[t._v("开始阅读")])],1),n("van-col",{attrs:{span:"7"}},[n("van-button",{staticClass:"ellipsis",staticStyle:{width:"100%",margin:"0 auto"},attrs:{plain:""}},[t._v("离线下载")])],1)],1)],1),n("CellContainer",{staticClass:"marginTop15 "},[n("van-row",[n("div",{staticClass:"subTitle"},[t._v("小说简介")])]),n("TextEllipsis",{staticClass:"grey",attrs:{article:this.bookInfo.desc}})],1),n("CellContainer",{staticClass:"marginTop15",nativeOn:{click:function(e){return t.toChapterList(e)}}},[n("Cell",{attrs:{textL:"查看目录",textR:this.bookInfo.update}})],1),n("CellContainer",{staticClass:"marginTop15 "},[n("van-row",[n("div",{staticClass:"subTitle "},[t._v("小说预览")])]),n("van-row",[n("div",{staticClass:" grey"},[t._v("第一章")])]),n("TextEllipsis",{staticClass:"grey font12",attrs:{article:this.chapterPreview,isHmtl:!0}})],1)],1)],1)},i=[],s=(n("a4d3"),n("4de4"),n("e439"),n("dbb4"),n("b64b"),n("9911"),n("159b"),n("96cf"),n("1da1")),a=n("ade3"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[t._v(" "+t._s(t.article?"":"loading...")+" "),n("article",{class:[t.isShowing?"":"textElliplise"],domProps:{innerHTML:t._s(t.article)},on:{click:t.changeShowing}})])},c=[],l={props:["article"],data:function(){return{isShowing:!1}},methods:{changeShowing:function(){this.isShowing=!this.isShowing}}},u=l,f=(n("0340"),n("2877")),h=Object(f["a"])(u,o,c,!1,null,"649420ce",null),p=h.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-row",{staticStyle:{"line-height":"100%",height:"100%"},attrs:{type:"flex",justify:"space-between"}},[n("van-col",{staticClass:"ellipsis textLeft font18",attrs:{span:"8"}},[t._v(t._s(t.textL))]),n("van-col",{staticClass:" textRight",attrs:{span:"8"}},[n("van-row",{staticStyle:{display:"flex"}},[n("van-col",{attrs:{span:"20"}},[n("span",{staticClass:"ellipsis font12 grey"},[t._v(t._s(t.textR))])]),n("van-col",{attrs:{span:"4"}},[n("van-icon",{staticClass:"grey ",attrs:{name:"arrow"}})],1)],1)],1)],1)},v=[],d={props:["textL","textR"]},g=d,w=Object(f["a"])(g,b,v,!1,null,null,null),C=w.exports,y=n("8bb2"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("img",{attrs:{src:t.imgSrc?t.imgSrc:"https://i.loli.net/2019/12/29/Kjel2kduwQArxBR.jpg"}})},k=[],x={props:["imgSrc"]},j=x,O=(n("173c"),Object(f["a"])(j,m,k,!1,null,"71f6af42",null)),_=O.exports,S=n("dafe"),I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticStyle:{width:"100vw",height:"100vh",display:"flex","justify-content":"center","align-items":"center"}},[n("van-loading",{attrs:{color:"#1989fa"}})],1)},L=[],R={},T=Object(f["a"])(R,I,L,!1,null,null,null),$=T.exports,P=n("a20f"),E=n("2f62"),q=n("529a"),B=n("0278");function V(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function H(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?V(Object(n),!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var D={components:{TextEllipsis:p,Cell:C,CellContainer:y["a"],Img:_,Loading:$},data:function(){return{bookInfo:{},chapterPreview:"",firstChapterInfo:"",bookChapterList:[],isLoadingBasic:!1,chapterUrl:""}},computed:H({},Object(E["c"])(["currentView","collectedFiction"])),methods:H({},Object(E["b"])(["insertCollected","setCurrentView","setCurrentViewFromCollected"]),{addToBookShelf:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=H({},this.bookInfo),this.insertCollected(e);case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getHost:function(){return Object(S["a"])(this.$route.query.link)},toContent:function(){this.bookInfo.recentRead?this.$router.push({name:"fiction_content",query:{link:this.bookInfo.recentRead.href}}):this.$toast("正在加载中，请稍后再试")},toChapterList:function(){this.$router.push({name:"fiction_chapterList",query:{chapterHref:this.chapterUrl},params:{chapterList:this.bookInfo.chapterList,title:this.bookInfo.title}})},setBookView:function(){var t=Object(q["a"])(Object(B["a"])("title",this.bookInfo.title))(this.collectedFiction);t?this.setCurrentViewFromCollected(this.bookInfo.title):this.setCurrentView(H({},this.bookInfo,{isCollected:!1}))},fetchContainer:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,n,r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.isLoadingBasic=!0,t.next=3,Object(P["c"])(this.$route.query.link);case 3:return e=t.sent,this.chapterUrl=e.chapterList?e.chapterList:this.$route.query.link,this.isLoadingBasic=!1,this.bookInfo=e,t.next=9,Object(P["a"])(e.chapterList?e.chapterList:this.$route.query.link);case 9:return n=t.sent,this.bookInfo=H({},e,{chapterList:n,recentRead:n[0]}),this.setBookView(),this.getHost(this.$route.query.link)&&(this.bookInfo.recentRead.href=e.chapterList+this.bookInfo.recentRead.href),t.next=15,Object(P["b"])(this.bookInfo.recentRead.href);case 15:r=t.sent,i=r.text,this.chapterPreview=i,console.log(this.bookInfo);case 19:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}),mounted:function(){this.fetchContainer()}},F=D,U=(n("bbe9"),Object(f["a"])(F,r,i,!1,null,"160e3639",null));e["default"]=U.exports},eae9:function(t,e,n){var r=n("d039");t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}}}]);