<template lang="pug">
.single-component
  ul.single-component__list
    li.single-component__list-item(data-img="../assets/img/distortion/texture1.jpg" data-disp="../assets/img/common/displacement/1.jpg" @mouseenter="hoverChangeTexture" @mouseleave="DispFactOut()") Shinjuku
    li.single-component__list-item(data-img="../assets/img/distortion/texture2.jpg" data-disp="../assets/img/common/displacement/2.jpg" @mouseenter="hoverChangeTexture" @mouseleave="DispFactOut()") Minato
    li.single-component__list-item(data-img="../assets/img/distortion/texture3.jpg" data-disp="../assets/img/common/displacement/3.jpg" @mouseenter="hoverChangeTexture" @mouseleave="DispFactOut()") Shibuya
  .single-component__arrow-right
    router-link(to="/dragon-quest-gate").single-component__arrow-inner
      img(src="../../../assets/img/common/arrow_right_white.svg")
  .single-component__info
    h2.single-component__title Distortion Effect
    p.single-component__date 2019/07/16
    p.single-component__desc 参考: <a href="https://tympanus.net/codrops/2018/04/10/webgl-distortion-hover-effects/" target="_blank">WebGL Distortion Hover Effects | Codrops</a>
      br
      | ディストーションエフェクト。"DragonQuestGate"と原理は同じで、テクスチャ座標を特定の計算式で歪ませる。
      br
      | その計算式では、dislayment画像というエフェクトを生み出す画像のテクスチャ座標を使用する。
      br
      | 表示したい画像のテクスチャと、黒一色のテクスチャの座標を線形補間し、canvasに表示させる。
      br
      | また、ホバー毎にテクスチャをthree.js側で入れ替えている。
  .canvas-container#canvas-container
</template>

<style lang="scss" scoped>
</style>

<script>
import vertexShader from './shaders/vertexShader.vert';
import fragmentShader from './shaders/fragmentShader.frag';
import initShader from "../../../model/shaderCompile";

import TiltInteraction from "../../../model/tiltArrow";

export default {
  name: 'Distortion',
  data() {
    return {
      activeArticle: '',
      threeCompile: ''
    }
  },
  mounted() {
    setTimeout(() => {
      this.canvasInit();
      this.mouseInteraction();
    }, 1000);
  },
  beforeCreate() {
    document.body.className = 'underlayer';
  },
  methods: {
    canvasInit() {
      this.threeCompile = new initShader(vertexShader,fragmentShader);
    },
    mouseInteraction(){
      let $tiltElement = document.getElementsByClassName("single-component__arrow-inner");
      for (let i = 0; i < $tiltElement.length; i++) {
        new TiltInteraction($tiltElement[i]);
      }
    },
    hoverChangeTexture(event){
      let texturePath1 = '../assets/img/common/black-canvas.jpg';
      let texturePath2 = event.currentTarget.getAttribute('data-img');
      let texturePath3 = event.currentTarget.getAttribute('data-disp');
      this.threeCompile.updateTexture(texturePath1,texturePath2,texturePath3);
      this.threeCompile.dispFactorIn();
    },
    DispFactIn(){},
    DispFactOut(){
      this.threeCompile.dispFactorOut();
    }
  }
}
</script>