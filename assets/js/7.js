(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{32:function(t,e,i){"use strict";i.d(e,"a",function(){return r});var n=i(12),s=i.n(n),o=i(13),a=i.n(o),r=function(){function t(e){var i=this;s()(this,t),this.DOM={el:e},this.DOM.tipIcon=this.DOM.el.firstElementChild,this.mousemoveFn=function(t){i.tilt(t)},this.mouseleaveFn=function(t){i.removeTilt(t)},this.initEvents()}return a()(t,[{key:"initEvents",value:function(){this.DOM.el.addEventListener("mousemove",this.mousemoveFn),this.DOM.el.addEventListener("mouseleave",this.mouseleaveFn)}},{key:"tilt",value:function(t){var e=function(t){var e=0,i=0,n=document.body.scrollLeft+document.documentElement.scrollLeft,s=document.body.scrollTop+document.documentElement.scrollTop;return t||(t=window.event),t.pageX||t.pageY?(e=t.pageX,i=t.pageY):(t.clientX||t.clientY)&&(e=t.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,i=t.clientY+document.body.scrollTop+document.documentElement.scrollTop),{x:e-n,y:i-s}}(t),i={x:[-20,20],y:[-20,20]},n=this.DOM.tipIcon.getBoundingClientRect();TweenMax.to(this.DOM.tipIcon,2,{ease:Expo.easeOut,x:(i.x[1]-i.x[0])/n.width*(e.x-(n.left+window.pageXOffset)+document.body.scrollLeft)+i.x[0],y:(i.y[1]-i.y[0])/n.height*(e.y-(n.top+window.pageYOffset)+document.body.scrollTop)+i.y[0]})}},{key:"removeTilt",value:function(){TweenMax.to(this.DOM.tipIcon,1,{ease:Elastic.easeOut.config(1,.4),x:0,y:0})}}]),t}()},35:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yMCAuNzU1bC0xNC4zNzQgMTEuMjQ1IDE0LjM3NCAxMS4yMTktLjYxOS43ODEtMTUuMzgxLTEyIDE1LjM5MS0xMiAuNjA5Ljc1NXoiLz48L3N2Zz4="},38:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik00IC43NTVsMTQuMzc0IDExLjI0NS0xNC4zNzQgMTEuMjE5LjYxOS43ODEgMTUuMzgxLTEyLTE1LjM5MS0xMi0uNjA5Ljc1NXoiLz48L3N2Zz4="},41:function(t,e,i){},77:function(t,e,i){"use strict";(function(t){i.d(e,"a",function(){return r});var n=i(12),s=i.n(n),o=i(13),a=i.n(o),r=function(){function e(i,n,o,a,r){var c=this;s()(this,e),this.DOM={},this.DOM.container=document.getElementById("canvas-container"),this.DOM.textElement=document.getElementById("text"),this.textRect,this.fixedAxis,this.meshInitOffsetY=0,this.geometry,this.material,this.camera=new t.Camera,this.light,this.scene=new t.Scene,this.mesh,this.loader=new t.TextureLoader,this.renderer=new t.WebGLRenderer,this.mouseP=new t.Vector2,this.scrollP=new t.Vector2,this.mousemoveFn=function(t){c.mouseCoordGet(t.clientX,t.clientY)},this.scrollFn=function(t){c.scrollPositionGet()},this.initDomEvents(),this.initThree()}return a()(e,[{key:"initDomEvents",value:function(){document.addEventListener("mousemove",this.mousemoveFn,!1),document.addEventListener("scroll",this.scrollFn,!1)}},{key:"mouseCoordGet",value:function(t,e){this.mouseP.x=t-window.innerWidth/2,this.mouseP.y=-e+window.innerHeight/2,this.light.position.x=this.mouseP.x,this.light.position.y=this.mouseP.y}},{key:"scrollPositionGet",value:function(){this.scrollP.x=window.pageXOffset,this.scrollP.y=window.pageYOffset}},{key:"initThree",value:function(){this.getDomRect(),this.domAxisToGl(),this.setCanvas(),this.setPixelRatio(),this.setCamera(),this.setLight(),this.setGeometry(),this.setMaterial(),this.addScene(),this.setCanvasSize(),this.renderTick()}},{key:"getDomRect",value:function(){this.textRect=this.DOM.textElement.getBoundingClientRect()}},{key:"domAxisToGl",value:function(){this.fixedAxis=new t.Vector2(this.textRect.x-window.innerWidth/2+this.textRect.width/2,this.textRect.y-window.innerHeight/2+this.textRect.height/2)}},{key:"setGeometry",value:function(){this.geometry=new t.BoxGeometry(this.textRect.width,this.textRect.height,300)}},{key:"setPixelRatio",value:function(){this.renderer.setPixelRatio(window.devicePixelRatio)}},{key:"setCanvas",value:function(){this.DOM.container.appendChild(this.renderer.domElement)}},{key:"setCanvasSize",value:function(){this.renderer.setSize(window.innerWidth,window.innerHeight)}},{key:"setCamera",value:function(){var e=Math.PI/180*30,i=window.innerHeight/2/Math.tan(e);this.camera=new t.PerspectiveCamera(60,window.innerWidth/window.innerHeight,1,2*i),this.camera.position.z=i,this.camera.lookAt(new t.Vector3(0,0,0));var n=new t.AxesHelper(i);this.scene.add(n)}},{key:"setLight",value:function(){this.light=new t.PointLight(64154),this.light.position.set(0,0,500)}},{key:"setMaterial",value:function(){this.material=new t.MeshLambertMaterial({color:16777215})}},{key:"addScene",value:function(){this.mesh=new t.Mesh(this.geometry,this.material),console.log(this.fixedAxis),this.mesh.position.set(this.fixedAxis.x,-(this.fixedAxis.y+this.scrollP.y),-150),this.meshInitOffsetY=this.mesh.position.y,this.scene.add(this.light),this.scene.add(this.mesh)}},{key:"renderTick",value:function(){this.renderer.render(this.scene,this.camera);this.textRect.right,this.textRect.left,this.textRect.bottom,this.textRect.top,this.textRect.left,this.renderer.domElement.clientHeight,this.textRect.bottom;this.mesh.position.y=this.meshInitOffsetY+this.scrollP.y,requestAnimationFrame(this.renderTick.bind(this))}}]),e}()}).call(this,i(34))},78:function(t,e,i){"use strict";var n=i(41);i.n(n).a},89:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"single-component"},[e("div",{staticClass:"single-component__arrow-left"},[e("router-link",{staticClass:"single-component__arrow-inner",attrs:{to:"/dragon-quest-gate"}},[e("img",{attrs:{src:i(35)}})])],1),e("div",{staticClass:"single-component__arrow-right"},[e("router-link",{staticClass:"single-component__arrow-inner",attrs:{to:"/hello-world"}},[e("img",{attrs:{src:i(38)}})])],1),e("div",{staticClass:"canvas-container",attrs:{id:"canvas-container"}}),this._m(0)])};n._withStripped=!0;var s=i(77),o=i(32),a={name:"DomWebgl",mounted:function(){var t=this;setTimeout(function(){t.canvasInit(),t.mouseInteraction()},1e3)},beforeCreate:function(){document.body.className="scroll"},methods:{canvasInit:function(){new s.a},mouseInteraction:function(){for(var t=document.getElementsByClassName("single-component__arrow-inner"),e=0;e<t.length;e++)new o.a(t[e])}}},r=(i(78),i(1)),c=Object(r.a)(a,n,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"scroll-container"},[e("p",{attrs:{id:"text"}},[this._v("Ozono Momoko,"),e("br"),this._v("adorable Japanese Girl."),e("br"),this._v("Nogizaka46"),e("br"),this._v("NEW CENTER!!")])])}],!1,null,"2f02681a",null);c.options.__file="src/components/pages/dom-webgl/DomWebgl.vue";e.default=c.exports}}]);