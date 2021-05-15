<template>
  <div class="page-wrapper" :style="{'min-height': $store.state.appHeight, 'min-width': $store.state.appWidth}">
    <Background class="fixed top-0 left-0 w-screen h-full"/>
    <div class="default-wrapper fixed top-0 left-0 w-screen overflow-auto h-full">
      <Navbar/>
      <Nuxt/>
      <Footer/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Background from "~/components/Background.vue";
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";

export default Vue.extend({
  components: {Background, Footer, Navbar},
  head() {
    return {
      title: "Schwedes Solutions"
    }
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.$store.commit("setAppDimensions", window.innerWidth, window.innerHeight);
    });
    this.$store.commit("setAppDimensions", window.innerWidth, window.innerHeight);
  },
});
</script>

<style lang="scss">
@import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
@import "../assets/styles";

:root {
  @apply text-white;
}

.default-wrapper {
  display: grid;
  grid-template: "navbar" "router" "footer";
  grid-template-columns: 1fr;
  grid-template-rows: min-content 1fr min-content;
}
</style>
