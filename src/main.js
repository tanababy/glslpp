// import TweenMax from "gsap/TweenMax";
// import ScrollToPlugin from "gsap/ScrollToPlugin";
// const plugins = [ScrollToPlugin];

import "./assets/_sass/style.scss";

// import $ from 'jquery';
// import * as THREE from 'three';
import Vue from 'vue';
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import imagesLoaded from 'imagesloaded';
import router from './router/router';
import App from './App';

const plugins = [ScrollToPlugin];

/*===================================================*/
/* Vue init
/*===================================================*/
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'UA-143697577-1',
  router
});
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

/*===================================================*/
/* Device Detect
/*===================================================*/
(() => {
  let ua = navigator.userAgent.toLowerCase();
  let ver = navigator.appVersion.toLowerCase();

  if (ua.indexOf('iphone') !== -1 || ua.indexOf('ipad') !== -1 || ua.indexOf('android') !== -1){
    TweenMax.set($('.smartphone-layer'), {
      display: 'block'
    });
    TweenMax.set($('.pc-layer'), {
      display: 'none'
    });
  } else {
    TweenMax.set($('.pc-layer'), {
      autoAlpha: 1
    });
  }

})();


/*===================================================*/
/* page loading animation
/*===================================================*/
let opening = () => {
  TweenMax.to($('.loading-layer'), .5, {
    autoAlpha: 0
  }).delay(1);
}
let showProgress = () => {

  let imagesLoadedObj = imagesLoaded("body");
  let imgTotal = imagesLoadedObj.images.length;
  let imgloadedItem = 0;
  let current = 0;

  imagesLoadedObj.on('progress', () => {
    imgloadedItem++;
  });

  let updateProgress = () => {
    let rate = (imgloadedItem / imgTotal);
    current += (rate - current) * 0.08;//減速率を掛け算する。値が小さいほどイーズアウトが強くなる

    $('.loading-layer__count').text(`${parseInt(current * 100)}`);

    //進捗度が100%以上
    if (current >= 1) {
      opening();
      return;
    }
    //イージングを使用すると100にならないためほぼ100なら100とする処理
    if (current > 0.99) {
      current = 1;
    }
    window.requestAnimationFrame(updateProgress);
  }

  window.requestAnimationFrame(updateProgress);
}
if ($('body').hasClass('top')) {
  TweenMax.to($('body'), 1.5, {
    autoAlpha: 1,
    onComplete: () => {
      showProgress();
    }
  });
} else {
  TweenMax.to($('.loading-layer'), .5, {
    autoAlpha: 0
  }).delay(1);
}

console.log(
  '%c Design, Development by Genius. → Yuki Tanabe (@yukitanabe6)',
  'padding: 7px 10px 7px 0px; background-color: #9b0808; color: #fff;',
);