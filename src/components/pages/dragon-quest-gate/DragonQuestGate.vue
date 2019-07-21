<template lang="pug">
.single-component
  .single-component__arrow-left
    router-link(to="/distortion").single-component__arrow-inner
      img(src="../../../assets/img/common/arrow_left_white.svg")
  .single-component__arrow-right
    router-link(to="/circle-animation").single-component__arrow-inner
      img(src="../../../assets/img/common/arrow_right_white.svg")
  .single-component__info
    h2.single-component__title Dragon Quest Gate
    p.single-component__date 2019/07/01
    p.single-component__desc 参考: <a href="https://ikeryou.hatenablog.com/entry/2019/06/13/192501" target="_blank">第12回 インタラ会 資料 - ikeryou / blog</a>
      br
      | gl_FragColorにテクスチャ座標の色情報を与えることで、canvas上に画像を表示させることができる。
      br
      | 座標を与える前に、座標を歪ませることによって、「ぐにゃぐにゃ」した効果を加えることができる。
      br
      | タイトルの由来は、「ドラゴンクエストモンスターズ テリーのワンダーランド」の旅の扉の演出に似ていることから。
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
  name: 'DragonQuestGate',
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
      let texturePath = '../assets/img/dragon-quest-gate/texture.jpg';
      new initShader(vertexShader,fragmentShader,texturePath);
    },
    mouseInteraction(){
      let $tiltElement = document.getElementsByClassName("single-component__arrow-inner");
      for (let i = 0; i < $tiltElement.length; i++) {
          new TiltInteraction($tiltElement[i]);
      }
    },
  }
}
</script>