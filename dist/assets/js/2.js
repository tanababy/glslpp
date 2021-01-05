(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{32:function(e,t,i){"use strict";(function(e){i.d(t,"a",function(){return r});var n=i(12),s=i.n(n),o=i(13),a=i.n(o),r=function(){function t(i,n,o,a,r){var u=this;s()(this,t),this.DOM={},this.DOM.container=document.getElementById("canvas-container"),this.geometry,this.material,this.camera=new e.Camera,this.scene=new e.Scene,this.mesh,this.loader=new e.TextureLoader,this.renderer=new e.WebGLRenderer,this.vertexShader=i,this.fragmentShader=n,this.intensity=.5,this.speedIn=1.6,this.speedOut=1.2,this.easing=Expo.easeOut,this.texturePath1=o||null,this.texturePath2=a||null,this.texturePath3=r||null,this.texture1,this.texture2,this.texture3,this.uniforms={time:{type:"f",value:1},resolution:{type:"v2",value:new e.Vector2},imageResolution:{type:"v2",value:new e.Vector2(1280,849)},u_mouse:{type:"v2",value:new e.Vector2},u_texture1:{type:"t",value:this.texture1},u_texture2:{type:"t",value:this.texture2},u_texture3:{type:"t",value:this.texture3},effectFactor:{type:"f",value:this.intensity},dispFactor:{type:"f",value:0}},this.mousemoveFn=function(e){u.mouseCoordGet(e)},this.initDomEvents(),this.initThree()}return a()(t,[{key:"initDomEvents",value:function(){document.addEventListener("mousemove",this.mousemoveFn,!1)}},{key:"mouseCoordGet",value:function(e){this.uniforms.u_mouse.value.x=e.pageX,this.uniforms.u_mouse.value.y=e.pageY}},{key:"initThree",value:function(){this.setCanvas(),this.setPixelRatio(),this.setCamera(),this.setGeometry(),this.texturePath1&&(this.uniforms.u_texture1.value=this.textureLoad(this.texturePath1)),this.texturePath2&&(this.uniforms.u_texture2.value=this.textureLoad(this.texturePath2)),this.texturePath3&&(this.uniforms.u_texture3.value=this.textureLoad(this.texturePath3)),this.setShaderMaterial(this.vertexShader,this.fragmentShader),this.addScene(),this.setCanvasSize(),this.renderTick()}},{key:"textureLoad",value:function(t){var i;return(i=this.loader.load("".concat(t))).magFilter=e.LinearFilter,i.minFilter=e.LinearFilter,i.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),i}},{key:"updateTexture",value:function(e,t,i){var n=this;e&&this.loader.load("".concat(e),function(e){n.material.uniforms.u_texture1.value=e}),t&&this.loader.load("".concat(t),function(e){n.material.uniforms.u_texture2.value=e}),i&&this.loader.load("".concat(i),function(e){n.material.uniforms.u_texture3.value=e})}},{key:"dispFactorIn",value:function(){TweenMax.to(this.material.uniforms.dispFactor,this.speedIn,{value:1,ease:this.easing})}},{key:"dispFactorOut",value:function(){TweenMax.to(this.material.uniforms.dispFactor,this.speedOut,{value:0,ease:this.easing})}},{key:"setGeometry",value:function(){this.geometry=new e.PlaneBufferGeometry(2,2)}},{key:"setPixelRatio",value:function(){this.renderer.setPixelRatio(window.devicePixelRatio)}},{key:"setCanvas",value:function(){this.DOM.container.appendChild(this.renderer.domElement)}},{key:"setCanvasSize",value:function(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.uniforms.resolution.value.x=this.renderer.domElement.width,this.uniforms.resolution.value.y=this.renderer.domElement.height}},{key:"setCamera",value:function(){this.camera.position.z=1}},{key:"setShaderMaterial",value:function(t,i){this.material=new e.ShaderMaterial({uniforms:this.uniforms,vertexShader:t,fragmentShader:i,transparent:!0,opacity:1})}},{key:"addScene",value:function(){this.mesh=new e.Mesh(this.geometry,this.material),this.scene.add(this.mesh)}},{key:"renderTick",value:function(){this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.renderTick.bind(this)),this.uniforms.time.value+=.05}}]),t}()}).call(this,i(34))},33:function(e,t,i){"use strict";i.d(t,"a",function(){return r});var n=i(12),s=i.n(n),o=i(13),a=i.n(o),r=function(){function e(t){var i=this;s()(this,e),this.DOM={el:t},this.DOM.tipIcon=this.DOM.el.firstElementChild,this.mousemoveFn=function(e){i.tilt(e)},this.mouseleaveFn=function(e){i.removeTilt(e)},this.initEvents()}return a()(e,[{key:"initEvents",value:function(){this.DOM.el.addEventListener("mousemove",this.mousemoveFn),this.DOM.el.addEventListener("mouseleave",this.mouseleaveFn)}},{key:"tilt",value:function(e){var t=function(e){var t=0,i=0,n=document.body.scrollLeft+document.documentElement.scrollLeft,s=document.body.scrollTop+document.documentElement.scrollTop;return e||(e=window.event),e.pageX||e.pageY?(t=e.pageX,i=e.pageY):(e.clientX||e.clientY)&&(t=e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,i=e.clientY+document.body.scrollTop+document.documentElement.scrollTop),{x:t-n,y:i-s}}(e),i={x:[-20,20],y:[-20,20]},n=this.DOM.tipIcon.getBoundingClientRect();TweenMax.to(this.DOM.tipIcon,2,{ease:Expo.easeOut,x:(i.x[1]-i.x[0])/n.width*(t.x-(n.left+window.pageXOffset)+document.body.scrollLeft)+i.x[0],y:(i.y[1]-i.y[0])/n.height*(t.y-(n.top+window.pageYOffset)+document.body.scrollTop)+i.y[0]})}},{key:"removeTilt",value:function(){TweenMax.to(this.DOM.tipIcon,1,{ease:Elastic.easeOut.config(1,.4),x:0,y:0})}}]),e}()},35:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yMCAuNzU1bC0xNC4zNzQgMTEuMjQ1IDE0LjM3NCAxMS4yMTktLjYxOS43ODEtMTUuMzgxLTEyIDE1LjM5MS0xMiAuNjA5Ljc1NXoiLz48L3N2Zz4="},36:function(e,t,i){},48:function(e,t,i){"use strict";var n=i(36);i.n(n).a},75:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"single-component"},[t("div",{staticClass:"single-component__arrow-left"},[t("router-link",{staticClass:"single-component__arrow-inner",attrs:{to:"/circle-animation"}},[t("img",{attrs:{src:i(35)}})])],1),this._m(0),t("div",{staticClass:"canvas-container",attrs:{id:"canvas-container"}})])};n._withStripped=!0;var s=i(32),o=i(33),a={name:"HelloWorld",data:function(){return{activeArticle:""}},mounted:function(){var e=this;setTimeout(function(){document.body.className="underlayer",e.canvasInit(),e.mouseInteraction()},1e3)},methods:{canvasInit:function(){new s.a("varying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n  gl_Position = vec4( position, 1.0 );\n}","// #pragma glslify: random = require(glsl-random)\n\n#ifdef GL_ES\nprecision highp float;\n#endif\n\nuniform vec2 resolution;\n\nvoid main() {\n\tvec2 st = gl_FragCoord.xy/resolution;\n\tgl_FragColor = vec4(st.x,st.y,0.728,1.0);\n}")},mouseInteraction:function(){for(var e=document.getElementsByClassName("single-component__arrow-inner"),t=0;t<e.length;t++)new o.a(e[t])}}},r=(i(48),i(1)),u=Object(r.a)(a,n,[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"single-component__info"},[t("h2",{staticClass:"single-component__title"},[this._v("Hello World!!")]),t("p",{staticClass:"single-component__date"},[this._v("2019/06/23")]),t("p",{staticClass:"single-component__desc"},[this._v("GLSL、Hello World! gl_FragCoordを正規化し、グラデーションを描いた。")])])}],!1,null,"41492173",null);u.options.__file="src/components/pages/hello-world/HelloWorld.vue";t.default=u.exports}}]);