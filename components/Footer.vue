<template>
  <div class="footer box-border px-8 flex flex-col md:flex-row justify-start md:justify-between items-center mt-4 md:mt-0 mb-8 md:mb-0">
    <div class="flex justify-center md:justify-start items-center mb-6 md:mb-0 flex-wrap">
      <NuxtLink to="/imprint" class="footer-element">
        <span>> Impressum</span>
      </NuxtLink>
      <NuxtLink to="/privacy" class="footer-element">
        <span>> Datenschutz</span>
      </NuxtLink>
      <NuxtLink to="/i" class="footer-element">
      <span>> Internal</span>
      </NuxtLink>
      <NuxtLink to="/login" class="footer-element">
        <span>> Login</span>
      </NuxtLink>
    </div>
    <div class="flex justify-end items-center">
      <a :href="element.href" target="_blank" class="social-media-button" v-for="element of socialMedia" :key="element.title" :style="{'--color': element.color}">
        <span class="fab" :class="element.icon" :style="{color: element.color, 'font-size': element.fontSize}"></span>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Footer",
  data() {
    return {
      socialMedia: [
        {
          title: "Twitter",
          icon: "fa-twitter",
          color: "#1C9CEA",
          href: "https://twitter.com/LachsLord",
          fontSize: "1.25rem",
        },
        {
          title: "Linkedin",
          icon: "fa-linkedin",
          color: "#0A66C2",
          href: "https://www.linkedin.com/in/simon-schwedes-2367561b3/",
          fontSize: "1.25rem",
        },
        {
          title: "Discord",
          icon: "fa-discord",
          color: "#8899F7",
          href: "https://discord.gg/gPf47tcEuX",
          fontSize: "1.25rem",
        },
      ],
    };
  }
});
</script>

<style scoped lang="scss">

.footer {
  @apply h-28 md:h-32;
}

.social-media-button {
  @apply w-10 h-10 rounded mx-4 border-2 flex justify-center items-center duration-200;
  border-color: var(--color);
  span {
    @apply text-lg;
  }

  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0px 0px 10px 3px var(--color);
  }
}

.footer-element {
  @apply text-gray-400 cursor-pointer select-none duration-100 whitespace-nowrap w-1/3 md:w-min;
  margin: 0 2rem;
  &:first-child {
    margin: 0 2rem 0 0;
  }

  &:last-child {
    margin: 0 0 0 2rem;
  }

  &:hover {
    @apply underline text-gray-300;
  }
}
</style>
