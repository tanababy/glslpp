<template>
  <div class="background-layer">
    <p class="glitch" data-text="Gallery">Gallery</p>
  </div>
</template>

<style lang="scss" scoped>
.background-layer {
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  min-width: 1280px;
}
.glitch{
  position: relative;
  color:white;
  font-size: 130px;
  font-family: 'Orbitron', sans-serif;
  position:relative;
  font-weight: bold;
}
@keyframes noise-anim{
  $steps:20;
  @for $i from 0 through $steps{
    #{ percentage($i*(1/$steps)) }{
      clip:rect(random(100)+px,9999px,random(100)+px,0);
    }
  }
}
.glitch:after{
  content:attr(data-text);
  position:absolute;
  left:2px;
  text-shadow:-1px 0 red;
  top:0;
  color:white;
  background:#050727;
  overflow:hidden;
  clip:rect(0,900px,0,0); 
  animation:noise-anim 2s infinite linear alternate-reverse;
}

@keyframes noise-anim-2{
  $steps:20;
  @for $i from 0 through $steps{
    #{percentage($i*(1/$steps))}{
      clip:rect(random(100)+px,9999px,random(100)+px,0);
    }
  }
}
.glitch:before{
  content:attr(data-text);
  position:absolute;
  left:-2px;
  text-shadow:1px 0 blue; 
  top:0;
  color:white;
  background:#050727;
  overflow:hidden;
  clip:rect(0,900px,0,0); 
  animation:noise-anim-2 3s infinite linear alternate-reverse;
}
</style>

<script>

export default {
  name: 'BackGround',
}
</script>