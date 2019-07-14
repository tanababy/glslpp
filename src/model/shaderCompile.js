
export let initShader = function(v_shader, f_shader, texture) {
  let container;
  let camera, scene, renderer;
  let uniforms;
  let vertexShader = v_shader;
  let fragmentShader = f_shader;
  let texturePath = texture;

  init(vertexShader,fragmentShader, texturePath);
  animate();
  
  function init(vertexShader,fragmentShader,texturePath) {
      container = document.getElementById( 'canvas-container' );
  
      camera = new THREE.Camera();
      camera.position.z = 1;
  
      scene = new THREE.Scene();
  
      var geometry = new THREE.PlaneBufferGeometry( 2, 2 );
  
      uniforms = {
          time: { type: "f", value: 1.0 },
          resolution: { type: "v2", value: new THREE.Vector2() },
          imageResolution: { type: 'v2', value: new THREE.Vector2(1280, 849)},
          u_mouse: { type: "v2", value: new THREE.Vector2() },
          // uTex: {type: "t", value: new THREE.TextureLoader().load('img/common/texture.jpg')},
          uTex: {type: "t", value: new THREE.TextureLoader().load(`${texturePath}`)}
      };
  
      var material = new THREE.ShaderMaterial( {
          uniforms: uniforms,
          vertexShader: vertexShader,
          fragmentShader: fragmentShader
      } );
  
      var mesh = new THREE.Mesh( geometry, material );
      scene.add( mesh );
  
      renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio( window.devicePixelRatio );
  
      container.appendChild( renderer.domElement );
  
      onWindowResize();
      // window.addEventListener( 'resize', onWindowResize, false );
  
      document.onmousemove = function(e){
        uniforms.u_mouse.value.x = e.pageX
        uniforms.u_mouse.value.y = e.pageY
      }
  }
  
  function onWindowResize( event ) {
      renderer.setSize( window.innerWidth, window.innerHeight );
      uniforms.resolution.value.x = renderer.domElement.width;
      uniforms.resolution.value.y = renderer.domElement.height;
  }
  
  function animate() {
      requestAnimationFrame( animate );
      render();
  }
  
  function render() {
      uniforms.time.value += 0.05;
      renderer.render( scene, camera );
  }
}