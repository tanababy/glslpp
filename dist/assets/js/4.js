(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{32:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return i});var i=function(t,n,i,o,a){var s,r,l,c,u,m=t,d=n,v=i,p=o,f=a,g=1,y=1.6,h=1.2,w=Expo.easeOut;!function(t,n,i,o,a){s=document.getElementById("canvas-container"),(r=new e.Camera).position.z=1,l=new e.Scene;var m,d,v,p=new e.PlaneBufferGeometry(2,2),f=new e.TextureLoader;(c=new e.WebGLRenderer).setPixelRatio(window.devicePixelRatio),i&&((m=f.load("".concat(i))).magFilter=e.LinearFilter,m.minFilter=e.LinearFilter,m.anisotropy=c.getMaxAnisotropy());o&&((d=f.load("".concat(o))).magFilter=e.LinearFilter,d.minFilter=e.LinearFilter,d.anisotropy=c.getMaxAnisotropy());a&&((v=f.load("".concat(a))).wrapS=v.wrapT=e.RepeatWrapping);u={time:{type:"f",value:1},resolution:{type:"v2",value:new e.Vector2},imageResolution:{type:"v2",value:new e.Vector2(1280,849)},u_mouse:{type:"v2",value:new e.Vector2},u_texture1:{type:"t",value:m},u_texture2:{type:"t",value:d},u_texture3:{type:"t",value:v},effectFactor:{type:"f",value:g},dispFactor:{type:"f",value:0}};var x=new e.ShaderMaterial({uniforms:u,vertexShader:t,fragmentShader:n,transparent:!0,opacity:1}),L=new e.Mesh(p,x);l.add(L),s.appendChild(c.domElement),c.setSize(window.innerWidth,window.innerHeight),u.resolution.value.x=c.domElement.width,u.resolution.value.y=c.domElement.height,document.onmousemove=function(e){u.u_mouse.value.x=e.pageX,u.u_mouse.value.y=e.pageY},s.addEventListener("mouseenter",function(e){TweenMax.to(x.uniforms.dispFactor,y,{value:1,ease:w})}),s.addEventListener("mouseleave",function(e){TweenMax.to(x.uniforms.dispFactor,h,{value:0,ease:w})})}(m,d,v,p,f),function e(){requestAnimationFrame(e);u.time.value+=.05,c.render(l,r)}()}}).call(this,n(35))},33:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var i=n(12),o=n.n(i),a=n(13),s=n.n(a),r=function(){function e(t){var n=this;o()(this,e),this.DOM={el:t},this.DOM.tipIcon=this.DOM.el.firstElementChild,this.mousemoveFn=function(e){n.tilt(e)},this.mouseleaveFn=function(e){n.removeTilt(e)},this.initEvents()}return s()(e,[{key:"initEvents",value:function(){this.DOM.el.addEventListener("mousemove",this.mousemoveFn),this.DOM.el.addEventListener("mouseleave",this.mouseleaveFn)}},{key:"tilt",value:function(e){var t=function(e){var t=0,n=0,i=document.body.scrollLeft+document.documentElement.scrollLeft,o=document.body.scrollTop+document.documentElement.scrollTop;return e||(e=window.event),e.pageX||e.pageY?(t=e.pageX,n=e.pageY):(e.clientX||e.clientY)&&(t=e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,n=e.clientY+document.body.scrollTop+document.documentElement.scrollTop),{x:t-i,y:n-o}}(e),n={x:[-20,20],y:[-20,20]},i=this.DOM.tipIcon.getBoundingClientRect();TweenMax.to(this.DOM.tipIcon,2,{ease:Expo.easeOut,x:(n.x[1]-n.x[0])/i.width*(t.x-(i.left+window.pageXOffset)+document.body.scrollLeft)+n.x[0],y:(n.y[1]-n.y[0])/i.height*(t.y-(i.top+window.pageYOffset)+document.body.scrollTop)+n.y[0]})}},{key:"removeTilt",value:function(){TweenMax.to(this.DOM.tipIcon,1,{ease:Elastic.easeOut.config(1,.4),x:0,y:0})}}]),e}()},34:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik00IC43NTVsMTQuMzc0IDExLjI0NS0xNC4zNzQgMTEuMjE5LjYxOS43ODEgMTUuMzgxLTEyLTE1LjM5MS0xMi0uNjA5Ljc1NXoiLz48L3N2Zz4="},38:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yMCAuNzU1bC0xNC4zNzQgMTEuMjQ1IDE0LjM3NCAxMS4yMTktLjYxOS43ODEtMTUuMzgxLTEyIDE1LjM5MS0xMiAuNjA5Ljc1NXoiLz48L3N2Zz4="},39:function(e,t,n){},71:function(e,t,n){"use strict";var i=n(39);n.n(i).a},76:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"single-component"},[t("div",{staticClass:"single-component__arrow-left"},[t("router-link",{staticClass:"single-component__arrow-inner",attrs:{to:"/hello-world"}},[t("img",{attrs:{src:n(38)}})])],1),t("div",{staticClass:"single-component__arrow-right"},[t("router-link",{staticClass:"single-component__arrow-inner",attrs:{to:"/dragon-quest-gate"}},[t("img",{attrs:{src:n(34)}})])],1),this._m(0),t("div",{staticClass:"canvas-container",attrs:{id:"canvas-container"}})])};i._withStripped=!0;var o=n(32),a=n(33),s={name:"CircleAnimation",mounted:function(){var e=this;setTimeout(function(){e.canvasInit(),e.mouseInteraction()},1e3)},beforeCreate:function(){document.body.className="underlayer"},methods:{canvasInit:function(){Object(o.a)("#define GLSLIFY 1\nvarying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n  gl_Position = vec4( position, 1.0 );\n}","// #pragma glslify: random = require(glsl-random)\n\n#ifdef GL_ES\nprecision highp float;\n#define GLSLIFY 1\n#endif\n\nuniform vec2 resolution;\nuniform float time;\n\nvoid main(void) {\n    vec2 st = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);\n\n    st.x += sin(st.y * time * 2000.0) * 0.05;\n\n    vec4 c = vec4(0.0,1.0,0.0,1.0);\n\n    if(pow(st.x,2.0) + pow(st.y,2.0) <= 0.5){\n        c = vec4(1.0);\n    }\n    gl_FragColor = c;\n}")},mouseInteraction:function(){var e=document.getElementsByClassName("single-component__arrow-inner");console.log(e);for(var t=0;t<e.length;t++)new a.a(e[t])}}},r=(n(71),n(1)),l=Object(r.a)(s,i,[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"single-component__info"},[t("h2",{staticClass:"single-component__title"},[this._v("Circle Rhythm Animation")]),t("p",{staticClass:"single-component__date"},[this._v("2019/07/03")]),t("p",{staticClass:"single-component__desc"},[this._v("一定のリズムを刻む円のアニメーション")])])}],!1,null,"16dc88a7",null);l.options.__file="src/components/pages/circle-animation/CircleAnimation.vue";t.default=l.exports}}]);