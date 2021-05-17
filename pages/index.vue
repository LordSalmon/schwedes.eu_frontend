<template>
  <div class="page-wrapper" :style="{'min-height': $store.state.appHeight, 'min-width': $store.state.appWidth}">
    <Background class="fixed top-0 left-0 w-screen h-full"/>
    <div class="default-wrapper fixed top-0 left-0 w-screen overflow-hidden h-full">
      <Navbar class="navbar"/>
      <div class="load-wrapper overflow-auto">
        <Nuxt class="nuxt"/>
        <Footer class="footer"/>
      </div>
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
      this.$store.commit("setAppDimensions", {width: window.innerWidth, height: window.innerHeight});
    });
    this.$store.commit("setAppDimensions", {width: window.innerWidth, height: window.innerHeight});
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
  grid-template: "navbar" "load";
  grid-template-columns: 1fr;
  grid-template-rows: min-content 1fr;
}

.navbar {
  grid-area: navbar;
}

.load-wrapper {
  grid-area: load;
  display: grid;
  grid-template: "router" "footer";
  grid-template-columns: 1fr;
  grid-template-rows: 1fr min-content;
}

.nuxt {
  grid-area: router;
}

.footer {
  grid-area: footer;
}
</style>
