<template>
  <div id="app">

    <Header />
    <transition>
      <router-view />
    </transition>

  </div>
</template>

<style lang="scss">
.v-leave-active {
  transition: opacity 500ms;
  transition-delay: 200ms;
}
.v-enter-active {
  transition: opacity 500ms;
  transition-delay: 1000ms;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>

<script>
import Header from './components/modules/Header';
import BackGround from './components/modules/BackGround';

export default {
  name: 'App',
  components: {
    Header,
    BackGround
  }
}
</script>