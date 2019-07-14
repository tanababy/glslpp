<template>
<div class="about">
  <section class="about__cassette">
    <h2 class="about__title">PROFILE</h2>
    <p class="about__profile">
      I'm <span>Yuki Tanabe</span>, Front-end Developer, 25 years old,<br>
      I work for a Web creative production in Tokyo.<br>
      This site shows you the <span>challenge to brilliant Web Graphics.</span><br>
      OK, so here's thing:
    </p>
    <div class="about__giphy">
      <iframe src="https://giphy.com/embed/AEAikT8wFZwdhkCacK" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cbbc-genius-im-a-i-am-AEAikT8wFZwdhkCacK">via GIPHY</a></p>
    </div>
  </section>
  <section class="about__cassette">
    <h2 class="about__title">Qiita Log</h2>
    <ul class="about__list">
      <li v-for="article in articles" :key="article.id" class="about__list-item">
        <a :href="article.url" target="_blank">・ {{ article.title }} <span>(Good: {{ article.likes_count }})</span></a>
      </li>
    </ul>
  </section>
  <section class="about__cassette">
    <h2 class="about__title">GET IN TOUCH</h2>
    <ul class="about__links">
      <li class="about__links-item twitter">
        <a href="https://twitter.com/yukitanabe6" target="_blank">
          <img src="../../../assets/img/common/logo_twitter.svg" alt="">
        </a>
      </li>
      <li class="about__links-item github">
        <a href="https://github.com/tanababy" target="_blank">
          <img src="../../../assets/img/common/logo_github.svg" alt="">
        </a>
      </li>
    </ul>
  </section>
</div>
</template>

<style lang="scss" scoped>
.about {
  width: 1000px;
  margin: 0 auto;
  padding: 180px 0;
  color: white;
  font-family: 'Orbitron', sans-serif;

  &__giphy {
    position: relative;
    width: 400px;
    height: 0;
    padding-top: 250px;
    margin-top: 30px;

    iframe {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
    }
  }

  iframe + p {
    font-family: "Helvetica Neue", "Segoe UI", Helvetica, Verdana, Arial,sans-serif;
  }

  &__title {
    position: relative;
    font-size: 25px;
    letter-spacing: tracking(100);
    font-weight: bold;
    margin-bottom: 15px;
    line-height: 1;
    padding-left: 25px;

    &:before {
      position: absolute;
      top: -2px;
      left: 0;
      content: "";
      display: block;
      width: 12px;
      height: 100%;
      background-color: #fff;
    }
  }

  &__profile {
    font-size: 20px;
    letter-spacing: tracking(100);

    span {
      color: #2a872a;
      font-weight: bold;
    }
  }

  &__list {
    font-family: "Helvetica Neue", "Segoe UI", Helvetica, Verdana, Arial, "Yu Gothic Medium", "游ゴシック Medium", "游ゴシック体", YuGothic, Yu Gothic, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic ProN", "メイリオ", Meiryo, sans-serif;
    font-size: 16px;

    span {
      color: #2a872a;
      font-weight: bold;
    }

    a {
      transition: opacity 300ms;

      &:hover {
        opacity: .8;
      }
    }

    &-item {
      &:nth-of-type(n+2) {
        margin-top: 3px;
      }
    }
  }

  &__cassette {
    &:nth-child(n+2) {
      margin-top: 80px;
    }
  }

  &__links {
    display: flex;
    flex-wrap: wrap;
  }

  &__links-item {
    font-size: 0;

    a {
      display: block;
    }

    &.twitter {
      width: 75px;
    }

    &.github {
      width: 50px;
      margin-left: 20px;
      padding-top: 10px;
    }
  }
}
</style>

<script>
import axios from 'axios';
export default {
  name: 'About',
  data() {
    return {
      articles: []
    }
  },
  mounted() {
    axios.get(`https://qiita.com/api/v2/users/yukiTTT/items`)
      .then((res) => {
        this.articles = res.data;
      })
  },
  beforeCreate() {
    document.body.classList.remove("underlayer");
  },
  methods: {
  }
}
</script>