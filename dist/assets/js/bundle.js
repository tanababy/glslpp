!function(e){function t(t){for(var r,o,s=t[0],l=t[1],c=t[2],u=0,p=[];u<s.length;u++)o=s[u],a[o]&&p.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(d&&d(t);p.length;)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={1:0},a={1:0},i=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[];o[e]?t.push(o[e]):0!==o[e]&&{2:1,3:1,4:1,5:1,6:1}[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="assets/css/"+e+".style.min.css",a=s.p+r,i=document.getElementsByTagName("link"),l=0;l<i.length;l++){var c=(d=i[l]).getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(c===r||c===a))return t()}var u=document.getElementsByTagName("style");for(l=0;l<u.length;l++){var d;if((c=(d=u[l]).getAttribute("data-href"))===r||c===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],p.parentNode.removeChild(p),n(i)},p.href=a,document.getElementsByTagName("head")[0].appendChild(p)}).then(function(){o[e]=0}));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=a[e]=[t,r]});t.push(n[2]=r);var i,l=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=function(e){return s.p+"assets/js/"+({}[e]||e)+".js"}(e),i=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,n[1](i)}a[e]=void 0}};var u=setTimeout(function(){i({type:"timeout",target:c})},12e4);c.onerror=c.onload=i,l.appendChild(c)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=c;i.push([20,7]),n()}([,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";var r=function(){var e=this.$createElement;this._self._c;return this._m(0)};r._withStripped=!0;var o={name:"BackGround"},a=(n(25),n(1)),i=Object(a.a)(o,r,[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"background-layer"},[t("p",{staticClass:"glitch",attrs:{"data-text":"Gallery"}},[this._v("Gallery")])])}],!1,null,"77148806",null);i.options.__file="src/components/modules/BackGround.vue";t.a=i.exports},,function(e,t,n){"use strict";var r=n(3),o=n(10),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"layer"},[n("BackGround"),e._v(" "),n("div",{staticClass:"scroll-wrapper",attrs:{id:"scroll-wrapper"}},[n("ul",{staticClass:"gallery"},e._l(e.articles,function(t){return n("li",{key:t.id,staticClass:"gallery__cassette",on:{mouseenter:function(n){return e.activeCheck(t)},mouseleave:function(t){e.activeArticle=""}}},[n("router-link",{attrs:{to:{path:t.path}}},[n("div",{staticClass:"gallery__image"},[n("span",{staticClass:"gallery__image-static"},[n("img",{attrs:{src:t.pngThum,alt:""}})]),e._v(" "),t==e.activeArticle?n("span",{staticClass:"gallery__image-gif"},[n("img",{attrs:{src:t.gifThum,alt:""}})]):e._e()]),e._v(" "),n("div",{staticClass:"gallery__content"},[n("p",{staticClass:"gallery__title"},[e._v(e._s(t.title))])])])],1)}),0)])],1)};a._withStripped=!0;var i=n(12),s=n.n(i),l=n(13),c=n.n(l),u=function(){function e(t){var n=this;s()(this,e),this.DOM={el:t},this.mousemoveFn=function(e){n.tilt(e)},this.mouseleaveFn=function(e){n.removeTilt(e)},this.initEvents()}return c()(e,[{key:"initEvents",value:function(){this.DOM.el.addEventListener("mousemove",this.mousemoveFn),this.DOM.el.addEventListener("mouseleave",this.mouseleaveFn)}},{key:"tilt",value:function(e){var t=function(e){var t=0,n=0,r=document.body.scrollLeft+document.documentElement.scrollLeft,o=document.body.scrollTop+document.documentElement.scrollTop;return e||(e=window.event),e.pageX||e.pageY?(t=e.pageX,n=e.pageY):(e.clientX||e.clientY)&&(t=e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,n=e.clientY+document.body.scrollTop+document.documentElement.scrollTop),{x:t-r,y:n-o}}(e),n=this.DOM.el.getBoundingClientRect();TweenMax.to(this.DOM.el,2,{ease:Expo.easeOut,rotationY:.02*(t.x-(n.left+window.pageXOffset)+document.body.scrollLeft-n.width/2),rotationX:-.04*(t.y-(n.top+window.pageYOffset)+document.body.scrollTop-n.height/2),scale:1.15,transformOrigin:"50% 50%"})}},{key:"removeTilt",value:function(){TweenMax.to(this.DOM.el,1,{ease:Expo.easeOut,rotationY:0,rotationX:0,scale:1})}}]),e}(),d=n(9),p=n(15),f=n.n(p),m={name:"Top",components:{BackGround:d.a},data:function(){return{articles:[{title:"Hello World!!",pngThum:"../../../assets/img/hello-world/hello-world.png",gifThum:"../../../assets/img/hello-world/hello-world.png",path:"/hello-world"},{title:"Circle Rhythm Animation",pngThum:"../../../assets/img/circle-animation/circle-animation.png",gifThum:"../../../assets/img/circle-animation/circle-animation.gif",path:"/circle-animation"},{title:"Dragon Quest Gate",pngThum:"../../../assets/img/dragon-quest-gate/dragon-quest-gate.png",gifThum:"../../../assets/img/dragon-quest-gate/dragon-quest-gate.gif",path:"/dragon-quest-gate"}],activeArticle:""}},mounted:function(){this.mouseInteraction(),this.scrollLuxy()},beforeCreate:function(){document.body.className="top"},methods:{activeCheck:function(e){this.activeArticle=e},mouseInteraction:function(){for(var e=document.getElementsByClassName("gallery__cassette"),t=0;t<e.length;t++)new u(e[t])},scrollLuxy:function(){f.a.init({wrapper:"#scroll-wrapper"})}}},h=(n(26),n(1)),g=Object(h.a)(m,a,[],!1,null,"8533eb60",null);g.options.__file="src/components/pages/top/Top.vue";var v=g.exports;r.a.use(o.a);var y=[{path:"/",component:v},{path:"/about",component:function(){return Promise.all([n.e(8),n.e(3)]).then(n.bind(null,78))}},{path:"/hello-world",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,77))}},{path:"/circle-animation",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,76))}},{path:"/dragon-quest-gate",component:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,75))}},{path:"/distortion",component:function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,74))}}];t.a=new o.a({mode:"history",routes:y})},,,,,,,function(e,t,n){"use strict";var r=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("Header"),this._v(" "),t("transition",[t("router-view")],1)],1)};r._withStripped=!0;var o=function(){var e=this.$createElement,t=this._self._c||e;return t("header",{staticClass:"header"},[t("h1",{staticClass:"header__logo"},[t("router-link",{attrs:{to:"/"}},[this._v("GLSL PP")])],1),this._v(" "),t("ul",{staticClass:"header__list"},[t("li",{staticClass:"header__list-item"},[t("router-link",{attrs:{to:"/about"}},[this._v("ABOUT")])],1)])])};o._withStripped=!0;var a={name:"Header"},i=(n(29),n(1)),s=Object(i.a)(a,o,[],!1,null,"1c03fc76",null);s.options.__file="src/components/modules/Header.vue";var l={name:"App",components:{Header:s.exports,BackGround:n(9).a}},c=(n(30),Object(i.a)(l,r,[],!1,null,null,null));c.options.__file="src/App.vue";t.a=c.exports},,function(e,t,n){"use strict";n.r(t),function(e){n(22);var t=n(3),r=n(2),o=n(16),a=n(14),i=n.n(a),s=n(11),l=n(18),c=n(17),u=n.n(c);o.a;t.a.use(u.a,{id:"UA-143697577-1",router:s.a}),new t.a({el:"#app",router:s.a,render:function(e){return e(l.a)}}),function(){var t=navigator.userAgent.toLowerCase();navigator.appVersion.toLowerCase();-1!==t.indexOf("iphone")||-1!==t.indexOf("ipad")||-1!==t.indexOf("android")?(r.a.set(e(".smartphone-layer"),{display:"block"}),r.a.set(e(".pc-layer"),{display:"none"})):r.a.set(e(".pc-layer"),{autoAlpha:1})}();e("body").hasClass("top")?function(){var t=i()("body"),n=t.images.length,o=0,a=0;t.on("progress",function(){o++});window.requestAnimationFrame(function t(){a+=.08*(o/n-a),e(".loading-layer__count").text("".concat(parseInt(100*a))),a>=1?r.a.to(e(".loading-layer"),.5,{autoAlpha:0}).delay(1):(a>.99&&(a=1),window.requestAnimationFrame(t))})}():r.a.to(e(".loading-layer"),.5,{autoAlpha:0}).delay(1),console.log("%c Design, Development by Genius. → Yuki Tanabe (@yukitanabe6)","padding: 7px 10px 7px 0px; background-color: #9b0808; color: #fff;")}.call(this,n(21))},,function(e,t,n){},,,function(e,t,n){"use strict";var r=n(5);n.n(r).a},function(e,t,n){"use strict";var r=n(6);n.n(r).a},,,function(e,t,n){"use strict";var r=n(7);n.n(r).a},function(e,t,n){"use strict";var r=n(8);n.n(r).a}]);