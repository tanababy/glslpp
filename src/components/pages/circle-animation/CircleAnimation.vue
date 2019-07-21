<template lang="pug">
.single-component
  .single-component__arrow-left
    router-link(to="/dragon-quest-gate").single-component__arrow-inner
      img(src="../../../assets/img/common/arrow_left.svg")
  .single-component__arrow-right
    router-link(to="/hello-world").single-component__arrow-inner
      img(src="../../../assets/img/common/arrow_right.svg")
  .single-component__info
    h2.single-component__title Circle Rhythm Animation
    p.single-component__date 2019/07/03
    p.single-component__desc 参考: <a href="https://docs.google.com/presentation/d/1NMhx4HWuNZsjNRRlaFOu2ysjo04NgcpFlEhzodE8Rlg/" target="_blank">楽しい！Unityシェーダー お絵描き入門！</a>より。
      br
      | 三つの円を描いた。x座標を、特定の計算を施したy座標で歪ませる。
      br
      | 三角関数に経過時間を渡すことで一定リズムのアニメーションをしている。
  .canvas-container#canvas-container
</template>

<style lang="scss" scoped>
.single-component {
  color: #b2adad;
}
</style>

<script>
import vertexShader from './shaders/vertexShader.vert';
import fragmentShader from './shaders/fragmentShader.frag';
import initShader from "../../../model/shaderCompile";

import TiltInteraction from "../../../model/tiltArrow";

export default {
  name: 'CircleAnimation',
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
      new initShader(vertexShader,fragmentShader);
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