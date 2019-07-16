import Vue from 'vue';
import VueRouter from 'vue-router';
import Top from '../components/pages/top/Top';

const HelloWorld = () => import('../components/pages/hello-world/HelloWorld');
const About = () => import('../components/pages/about/About');
const CircleAnimation = () => import('../components/pages/circle-animation/CircleAnimation');
const DragonQuestGate = () => import('../components/pages/dragon-quest-gate/DragonQuestGate');
const Distortion = () => import('../components/pages/distortion/Distortion');

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Top,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/hello-world',
    component: HelloWorld,
  },
  {
    path: '/circle-animation',
    component: CircleAnimation,
  },
  {
    path: '/dragon-quest-gate',
    component: DragonQuestGate,
  },
  {
    path: '/distortion',
    component: Distortion,
  }
];

export default new VueRouter({
  mode: 'history',
  routes
});