<template>
  <header class="header">
    <h1 class="header__logo">
      <router-link to="/">GLSL PP</router-link>
    </h1>
    <ul class="header__list">
      <li class="header__list-item">
        <router-link to="/about">ABOUT</router-link>
      </li>
    </ul>
  </header>
</template>

<style lang="scss" scoped>

.header {
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  min-width: 1280px;
  padding: 30px 40px 0;
  z-index: 10;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  mix-blend-mode: difference;

  &__list {
    font-family: 'Orbitron', sans-serif;
    font-size: 25px;
    letter-spacing: tracking(50);
  }

  &__logo {
    display: inline-block;
    font-family: 'Libre Barcode 128 Text', cursive;
    font-size: 50px;
    line-height: 1;
  }
}
</style>

<script>

export default {
  name: 'Header',
}
</script>