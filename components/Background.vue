<template>
  <div class="background">
    <div class="meteor-container">
      <div class="meteor"></div>
      <div class="meteor"></div>
      <div class="meteor"></div>
      <div class="meteor"></div>
      <div class="meteor"></div>
      <div class="meteor"></div>
      <div class="meteor"></div>
      <div class="meteor"></div>
      <div class="meteor"></div>
      <div class="meteor"></div>
      <div class="meteor"></div>
      <div class="meteor"></div>
      <div class="meteor"></div>
      <div class="meteor"></div>
      <div class="meteor"></div>
      <div class="meteor"></div>
      <div class="meteor"></div>
      <div class="meteor"></div>
      <div class="meteor"></div>
      <div class="meteor"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: "Background"
})
</script>


<style lang="scss" scoped>
.background {
  background: linear-gradient(to bottom, rgb(5, 2, 23) 0%, rgb(13, 15, 102) 100%);
}

@function random_range($min, $max) {
  $rand: random();
  $random_range: $min + floor($rand * (($max - $min)+1));
  @return $random_range;
}

.meteor-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 110%;
  height: 150%;
  transform: rotate(225deg) translateX(5vw);
  //background: rgba(255, 255, 255, 0.05);
}

.meteor {
  $star-count: 20;
  --star-color: rgb(12, 37, 45);
  --star-tail-length: 10em;
  --star-tail-height: 2px;
  --star-width: calc(var(--star-tail-length) / 5);
  --fall-duration: 9s;
  --tail-fade-duration: var(--fall-duration);
  --color: rgb(110, 141, 212);

  position: absolute;
  top: var(--top-offset);
  left: 100vh;
  width: var(--star-tail-length);
  height: var(--star-tail-height);
  color: var(--star-color);
  background: linear-gradient(45deg, var(--color), transparent);
  border-radius: 50%;
  filter: drop-shadow(0 0 6px var(--color));
  transform: translate3d(104em, 0, 0);
  animation: fall var(--fall-duration) var(--fall-delay) linear infinite, tail-fade var(--tail-fade-duration) var(--fall-delay) ease-out infinite;

/*  @include sp-layout {
    // For mobile performance, tail-fade animation will be removed QAQ
    animation: fall var(--fall-duration) var(--fall-delay) linear infinite;
  }*/

  @for $i from 1 through $star-count {
    &:nth-child(#{$i}) {
      --star-tail-length: #{random_range(500em, 750em) / 100};
      --top-offset: #{random_range(0vh, 130vh)};
      --fall-duration: #{random_range(6000, 12000s) / 1000};
      --fall-delay: #{random_range(0, 10000s) / 1000};
    }
  }

  &::before, &::after {
    position: absolute;
    content: '';
    top: 0;
    left: calc(var(--star-width) / -2);
    width: var(--star-width);
    height: 100%;
    --end-color: rgb(20, 148, 198);
    background: linear-gradient(45deg, transparent, var(--end-color), transparent);
    border-radius: inherit;
    animation: blink 2s linear infinite;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
}

@keyframes fall {
  to {
    transform: translate3d(-30em, 0, 0);
  }
}

@keyframes tail-fade {
  0%, 50% {
    width: var(--star-tail-length);
    opacity: 1;
  }

  70%, 80% {
    width: 0;
    opacity: 0.4;
  }

  100% {
    width: 0;
    opacity: 0;
  }
}

@keyframes blink {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
      opacity: 0;
  }
}
</style>
