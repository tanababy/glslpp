<template lang="pug">
.single-component
  ul.single-component__list
    li.single-component__list-item#about(data-img="../assets/img/distortion/texture1.jpg" data-disp="../assets/img/common/displacement/1.jpg" @mouseenter="hoverChangeTexture" @mouseleave="DispFactOut()") ABOUT
    li.single-component__list-item#works(data-img="../assets/img/distortion/texture2.jpg" data-disp="../assets/img/common/displacement/2.jpg" @mouseenter="hoverChangeTexture" @mouseleave="DispFactOut()") WORKS
    li.single-component__list-item#recruit(data-img="../assets/img/distortion/texture3.jpg" data-disp="../assets/img/common/displacement/3.jpg" @mouseenter="hoverChangeTexture" @mouseleave="DispFactOut()") RECRUIT
  .single-component__arrow-right
    router-link(to="/circle-animation").single-component__arrow-inner
      img(src="../../../assets/img/common/arrow_right.svg").single-component__arrow-image
  .single-component__info
    h2.single-component__title Distortion Effect
    p.single-component__date 2019/07/16
    p.single-component__desc テストテストテスト
  .canvas-container#canvas-container
</template>

<style lang="scss" scoped>
.single-component {
  position: relative;
  width: 100vw;
  color: white;

  &__list {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 5vw;
    font-weight: bold;
    letter-spacing: tracking(100);
    color: aliceblue;
    // mix-blend-mode: color-dodge;
  }

  &__list-item {
    cursor: pointer;
    line-height: 1;

    &:nth-child(n+2) {
      margin-top: 5vh;
    }
  }

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