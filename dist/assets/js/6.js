(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{32:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return i});var i=function(t,n,i,o,a){var r,s,u,c,l,d=t,m=n,v=i,p=o,f=a,g=1,x=1.6,y=1.2,h=Expo.easeOut;!function(t,n,i,o,a){r=document.getElementById("canvas-container"),(s=new e.Camera).position.z=1,u=new e.Scene;var d,m,v,p=new e.PlaneBufferGeometry(2,2),f=new e.TextureLoader;(c=new e.WebGLRenderer).setPixelRatio(window.devicePixelRatio),i&&((d=f.load("".concat(i))).magFilter=e.LinearFilter,d.minFilter=e.LinearFilter,d.anisotropy=c.getMaxAnisotropy());o&&((m=f.load("".concat(o))).magFilter=e.LinearFilter,m.minFilter=e.LinearFilter,m.anisotropy=c.getMaxAnisotropy());a&&((v=f.load("".concat(a))).wrapS=v.wrapT=e.RepeatWrapping);l={time:{type:"f",value:1},resolution:{type:"v2",value:new e.Vector2},imageResolution:{type:"v2",value:new e.Vector2(1280,849)},u_mouse:{type:"v2",value:new e.Vector2},u_texture1:{type:"t",value:d},u_texture2:{type:"t",value:m},u_texture3:{type:"t",value:v},effectFactor:{type:"f",value:g},dispFactor:{type:"f",value:0}};var w=new e.ShaderMaterial({uniforms:l,vertexShader:t,fragmentShader:n,transparent:!0,opacity:1}),_=new e.Mesh(p,w);u.add(_),r.appendChild(c.domElement),c.setSize(window.innerWidth,window.innerHeight),l.resolution.value.x=c.domElement.width,l.resolution.value.y=c.domElement.height,document.onmousemove=function(e){l.u_mouse.value.x=e.pageX,l.u_mouse.value.y=e.pageY},r.addEventListener("mouseenter",function(e){TweenMax.to(w.uniforms.dispFactor,x,{value:1,ease:h})}),r.addEventListener("mouseleave",function(e){TweenMax.to(w.uniforms.dispFactor,y,{value:0,ease:h})})}(d,m,v,p,f),function e(){requestAnimationFrame(e);l.time.value+=.05,c.render(u,s)}()}}).call(this,n(35))},33:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var i=n(12),o=n.n(i),a=n(13),r=n.n(a),s=function(){function e(t){var n=this;o()(this,e),this.DOM={el:t},this.DOM.tipIcon=this.DOM.el.firstElementChild,this.mousemoveFn=function(e){n.tilt(e)},this.mouseleaveFn=function(e){n.removeTilt(e)},this.initEvents()}return r()(e,[{key:"initEvents",value:function(){this.DOM.el.addEventListener("mousemove",this.mousemoveFn),this.DOM.el.addEventListener("mouseleave",this.mouseleaveFn)}},{key:"tilt",value:function(e){var t=function(e){var t=0,n=0,i=document.body.scrollLeft+document.documentElement.scrollLeft,o=document.body.scrollTop+document.documentElement.scrollTop;return e||(e=window.event),e.pageX||e.pageY?(t=e.pageX,n=e.pageY):(e.clientX||e.clientY)&&(t=e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,n=e.clientY+document.body.scrollTop+document.documentElement.scrollTop),{x:t-i,y:n-o}}(e),n={x:[-20,20],y:[-20,20]},i=this.DOM.tipIcon.getBoundingClientRect();TweenMax.to(this.DOM.tipIcon,2,{ease:Expo.easeOut,x:(n.x[1]-n.x[0])/i.width*(t.x-(i.left+window.pageXOffset)+document.body.scrollLeft)+n.x[0],y:(n.y[1]-n.y[0])/i.height*(t.y-(i.top+window.pageYOffset)+document.body.scrollTop)+n.y[0]})}},{key:"removeTilt",value:function(){TweenMax.to(this.DOM.tipIcon,1,{ease:Elastic.easeOut.config(1,.4),x:0,y:0})}}]),e}()},34:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik00IC43NTVsMTQuMzc0IDExLjI0NS0xNC4zNzQgMTEuMjE5LjYxOS43ODEgMTUuMzgxLTEyLTE1LjM5MS0xMi0uNjA5Ljc1NXoiLz48L3N2Zz4="},41:function(e,t,n){},73:function(e,t,n){"use strict";var i=n(41);n.n(i).a},74:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"single-component"},[t("div",{staticClass:"single-component__arrow-right"},[t("router-link",{staticClass:"single-component__arrow-inner",attrs:{to:"/circle-animation"}},[t("img",{staticClass:"single-component__arrow-image",attrs:{src:n(34)}})])],1),this._m(0),t("div",{staticClass:"canvas-container",attrs:{id:"canvas-container"}})])};i._withStripped=!0;var o=n(32),a=n(33),r={name:"Distortion",data:function(){return{activeArticle:""}},mounted:function(){var e=this;setTimeout(function(){e.canvasInit(),e.mouseInteraction()},1e3)},beforeCreate:function(){document.body.className="underlayer"},methods:{canvasInit:function(){Object(o.a)("#define GLSLIFY 1\nvarying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}","// #pragma glslify: random = require(glsl-random)\n\n#ifdef GL_ES\nprecision highp float;\n#define GLSLIFY 1\n#endif\n\nvarying vec2 vUv;\n\nuniform sampler2D u_texture1;//sampler2Dは変数の型\nuniform sampler2D u_texture2;\nuniform sampler2D u_texture3;\n\nuniform float dispFactor;\nuniform float effectFactor;\n\nvoid main() {\n\n    vec2 uv = vUv;\n\n    vec4 disp = texture2D(u_texture3, uv);\n    //texture2DはGLSLの組み込み関数。テクスチャから色情報を抜き出すもの。だからoutputはテクスチャの色情報。\n    //第一引数はテクスチャ、第二引数はUV座標。\n    //「テクスチャーとは形状の情報しか持っていない3Dデータに対して、色や質感を与える情報のこと」\n\n    vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y);\n    vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);\n    //まずは、uv座標をいじっていると考える。\n    //uv座標をいじったりすることで、例えばぐにゃぐにゃにしたりできる。\n    //\n    //dispFactorの値は、hoverする・しないで0と1の値が変化する（TweenMaxでいじってる）\n    //参考 : https://nogson2.hatenablog.com/entry/2017/11/01/190122\n    //disp変数はvec4型(r,g,b,a)。disp.rはその第一引数を取り出している。\n    //\n\n    vec4 _texture1 = texture2D(u_texture1, distortedPosition);\n    vec4 _texture2 = texture2D(u_texture2, distortedPosition2);\n\n    vec4 finalTexture = mix(_texture1, _texture2, dispFactor);\n    //mix(x, y, a)は、x(1-a)+y*aを返す（つまり線形補間）\n    //aは混ぜる割合的な。\n    //例えば、赤と青を0.5の割合で混ぜると紫になる。\n\n    gl_FragColor = finalTexture;\n    // gl_FragColor = _texture1;\n}","../assets/img/distortion/texture1.jpg","../assets/img/distortion/texture2.jpg","../assets/img/common/displacement/3.jpg")},mouseInteraction:function(){for(var e=document.getElementsByClassName("single-component__arrow-inner"),t=0;t<e.length;t++)new a.a(e[t])}}},s=(n(73),n(1)),u=Object(s.a)(r,i,[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"single-component__info"},[t("h2",{staticClass:"single-component__title"},[this._v("Distortion Effect")]),t("p",{staticClass:"single-component__date"},[this._v("2019/07/16")]),t("p",{staticClass:"single-component__desc"},[this._v("これはただの赤いcanvasかもしれないが、私にとってはGLSL学習の偉大な第一歩だ。")])])}],!1,null,"64018584",null);u.options.__file="src/components/pages/distortion/Distortion.vue";t.default=u.exports}}]);