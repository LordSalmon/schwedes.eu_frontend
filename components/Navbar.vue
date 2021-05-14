<template>
  <div class="navbar">
    <div class="navbar-buttons">
      <NuxtLink to="/" class="navbar-element">
        <span>Start</span>
      </NuxtLink>
      <NuxtLink to="/assignments" class="navbar-element">
        <span>Aufträge</span>
      </NuxtLink>
      <NuxtLink to="/credentials" class="navbar-element">
        <span>Referenzen</span>
      </NuxtLink>
      <NuxtLink to="/projects" class="navbar-element">
        <span>Projekte</span>
      </NuxtLink>
      <NuxtLink to="/aboutme" class="navbar-element">
        <span>Über mich</span>
      </NuxtLink>
      <NuxtLink to="/contact" class="navbar-contact px-3 py-1 rounded flex justify-center items-center bg-blue-600 cursor-pointer hover:bg-blue-500 duration-150 active:bg-blue-700 select-none">
        <span class="fas fa-paper-plane mr-3 text-xl"></span>
        <span class="text-xl">Kontakt</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: "Navbar",
  data() {
    return {
      shown: true,
    };
  }
})
</script>

<style lang="scss" scoped>
.navbar {
  height: 8rem;

  .navbar-buttons {
    @apply flex justify-end items-center box-border px-8 text-white w-full h-full;
  }

  .navbar-contact {
    @apply ml-8;
  }
}

@media screen and (max-width: 875px) {
  .navbar {
    height: 20rem;

    .navbar-buttons {
      @apply mt-8 flex flex-col justify-start items-center box-border px-8 text-white h-full w-full;
      .navbar-element {
        @apply py-4;
      }

      .navbar-contact {
        @apply m-0 mt-4;
      }
    }
  }
}

.navbar-element {
  @apply text-lg px-8 cursor-pointer duration-200 select-none;
  &:hover {
    @apply text-xl;
  }
}
</style>
