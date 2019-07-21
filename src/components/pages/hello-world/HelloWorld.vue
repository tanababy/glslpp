<template lang="pug">
.single-component
  .single-component__arrow-left
    router-link(to="/circle-animation").single-component__arrow-inner
      img(src="../../../assets/img/common/arrow_left.svg")
  .single-component__info
    h2.single-component__title Hello World!!
    p.single-component__date 2019/06/23
    p.single-component__desc GLSL、Hello World! gl_FragCoordを正規化し、グラデーションを描いた。
  .canvas-container#canvas-container
</template>

<style lang="scss" scoped>
.single-component {
  color: white;
}
</style>

<script>
import vertexShader from './shaders/vertexShader.vert';
import fragmentShader from './shaders/fragmentShader.frag';
import initShader from "../../../model/shaderCompile";

import TiltInteraction from "../../../model/tiltArrow";

export default {
  name: 'HelloWorld',
  data() {
    return {
      activeArticle: '',
    }
  },
  mounted() {
    setTimeout(() => {
      document.body.className = 'underlayer';
      this.canvasInit();
      this.mouseInteraction();
    }, 1000);
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