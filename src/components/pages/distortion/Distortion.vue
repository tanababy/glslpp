<template lang="pug">
.single-component
  .single-component__arrow-right
    router-link(to="/circle-animation").single-component__arrow-inner
      img(src="../../../assets/img/common/arrow_right.svg").single-component__arrow-image
  .single-component__info
    h2.single-component__title Distortion Effect
    p.single-component__date 2019/07/16
    p.single-component__desc これはただの赤いcanvasかもしれないが、私にとってはGLSL学習の偉大な第一歩だ。
  .canvas-container#canvas-container
</template>

<style lang="scss" scoped>
.single-component {
  position: relative;
  width: 100vw;

  &__arrow-left,
  &__arrow-right {
    position: absolute;
    z-index: 3;
    top: 50%;
    transform: translateY(-50%);

    img {
      width: 35px;
    }
  }

  &__arrow-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 120px;
  }

  &__arrow-left {
    left: 0;
  }

  &__arrow-right {
    right: 0;
  }

  &__info {
    position: absolute;
    left: 20px;
    bottom: 20px;
  }

  &__title {
    font-family: 'Orbitron', sans-serif;
    font-weight: bold;
    font-size: 50px;
  }

  &__date {
    font-family: 'Orbitron', sans-serif;
    font-size: 25px;
  }

  &__desc {
    font-size: 16px;
  }
}
</style>

<script>
import vertexShader from './shaders/vertexShader.vert';
import fragmentShader from './shaders/fragmentShader.frag';
import { initShader } from "../../../model/shaderCompile";

import TiltInteraction from "../../../model/tiltArrow";

export default {
  name: 'Distortion',
  data() {
    return {
      activeArticle: '',
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
      let texturePath1 = '../assets/img/distortion/texture1.jpg';
      let texturePath2 = '../assets/img/distortion/texture2.jpg';
      let texturePath3 = '../assets/img/common/displacement/3.jpg';
      initShader(vertexShader,fragmentShader,texturePath1,texturePath2,texturePath3);
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