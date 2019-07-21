<template>
<div class="layer">
  <BackGround />
  <div id="scroll-wrapper" class="scroll-wrapper">
    <ul class="gallery">
      <li class="gallery__cassette" v-for="article in articles" :key="article.id" @mouseenter="activeCheck(article)" @mouseleave="activeArticle=''">
        <router-link :to="{ path: article.path }">
          <div class="gallery__image">
            <span class="gallery__image-static">
              <img :src="article.pngThum" alt="">
            </span>
            <span class="gallery__image-gif" v-if="article == activeArticle">
              <img :src="article.gifThum" alt="">
            </span>
          </div>
          <div class="gallery__content">
            <p class="gallery__title">{{ article.title }}</p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</div>
</template>

<style lang="scss" scoped>
.scroll-wrapper {
  will-change: transform;
  width: 100%;
  top: 0;
  left: 0;
}
.gallery {
  box-sizing: border-box;
  padding-top: 95vh;
  padding-bottom: 30vh;
  width: 80vw;
  max-width: 1440px;
  min-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  perspective: 1000px;

  &__title {
    position: relative;
    font-size: 30px;
    margin-top: -20px;
    font-weight: bold;
    font-family: 'Orbitron', sans-serif;
    color: #fff;
    mix-blend-mode: exclusion;
  }

  &__cassette {
    width: 48%;

    &:nth-child(n+3) {
      margin-top: 5%;
    }
  }

  &__image {
    position: relative;

    &-gif {
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
    }
  }
}
</style>

<script>
import TiltInteraction from "../../../model/tilt";
import BackGround from '../../modules/BackGround';
import luxy from "luxy.js";

export default {
  name: 'Top',
  components: {
    BackGround
  },
  data() {
    return {
      articles: [
        {
          title: 'Distortion Hover Effect',
          pngThum: '../../../assets/img/distortion/article.png',
          gifThum: '../../../assets/img/distortion/article.gif',
          path: '/distortion'
        },
        {
          title: 'Dragon Quest Gate',
          pngThum: '../../../assets/img/dragon-quest-gate/article.png',
          gifThum: '../../../assets/img/dragon-quest-gate/article.gif',
          path: '/dragon-quest-gate'
        },
        {
          title: 'Circle Rhythm Animation',
          pngThum: '../../../assets/img/circle-animation/article.png',
          gifThum: '../../../assets/img/circle-animation/article.gif',
          path: '/circle-animation'
        },
        {
          title: 'Hello World!!',
          pngThum: '../../../assets/img/hello-world/article.png',
          gifThum: '../../../assets/img/hello-world/article.png',
          path: '/hello-world'
        }
      ],
      activeArticle: ''
    }
  },
  mounted(){
    this.mouseInteraction();
    this.scrollLuxy();
  },
  beforeCreate() {
    document.body.className = 'top';
  },
  methods: {
    activeCheck(article) {
      this.activeArticle = article;
    },
    mouseInteraction(){
      let $tiltElement = document.getElementsByClassName("gallery__cassette");
      for (let i = 0; i < $tiltElement.length; i++) {
          new TiltInteraction($tiltElement[i]);
      }
    },
    scrollLuxy(){
      luxy.init({
        wrapper: '#scroll-wrapper'
      });
    }
  }
}
</script>