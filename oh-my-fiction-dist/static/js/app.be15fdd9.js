(function(t){function e(e){for(var o,i,r=e[0],s=e[1],l=e[2],u=0,d=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&d.push(c[i][0]),c[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);f&&f(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,i=1;i<n.length;i++){var r=n[i];0!==c[r]&&(o=!1)}o&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},i={app:0},c={app:0},a=[];function r(t){return s.p+"static/js/"+({}[t]||t)+"."+{"chunk-13400d34":"4b341562","chunk-2d0b384d":"dbaec661","chunk-2d2103fe":"deb11b84","chunk-3acecf9c":"15e85dde","chunk-75bd5354":"09a985d4","chunk-85c0fd98":"95f4d3bf","chunk-f36215b0":"68aedad4"}[t]+".js"}function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-13400d34":1,"chunk-3acecf9c":1,"chunk-75bd5354":1,"chunk-85c0fd98":1,"chunk-f36215b0":1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var o="static/css/"+({}[t]||t)+"."+{"chunk-13400d34":"bde9f37c","chunk-2d0b384d":"31d6cfe0","chunk-2d2103fe":"31d6cfe0","chunk-3acecf9c":"98d12e74","chunk-75bd5354":"116df6ff","chunk-85c0fd98":"452acbf3","chunk-f36215b0":"e47a8fab"}[t]+".css",c=s.p+o,a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var l=a[r],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===c))return e()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){l=d[r],u=l.getAttribute("data-href");if(u===o||u===c)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var o=e&&e.target&&e.target.src||c,a=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete i[t],f.parentNode.removeChild(f),n(a)},f.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){i[t]=0})));var o=c[t];if(0!==o)if(o)e.push(o[2]);else{var a=new Promise((function(e,n){o=c[t]=[e,n]}));e.push(o[2]=a);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=r(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(f);var n=c[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",d.name="ChunkLoadError",d.type=o,d.request=i,n[1](d)}c[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0fe3":function(t,e,n){"use strict";var o=n("bf11"),i=n.n(o);i.a},"1f68":function(t,e,n){},"267b":function(t,e,n){"use strict";n("a9e3");var o=n("53ca"),i=n("dafe"),c={set:function(t,e,n,i){var c={dataType:Object(o["a"])(e),value:e,type:n,datatime:i||(new Date).getTime()};n?window.sessionStorage.setItem(t,JSON.stringify(c)):window.localStorage.setItem(t,JSON.stringify(c))},get:function(t,e){var n,o=window.localStorage.getItem(t)||{};if(Object(i["b"])(o)&&(o=window.sessionStorage.getItem(t)),Object(i["b"])(o))return e;switch(o=JSON.parse(o),o.dataType){case"string":n=o.value;break;case"number":n=Number(o.value);break;case"boolean":n=Boolean(o.value);break;case"object":n=o.value;break}return n},remove:function(t){window.sessionStorage.removeItem(t),window.localStorage.removeItem(t)},clear:function(){window.sessionStorage.clear(),window.localStorage.clear()}};e["a"]=c},"2ae5":function(t,e,n){},"4ca0":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},c=[],a=n("2877"),r={},s=Object(a["a"])(r,i,c,!1,null,null,null),l=s.exports,u=n("9483");Object(u["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d3b7");var d=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isPulldown,callback:function(e){t.isPulldown=e},expression:"isPulldown"}},[n("article",{staticStyle:{"min-height":"100vh"}},[t.hasCollection?n("section",{staticClass:"homeContainer"},[n("section",{staticClass:"recentRead"},[n("van-row",{staticStyle:{margin:"0 0 5vh 0"},attrs:{type:"flex",justify:"space-between"}},[n("van-col",{staticClass:"font18 bold",class:[t.isActiveIcon.userBar?"animate_zoom":""],staticStyle:{color:"rgb(155, 155, 155)"},attrs:{span:"16"},on:{click:t.activeSidebar}},[t._v(" "+t._s(t.isLogin?t.JWT.userName:"立即登录"))]),n("van-col",{attrs:{span:"6"}},[n("van-row",{attrs:{type:"flex",justify:"space-around"}},[n("van-col",[n("van-icon",{attrs:{name:"search",size:"20"},on:{click:t.toSearch}})],1),n("van-col",[n("van-icon",{class:[t.isActiveIcon.upload?"animate_zoom":""],attrs:{name:"arrow-up",size:"20"},on:{click:t.testUpload}})],1),n("van-col",[n("van-icon",{class:[t.isActiveIcon.download?"animate_zoom":""],attrs:{name:"down",size:"20"},on:{click:t.testDownLoad}})],1),n("van-col",[n("van-icon",{attrs:{name:"apps-o",size:"20"},on:{click:t.toggleDeleteBook}})],1)],1)],1)],1),n("RecentRead",{attrs:{recentReadBook:t.recentReadBook,isEditingBook:t.isEditingBooks,deleteBook:t.deleteBook},on:{click:t.readBook}}),n("InfoBar",{staticClass:"infoList"})],1),n("section",{staticClass:"collection"},[n("section",{staticClass:"transitionWrapper"},t._l(t.collectedFiction,(function(e,o){return n("div",{directives:[{name:"show",rawName:"v-show",value:o>0,expression:"index > 0"}],key:e.desc,class:["fictionInnerContainer","list-complete-item"]},[n("Book",{attrs:{curBookInfo:e,isEditingBook:t.isEditingBooks,deleteBook:t.deleteBook},nativeOn:{click:function(n){return t.readBook(e)}}})],1)})),0)])]):n("FictionEmpty",{staticClass:"bgWhite"}),n("section",{staticClass:"leftPopup"},[n("van-popup",{staticStyle:{widht:"100%",padding:"5vw","box-sizing":"border-box"},attrs:{position:"bottom",round:""},model:{value:t.isActiveSideBar,callback:function(e){t.isActiveSideBar=e},expression:"isActiveSideBar"}},[n("div",{staticClass:"pageControl"},[n("van-cell",{staticStyle:{display:"flex","align-items":"center"},attrs:{title:"楷体"}},[n("van-switch",{attrs:{slot:"right-icon",value:t.isAcitveKaiTi},on:{input:function(e){return t.updatePageControl("fontFamily",e?"楷体":"")}},slot:"right-icon"})],1),n("van-cell",{staticStyle:{display:"flex","align-items":"center"},attrs:{title:"字体大小"}},[n("van-stepper",{attrs:{value:t.pageControl.fontSize},on:{change:function(e){return t.updatePageControl("fontSize",e)}}})],1),n("van-cell",{staticStyle:{display:"flex","align-items":"center"},attrs:{title:"自动上传"}},[n("van-switch",{attrs:{slot:"right-icon",value:t.isAutoUpload},on:{input:t.toggleAutoUpload},slot:"right-icon"})],1),n("van-cell",{staticStyle:{display:"flex","align-items":"center"},attrs:{title:"自动更新章节"}},[n("van-switch",{attrs:{slot:"right-icon",value:t.isAutoUpdateChapter},on:{input:t.toggleAutoUpdateChapter},slot:"right-icon"})],1)],1),n("div",[n("van-button",{staticStyle:{width:"100%","margin-top":"10px"},attrs:{round:"",type:"danger"},on:{click:t.logout}},[t._v("注销登录")])],1)])],1)],1)])},p=[],h=(n("a4d3"),n("4de4"),n("d81d"),n("e439"),n("dbb4"),n("b64b"),n("3ca3"),n("159b"),n("ddb0"),n("3835")),m=(n("96cf"),n("1da1")),g=n("ade3"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{style:{width:t.imgWidth,height:t.imgHeight}},[n("section",{staticClass:"myfictionWrapper",class:[t.isEditingBook?"shaking":""]},[n("div",{class:["fiction-img",t.isReadingBook?"zoom-book":""]},[n("van-image",{attrs:{width:"100%",height:"100%",src:t.curBookInfo.img?t.curBookInfo.img:"https://i.loli.net/2019/12/29/Kjel2kduwQArxBR.jpg"}})],1),t.isEditingBook?n("div",{staticClass:"deleteIcon"},[n("van-icon",{attrs:{name:"clear",size:"20",color:"red"},on:{click:function(e){return e.stopPropagation(),t.removeBook(e)}}})],1):t._e(),t.hasTitle?n("div",{staticClass:"myFictionTitle"},[t._v(t._s(t.curBookInfo.title))]):t._e()])])},b=[],T={props:{imgWidth:{type:String,default:"90px"},imgHeight:{type:String,default:"120px"},hasTitle:{type:Boolean,default:!0},curBookInfo:{type:Object,default:function(){return{}}},isEditingBook:{type:Boolean,defalut:!1},deleteBook:{type:Function}},data:function(){return{isReadingBook:!1}},methods:{removeBook:function(){this.deleteBook(this.curBookInfo.title)}}},C=T,O=(n("0fe3"),Object(a["a"])(C,v,b,!1,null,"fbd52d9a",null)),_=O.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fiction-empty"},[t._m(0),n("section",{staticStyle:{"text-align":"center","margin-top":"100px"}},[n("van-button",{staticStyle:{"border-radius":"5px"},attrs:{type:"primary"},on:{click:t.jumpToSearch}},[t._v("立即搜索 !")])],1)])},y=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"empty-img"},[o("img",{attrs:{src:n("fc5a")}})])}],w={methods:{jumpToSearch:function(){this.$router.push({name:"fiction_search"})}}},E=w,S=(n("d8b9"),Object(a["a"])(E,k,y,!1,null,"4c671437",null)),j=S.exports,I=(n("8bb2"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-row",{attrs:{type:"flex",justify:"space-between"}},[n("van-col",{staticStyle:{display:"flex",justifyContent:"center","align-items":"center"},attrs:{span:"8"}},[n("Book",{attrs:{imgHeight:"135px",imgWidth:"105px",curBookInfo:t.recentReadBook,hasTitle:!1,isEditingBook:t.isEditingBook,deleteBook:t.deleteBook},nativeOn:{click:function(e){return t.toBookContent(e)}}})],1),n("van-col",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"space-around",padding:"10px 0"},attrs:{span:"14"}},[n("van-row",{staticClass:"ellipsis font18"},[t._v(t._s(t.recentReadBook.title))]),n("van-row",{staticClass:"ellipsis font14"},[t._v("作者："+t._s(t.recentReadBook.author))]),n("van-row",{staticClass:"ellipsis font12"},[t._v("进度："+t._s(t.recentReadBook.recentRead.title))]),n("van-row",{staticClass:"textElliplise2 font12 fontGrey "},[t._v(t._s(t.recentReadBook.desc))])],1)],1)}),L=[],A={props:{recentReadBook:{type:Object,default:function(){return{}}},isEditingBook:{type:Boolean,default:!1},deleteBook:{type:Function}},components:{Book:_},methods:{toBookContent:function(){this.$emit("click",this.recentReadBook)}}},U=A,B=Object(a["a"])(U,I,L,!1,null,null,null),F=B.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",[n("section",{staticClass:"infoBar"},[n("van-row",{attrs:{span:"4",justify:"space-around"}},[n("van-icon",{staticClass:"info-item",attrs:{name:"volume",color:"green"}})],1),n("van-row",{staticClass:"item-container",attrs:{span:"16"}},[n("transition-group",{attrs:{name:"bounce"}},t._l(t.infoList,(function(e,o){return n("div",{directives:[{name:"show",rawName:"v-show",value:o==t.displayIndex,expression:"index == displayIndex"}],key:e,staticClass:"info-item"},[t._v(" "+t._s(e)+" ")])})),0)],1)],1)])},x=[],N={props:{infoList:{type:Array,default:function(){return[""]}}},computed:{displayLen:function(){return this.infoList.length}},data:function(){return{displayTimer:null,displayIndex:0}},mounted:function(){var t=this;this.displayTimer=setInterval((function(){t.displayIndex===t.infoList.length?t.displayIndex=0:t.displayIndex+=1}),2e3)},beforeDestroy:function(){clearInterval(this.displayTimer)}},R=N,D=(n("5b25"),Object(a["a"])(R,P,x,!1,null,"7b6361db",null)),$=D.exports,V=n("a20f"),W=n("c24f"),z=n("2f62");function G(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function J(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?G(Object(n),!0).forEach((function(e){Object(g["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var M={components:{FictionEmpty:j,RecentRead:F,Book:_,InfoBar:$},data:function(){return{isActiveIcon:{upload:!1,download:!1,userBar:!1},isActiveSideBar:!1,fontSize:16,activeFontType:"楷体",isEditingBooks:!1,isPulldown:!1}},computed:J({},Object(z["c"])(["collectedFiction","JWT","pageControl","isAutoUpload","lastUpdateChapterTime","isAutoUpdateChapter","lastestUploadTime"]),{isAcitveKaiTi:function(){return"楷体"===this.pageControl.fontFamily},hasCollection:function(){return!!this.collectedFiction&&!!this.collectedFiction.length},recentReadBook:function(){return this.collectedFiction[0]},isLogin:function(){return!!this.JWT.userName}}),methods:J({},Object(z["b"])(["sortCollected","setPageControl","setCurrentView","resetCollected","setToken","toggleAutoSave","updateUploadTime","toggleAutoUpdate","deleteCollected","updateLastUpdateTime"]),{toggleDeleteBook:function(){this.isEditingBooks=!this.isEditingBooks},deleteBook:function(t){return this.deleteCollected(t)},toggleAutoUpload:function(){this.toggleAutoSave(!this.isAutoUpload)},updatePageControl:function(t,e){this.setPageControl(J({},this.pageControl,Object(g["a"])({},t,e)))},toggleAutoUpdateChapter:function(){this.toggleAutoUpdate(!this.isAutoUpdateChapter)},logout:function(){this.setToken({}),this.$router.push({name:"login"})},activeSidebar:function(){this.isActiveIcon.upload=!0,this._animateClick("userBar"),this.isLogin?this.isActiveSideBar=!0:this.$router.push({name:"login"})},readBook:function(t){this.sortCollected(t),this.setCurrentView(J({},t,{isCollected:!0})),this.$router.push({name:"fiction_content",query:{link:t.recentRead.href,title:t.title}})},toSearch:function(){this.$router.push({name:"fiction_search"})},testUpload:function(){var t=this;this._verifyAuth()&&(this._animateClick("upload"),this.$toast("正在尝试上传..."),Object(W["f"])({books:this.collectedFiction}).then((function(e){t.updateUploadTime(Date.now()),t.$toast(e.msg)})).catch((function(e){t.$toast("上传失败")})))},testDownLoad:function(){var t=this;this._verifyAuth()&&(this._animateClick("download"),this.$toast("正在尝试下载..."),Object(W["a"])().then((function(e){t.$toast("下载成功"),t.resetCollected(e.books)})).catch((function(e){t.$toast("下载失败")})))},_animateClick:function(t){var e=this;this.isActiveIcon[t]=!0,this._delayRun((function(){e.isActiveIcon[t]=!1}),500)},_delayRun:function(t,e){var n=setTimeout((function(){t(),clearTimeout(n)}),e)},_verifyAuth:function(){return!!this.isLogin||(this.$toast("请先登录"),!1)},autoUploadFile:function(t){Date.now()>this.lastestUploadTime+60*t*1e3&&this.isAutoUpload&&this.testUpload()},autoUpdateChapter:function(t){Date.now()>this.lastUpdateChapterTime+60*t*1e3&&this.isAutoUpdateChapter&&this.updateNewChapterLists(this.collectedFiction)},onRefresh:function(){var t=Object(m["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.updateNewChapterLists(this.collectedFiction);case 2:this.isPulldown=!1;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),updateNewChapterLists:function(){var t=Object(m["a"])(regeneratorRuntime.mark((function t(e){var n,o,i,c,a,r,s,l,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return u=function(t){var n=0,o=e.map((function(e,o){var i=e;return e.chapterList.length!==t[o].length&&(console.log("fiction updated"),n+=1,i=J({},e,{chapterList:t[o].chapterList})),i}));return[n,o]},l=function(t){return Promise.all(t)},s=function(t){return new Promise((function(e,n){Object(V["a"])(t).then(e).catch(n)}))},n=e.map((function(t){return s(t.chapterListLink)})),t.next=6,l(n);case 6:o=t.sent,i=u(o),c=Object(h["a"])(i,2),a=c[0],r=c[1],this.resetCollected(r),this.$toast("".concat(a," 本小说已更新"));case 10:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}),mounted:function(){this.autoUploadFile(15),this.autoUpdateChapter(240),Object(W["d"])().then((function(t){return console.log(t)})).catch((function(t){return console.log(t)}))}},H=M,q=(n("9469"),Object(a["a"])(H,f,p,!1,null,"66d727e4",null)),K=q.exports,Q={collectedFiction:function(t){return t.fiction.collectedFiction},currentView:function(t){return t.fiction.currentView},hotSearchList:function(t){return t.fiction.hotSearchList},JWT:function(t){return t.user.token},pageControl:function(t){return t.page.control},isAutoUpload:function(t){return t.page.autoSave},lastestUploadTime:function(t){return t.page.uploadTime},isAutoUpdateChapter:function(t){return t.page.autoCheckUpdate},lastUpdateChapterTime:function(t){return t.page.lastUpdateTime}},X=Q,Y=(n("99af"),n("fb6a"),n("2909")),Z=n("267b"),tt=n("dafe"),et=n("03ed"),nt=n("0278"),ot=n("529a"),it=n("d399");function ct(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function at(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ct(Object(n),!0).forEach((function(e){Object(g["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ct(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var rt={state:{collectedFiction:Z["a"].get("fiction_collected",[]),hotSearchList:Z["a"].get("fiction_hotSearch",[]),currentView:Z["a"].get("fiction_currentView")},mutations:{SET_FICTION_HOT_SEARCH:function(t,e){console.log("SET_FICTION_HOT_SEARCH"),t.hotSearchList=e,Z["a"].set("fiction_hotSearch",t.hotSearchList)},DELETE_FICTION_COLLECT:function(t,e){it["a"].success("删除小说成功"),t.collectedFiction=t.collectedFiction.filter((function(t){return t.title!==e})),Z["a"].set("fiction_collected",t.collectedFiction)},INSERT_FICTION_COLLECT:function(t,e){console.log("INSERT_FICTION_COLLECT"),Object(tt["b"])(t.collectedFiction)&&(t.collectedFiction=[]);var n=t.collectedFiction.every((function(t){return t.title!==e.title}));if(!n)return it["a"].fail("书籍已收藏，请勿重复添加"),!1;t.collectedFiction.push(e),Z["a"].set("fiction_collected",t.collectedFiction),it["a"].success("加入书架成功")},UPDATE_FICTION_COLLECT:function(t,e){console.log("---UPDATE_FICTION_COLLECT---"),Object(tt["b"])(t.collectedFiction)&&(t.collectedFiction=[]),t.collectedFiction=t.collectedFiction.map((function(t){return t.title==e.title&&(t=e),t})),Z["a"].set("fiction_collected",t.collectedFiction)},RESET_FICTION_COLLECT:function(t,e){console.log("---RESET_FICTION_COLLECT---"),t.collectedFiction=e,Z["a"].set("fiction_collected",t.collectedFiction)},SORT_FICTION_COLLECT:function(t,e){console.log("---SORT_FICTION_COLLECT---");var n=Object(et["a"])(Object(nt["a"])("title",e.title))(t.collectedFiction);console.log(n),t.collectedFiction=[].concat(Object(Y["a"])(t.collectedFiction.slice(n,n+1)),Object(Y["a"])(t.collectedFiction.slice(0,n)),Object(Y["a"])(t.collectedFiction.slice(n+1))),Z["a"].set("fiction_collected",at({},t.collectedFiction,{isCollected:!0}))},SET_FICTION_VIEW:function(t,e){console.log("SET_FICTION_VIEW"),t.currentView=e,Z["a"].set("fiction_currentView",t.currentView,"session")},SET_CURRENT_VIEW_FROM_COLLECTED:function(t,e){console.log("SET_CURRENT_VIEW_FROM_COLLECTED"),t.currentView=Object(ot["a"])(Object(nt["a"])("title",e))(t.collectedFiction),Z["a"].set("fiction_currentView",t.currentView,"session")}},actions:{setFictionHotSearch:function(t,e){var n=t.commit;n("SET_FICTION_HOT_SEARCH",e)},resetCollected:function(t,e){var n=t.commit;n("RESET_FICTION_COLLECT",e)},deleteCollected:function(t,e){var n=t.commit;n("DELETE_FICTION_COLLECT",e)},insertCollected:function(t,e){var n=t.commit;n("INSERT_FICTION_COLLECT",e)},updateCollected:function(t,e){var n=t.commit;n("UPDATE_FICTION_COLLECT",e)},sortCollected:function(t,e){var n=t.commit;n("SORT_FICTION_COLLECT",e)},setCurrentViewFromCollected:function(t,e){var n=t.commit;n("SET_CURRENT_VIEW_FROM_COLLECTED",e)},setCurrentView:function(t,e){var n=t.commit;n("SET_FICTION_VIEW",e)}}},st=rt,lt={state:{token:Z["a"].get("token",{})},mutations:{SET_JWT:function(t,e){console.log("SET_JWT"),t.token=e,Z["a"].set("token",t.token)}},actions:{setToken:function(t,e){var n=t.commit;n("SET_JWT",e)}}},ut=lt,dt={fontSize:16,backgroundColor:"#dff9fb ",color:"rgb(45, 52, 54)",fontFamily:""},ft={state:{control:Z["a"].get("pageControl",dt),autoSave:Z["a"].get("autoSave",!1),uploadTime:Z["a"].get("uploadTime",Date.now()),autoCheckUpdate:Z["a"].get("autoCheckUpdate",!1),lastUpdateTime:Z["a"].get("lastUpdateTime",Date.now())},mutations:{SET_PAGE_CONTROL:function(t,e){console.log("SET PAGE_CONTROL"),t.control=e,Z["a"].set("pageControl",t.control)},TOGGLE_AUTO_SAVE:function(t,e){console.log("TOGGLE_AUTO_SAVE"),t.autoSave=!!e,Z["a"].set("autoSave",t.autoSave)},UPDATE_UPLOAD_TIME:function(t,e){console.log("UPDATE_UPLOAD_TIME"),t.uploadTime=e,Z["a"].set("uploadTime",t.uploadTime)},TOGGLE_AUTO_UPDATE:function(t,e){console.log("TOGGLE_AUTO_UPDATE"),t.autoCheckUpdate=!!e,Z["a"].set("autoCheckUpdate",t.autoCheckUpdate)},UPDATE_LAST_UPDATE_TIME:function(t,e){console.log("UPDATE_UPLOAD_TIME"),t.lastUpdateTime=e,Z["a"].set("lastUpdateTime",t.lastUpdateTime)}},actions:{setPageControl:function(t,e){var n=t.commit;n("SET_PAGE_CONTROL",e)},toggleAutoSave:function(t,e){var n=t.commit;n("TOGGLE_AUTO_SAVE",e)},updateUploadTime:function(t,e){var n=t.commit;n("UPDATE_UPLOAD_TIME",e)},toggleAutoUpdate:function(t,e){var n=t.commit;n("TOGGLE_AUTO_UPDATE",e)},updateLastUpdateTime:function(t,e){var n=t.commit;n("UPDATE_LAST_UPDATE_TIME",e)}}},pt=ft;o["a"].use(z["a"]);var ht=new z["a"].Store({state:{},mutations:{},getters:X,modules:{fiction:st,page:pt,user:ut}});o["a"].use(d["a"]);var mt=[{path:"/",redirect:{name:"home"}},{path:"/v2_home",name:"home",component:K},{path:"/fiction",component:function(){return n.e("chunk-2d0b384d").then(n.bind(null,"295e"))},children:[{path:"search",name:"fiction_search",component:function(){return n.e("chunk-85c0fd98").then(n.bind(null,"5bb8"))}},{path:"home",name:"fiction_home",component:function(){return n.e("chunk-3acecf9c").then(n.bind(null,"d89b"))}},{path:"chapterList",name:"fiction_chapterList",component:function(){return n.e("chunk-f36215b0").then(n.bind(null,"1446"))}},{path:"content",name:"fiction_content",component:function(){return n.e("chunk-13400d34").then(n.bind(null,"dd53"))}}]},{path:"/login",name:"login",component:function(){return n.e("chunk-75bd5354").then(n.bind(null,"dd7b"))}},{path:"/admin",name:"admin",component:function(){return n.e("chunk-2d2103fe").then(n.bind(null,"b6a5"))},meta:{requiresAuth:!0}}],gt=new d["a"]({routes:mt}),vt=gt,bt=n("9a06"),Tt=n.n(bt),Ct=(n("1f68"),n("b970"));n("157a");o["a"].use(Ct["a"]),o["a"].prototype.$stdout=Tt.a,o["a"].config.productionTip=!1,new o["a"]({router:vt,store:ht,render:function(t){return t(l)}}).$mount("#app")},"5b25":function(t,e,n){"use strict";var o=n("2ae5"),i=n.n(o);i.a},"64f3":function(t,e,n){"use strict";n("d3b7");var o=n("bc3a"),i=n.n(o),c="https://limiaomiao.site",a=2e4,r=i.a.create({baseURL:c,timeout:a,headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"}});r.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),r.interceptors.response.use((function(t){return t.data}),(function(t){return Promise.reject(t)})),e["a"]=r},"8bb2":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-row",{staticClass:"pd15 roundCorner row"},[t._t("default")],2)},i=[],c=n("2877"),a={},r=Object(c["a"])(a,o,i,!1,null,null,null);e["a"]=r.exports},9469:function(t,e,n){"use strict";var o=n("4ca0"),i=n.n(o);i.a},a20f:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"e",(function(){return c})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return s}));var o=n("64f3"),i=function(){return Object(o["a"])({url:"fiction/recommand",method:"get"})},c=function(t,e){return Object(o["a"])({url:"fiction/search",method:"get",params:{keyword:t,accurateSearch:e}})},a=function(t){return Object(o["a"])({url:"fiction/bookHome",method:"get",params:{url:t}})},r=function(t){return Object(o["a"])({url:"fiction/getChapterList",method:"get",params:{url:t}})},s=function(t){return Object(o["a"])({url:"fiction/getContent",method:"get",params:{url:t}})}},bf11:function(t,e,n){},c24f:function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"e",(function(){return c})),n.d(e,"f",(function(){return a})),n.d(e,"b",(function(){return r})),n.d(e,"d",(function(){return s})),n.d(e,"a",(function(){return l}));var o=n("64f3"),i=function(t,e){return Object(o["a"])({method:"post",headers:{"Content-Type":"application/json"},url:"user/login",data:{userName:t,passwd:e}})},c=function(t,e){return Object(o["a"])({method:"post",headers:{"Content-Type":"application/json"},url:"user/register",data:{userName:t,passwd:e}})},a=function(t){var e=JSON.parse(window.localStorage.getItem("token")),n=e.value;return Object(o["a"])({method:"post",headers:{"Content-Type":"application/json",authorization:n.token},url:"user/storeToCloud",data:t})},r=function(t){var e=JSON.parse(window.localStorage.getItem("token")),n=e.value;return Object(o["a"])({method:"post",headers:{"Content-Type":"application/json",authorization:n.token},url:"file/getTodayLog",data:t})},s=function(){return Object(o["a"])({method:"get",url:"file/recordLog"})},l=function(){var t=JSON.parse(window.localStorage.getItem("token")),e=t.value;return Object(o["a"])({method:"post",headers:{"Content-Type":"application/json",authorization:e.token},url:"user/getFromCloud"})}},d8b9:function(t,e,n){"use strict";var o=n("dfcc"),i=n.n(o);i.a},dafe:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return c})),n.d(e,"c",(function(){return a}));n("99af"),n("fb6a"),n("ac1f"),n("466d");var o=n("2909");function i(t){if(t instanceof Array){if(0===t.length)return!0}else{if(!(t instanceof Object))return null==t||void 0===t||""===t;if("{}"===JSON.stringify(t))return!0}return!1}var c=function(t){return t.match(/(w+)(\.)([a-z]+)(\.)(com)/)[3]},a=function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return n>=e.length?[e]:[e.slice(0,n)].concat(Object(o["a"])(t(e.slice(n),n)))}},dfcc:function(t,e,n){},fc5a:function(t,e,n){t.exports=n.p+"static/img/book-empty.d23e86c7.jpg"}});