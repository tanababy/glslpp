export default class initShader {
  constructor(vertexShader,fragmentShader,texturePath1,texturePath2,texturePath3) {
    this.DOM = {};
    this.DOM.container = document.getElementById('canvas-container');
    this.geometry;
    this.material;
    this.camera = new THREE.Camera();
    this.scene = new THREE.Scene();
    this.mesh;
    this.loader = new THREE.TextureLoader();
    this.renderer = new THREE.WebGLRenderer();
    this.vertexShader = vertexShader;
    this.fragmentShader = fragmentShader;
    this.intensity = .5;
    this.speedIn = 1.6;
    this.speedOut = 1.2;
    this.easing = Expo.easeOut;
    this.texturePath1 = texturePath1 || null;
    this.texturePath2 = texturePath2 || null;
    this.texturePath3 = texturePath3 || null;
    this.texture1;
    this.texture2;
    this.texture3;
    this.uniforms = {
      time: { type: "f", value: 1.0 },
      resolution: { type: "v2", value: new THREE.Vector2() },
      imageResolution: { type: 'v2', value: new THREE.Vector2(1280, 849)},
      u_mouse: { type: "v2", value: new THREE.Vector2() },
      u_texture1: { type: "t", value: this.texture1 },
      u_texture2: { type: "t", value: this.texture2 },
      u_texture3: { type: "t", value: this.texture3 },
      effectFactor: { type: "f", value: this.intensity },
      dispFactor: { type: "f", value: 0.0 }
    };

    this.mousemoveFn = e => {
      this.mouseCoordGet(e);
    };

    this.initDomEvents();
    this.initThree();
  }

  initDomEvents() {
    document.addEventListener("mousemove", this.mousemoveFn, false);
  }

  mouseCoordGet(e) {
    this.uniforms.u_mouse.value.x = e.pageX;
    this.uniforms.u_mouse.value.y = e.pageY;
  }

  initThree() {//three.js開始
    this.setCanvas();
    this.setPixelRatio();
    this.setCamera();
    this.setGeometry();

    if (this.texturePath1) {
      this.uniforms.u_texture1.value = this.textureLoad(this.texturePath1);
    }
    if (this.texturePath2) {
      this.uniforms.u_texture2.value = this.textureLoad(this.texturePath2);
    }
    if (this.texturePath3) {
      this.uniforms.u_texture3.value = this.textureLoad(this.texturePath3);
    }
    this.setShaderMaterial(this.vertexShader, this.fragmentShader);
    this.addScene();
    this.setCanvasSize();

    this.renderTick();
  }

  textureLoad(texturePath) {
    let loadedTexture;
    loadedTexture = this.loader.load(`${texturePath}`);
    loadedTexture.magFilter = THREE.LinearFilter;//magFilter: テクスチャをどう拡大するか
    loadedTexture.minFilter = THREE.LinearFilter;//minFilter: テクスチャをどう縮小するか。
    loadedTexture.anisotropy = this.renderer.capabilities.getMaxAnisotropy();//あんまりよくわからない。遠くにあるテクスチャがぼけてしまうのを解消するらしい

    return loadedTexture;
  }

  updateTexture(texturePath1, texturePath2, texturePath3) {//テクスチャを更新する
    if (texturePath1) {
      this.loader.load(`${texturePath1}`, (tex) => {
        this.material.uniforms.u_texture1.value = tex;
      });
    }
    if (texturePath2) {
      this.loader.load(`${texturePath2}`, (tex) => {
        this.material.uniforms.u_texture2.value = tex;
      });
    }
    if (texturePath3) {
      this.loader.load(`${texturePath3}`, (tex) => {
        this.material.uniforms.u_texture3.value = tex;
      });
    }
  }

  dispFactorIn() {
    TweenMax.to(this.material.uniforms.dispFactor, this.speedIn, {
      value: 1,
      ease: this.easing
    });
  }

  dispFactorOut() {
    TweenMax.to(this.material.uniforms.dispFactor, this.speedOut, {
      value: 0,
      ease: this.easing
    });
  }

  setGeometry() {//ジオメトリ（形状）をセットする
    this.geometry = new THREE.PlaneBufferGeometry(2,2);
  }

  setPixelRatio() {
    this.renderer.setPixelRatio( window.devicePixelRatio );
  }

  setCanvas() {
    this.DOM.container.appendChild( this.renderer.domElement );
  }

  setCanvasSize() {//canvasを用意する
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    this.uniforms.resolution.value.x = this.renderer.domElement.width;
    this.uniforms.resolution.value.y = this.renderer.domElement.height;
  }

  setCamera() {//カメラをセット
    this.camera.position.z = 1;
  }

  setShaderMaterial(vertexShader, fragmentShader) {//マテリアル（素材）を用意する
    //色や質感の情報。今回はシェーダーに関する定義部分
    this.material = new THREE.ShaderMaterial( {
      uniforms: this.uniforms,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      transparent: true,
      opacity: 1.0
    });
  }

  addScene() {//メッシュ（表示オブジェクト）を作成し、シーンに追加する
    this.mesh = new THREE.Mesh( this.geometry, this.material );
    this.scene.add( this.mesh );
  }

  renderTick() {//レンダリング開始
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.renderTick.bind(this));

    this.uniforms.time.value += 0.05;
  }
}