
export let initShader = function(v_shader, f_shader, texture1, texture2, texture3) {
  let container;
  let camera, scene, renderer;
  let uniforms;
  let vertexShader = v_shader;
  let fragmentShader = f_shader;
  let texturePath1 = texture1;
  let texturePath2 = texture2;
  let texturePath3 = texture3;
  let intensity = 1;
  let speedIn = 1.6;
  let speedOut = 1.2;
  let easing = Expo.easeOut;

  init(vertexShader,fragmentShader, texturePath1,texturePath2,texturePath3);
  animate();

  function init(vertexShader,fragmentShader,texturePath1,texturePath2,texturePath3) {
    container = document.getElementById('canvas-container');

    camera = new THREE.Camera();
    camera.position.z = 1;

    scene = new THREE.Scene();

    let geometry = new THREE.PlaneBufferGeometry(2, 2);
    let loader = new THREE.TextureLoader();
    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio( window.devicePixelRatio );

    let texture_1;
    let texture_2;
    let texture_3;

      if (texturePath1) {
        texture_1 = loader.load(`${texturePath1}`);
        texture_1.magFilter = THREE.LinearFilter;//magFilter: テクスチャをどう拡大するか
        texture_1.minFilter = THREE.LinearFilter;//minFilter: テクスチャをどう縮小するか。
        texture_1.anisotropy = renderer.getMaxAnisotropy();//あんまりよくわからない。遠くにあるテクスチャがぼけてしまうのを解消するらしい
      }
      if (texturePath2) {
        texture_2 = loader.load(`${texturePath2}`);
        texture_2.magFilter = THREE.LinearFilter;//magFilter: テクスチャをどう拡大するか
        texture_2.minFilter = THREE.LinearFilter;//minFilter: テクスチャをどう縮小するか。
        texture_2.anisotropy = renderer.getMaxAnisotropy();//あんまりよくわからない。遠くにあるテクスチャがぼけてしまうのを解消するらしい
      }
      if (texturePath3) {
        texture_3 = loader.load(`${texturePath3}`);
        texture_3.wrapS = texture_3.wrapT = THREE.RepeatWrapping;//テクスチャーが縦横でリピートするようにする
      }
  
      uniforms = {
          time: { type: "f", value: 1.0 },
          resolution: { type: "v2", value: new THREE.Vector2() },
          imageResolution: { type: 'v2', value: new THREE.Vector2(1280, 849)},
          u_mouse: { type: "v2", value: new THREE.Vector2() },
          u_texture1: {type: "t", value: texture_1},
          u_texture2: {type: "t", value: texture_2},
          u_texture3: { type: "t", value: texture_3 },
          effectFactor: { type: "f", value: intensity },
          dispFactor: { type: "f", value: 0.0 }
      };
  
      var material = new THREE.ShaderMaterial( {
          uniforms: uniforms,
          vertexShader: vertexShader,
          fragmentShader: fragmentShader,
          transparent: true,
          opacity: 1.0
      } );
  
      var mesh = new THREE.Mesh( geometry, material );
      scene.add( mesh );
  
      container.appendChild( renderer.domElement );
  
      onWindowResize();
      // window.addEventListener( 'resize', onWindowResize, false );
  
      document.onmousemove = function(e){
        uniforms.u_mouse.value.x = e.pageX
        uniforms.u_mouse.value.y = e.pageY
      }
    
      container.addEventListener('mouseenter', function(e) {//場合分けしてるけど、要はPCの時はmouseenterと考えていい
        TweenMax.to(material.uniforms.dispFactor, speedIn, {
            value: 1,
            ease: easing
        });
      });

      container.addEventListener('mouseleave', function(e) {
        TweenMax.to(material.uniforms.dispFactor, speedOut, {
            value: 0,
            ease: easing
        });
      });
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