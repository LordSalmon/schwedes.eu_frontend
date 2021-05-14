<template>
  <transition name="route">
    <div class="flex flex-col justify-start items-center mt-16 md:mt-40">
    <div class="flex flex-col items-center justify-start">
      <transition name="fade">
            <span
              v-if="welcomeTextShown"
              class="text-5xl md:text-6xl text-gray-300 font-semibold select-none welcome-text duration-200"
            >Schwedes Solutions</span>
      </transition>
      <transition name="fade">
        <span v-if="subtitleShown" class="text-xl md:text-2xl text-gray-400 select-none mt-4 mb-20">Fündig geworden, ohne gesucht zu haben!</span>
      </transition>
    </div>
    <transition name="fade">
      <NuxtLink
        v-if="assignmentsButtonShown"
        to="/assignments"
        class="bg-blue-600 px-5 py-3 text-xl text-white rounded hover:bg-blue-500 active:bg-blue-700 duration-150 select-none"
      >
        <span>Zu den Aufträgen</span>
      </NuxtLink>
    </transition>
  </div>
  </transition>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      welcomeTextShown: false,
      subtitleShown: false,
      assignmentsButtonShown: false
    };
  },
  transition: "route",
  mounted() {
    setTimeout(() => {
      this.welcomeTextShown = true;
    }, 500);
    setTimeout(() => {
      this.subtitleShown = true;
    }, 1250);
    setTimeout(() => {
      this.assignmentsButtonShown = true;
    }, 1750);
  },
});
</script>

<style lang="scss" scoped>
</style>
