<template>
  <div class="navbar" :style="{'h-96': $store.state.isNavbarExpanded, 'h-32': !$store.state.isNavbarExpanded}">
    <div class="flex w-full h-28 justify-end items-center box-border block md:hidden duration-200">
      <button class="menu-button" :class="{expanded: $store.state.isNavbarExpanded}" @click="toggleNavbarState()">
        <span class="menu-dash menu-1"></span>
        <span class="menu-dash menu-2"></span>
        <span class="menu-dash menu-3"></span>
      </button>
    </div>
    <transition name="navbar">
      <div class="navbar-buttons" v-if="$store.state.isNavbarExpanded">
        <NuxtLink to="/" class="navbar-element" @click.native="minimizeNavbar()">
          <span>Start</span>
        </NuxtLink>
        <NuxtLink to="/assignments" class="navbar-element" @click.native="minimizeNavbar()">
          <span>Aufträge</span>
        </NuxtLink>
        <NuxtLink to="/credentials" class="navbar-element" @click.native="minimizeNavbar()">
          <span>Referenzen</span>
        </NuxtLink>
        <NuxtLink to="/projects" class="navbar-element" @click.native="minimizeNavbar()">
          <span>Projekte</span>
        </NuxtLink>
        <NuxtLink to="/aboutme" class="navbar-element" @click.native="minimizeNavbar()">
          <span>Über mich</span>
        </NuxtLink>
        <div class="flex justify-center items-center">
          <NuxtLink
            to="/contact"
            class="navbar-contact px-3 py-1 rounded flex w-min justify-center items-center bg-blue-600 cursor-pointer hover:bg-blue-500 duration-150 active:bg-blue-700 select-none mt-4 md:mt-0"
            @click.native="minimizeNavbar()"
          >
            <span class="fas fa-paper-plane mr-3 text-xl"></span>
            <span class="text-xl">Kontakt</span>
          </NuxtLink>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: "Navbar",
  created() {
  },
  mounted() {
    this.currentSize = window.innerWidth;
    this.minimizeNavbar();
    window.addEventListener("resize", (event: any) => {
      if (event.path[0].innerWidth > 768) this.setNavbarState(true);
      if (event.path[0].innerWidth <= 768 && this.currentSize > 768) this.setNavbarState(false);
      this.currentSize = event.path[0].innerWidth;
    });
  },
  data() {
    return {
      currentSize: 0
    };
  },
  methods: {
    minimizeNavbar(): void {
      this.setNavbarState(this.currentSize > 768);
    },
    setNavbarState(val: boolean): void {
      this.$store.commit("setNavbarState", val);
    },
    toggleNavbarState(): void {
      this.$store.commit("setNavbarState", !this.$store.state.isNavbarExpanded);
    }
  }
})
</script>

<style lang="scss" scoped>
.navbar {
  @apply md:h-24 flex justify-start items-center md:justify-end flex-col box-border px-8;

  .navbar-buttons {
    @apply justify-start flex-col flex md:justify-end md:flex-row box-border text-white w-full h-full;

    .navbar-element {
      @apply flex justify-center items-center text-lg px-8 cursor-pointer duration-200 select-none h-12 h-full whitespace-nowrap py-4 md:py-0;

      &:hover {
        @apply text-xl;
      }
    }

  }
}

.expanded {
  justify-content: center;
  align-items: center;
  position: relative;
  width: max-content;

  .menu-1 {
    position: absolute;
    transform: rotate(45deg);
    top: 75%;
  }

  .menu-2 {
    position: absolute;
    opacity: 0;
  }

  .menu-3 {
    position: absolute;
    transform: rotate(-45deg);
    top: 75%;
  }
}

.menu-button {
  width: 2rem;
  height: 1.25rem;
  @apply flex flex-col justify-between items-center cursor-pointer;
  box-sizing: border-box;
  outline: 0;

  .menu-dash {
    height: 3px;
    border-radius: 2px;
    @apply w-full bg-gray-200 duration-200;
  }
}

.navbar-enter-active {
  transition: all 0.75s;
}

.navbar-leave-active {
  transition: all 0.5s;
}

.navbar-enter {
  transform: translateY(-100%);
  opacity: 0.25;
}

.navbar-enter-to {
  transform: translateY(0);
  opacity: 1;
}

.navbar-leave {
  transform: translateY(0);
  opacity: 1;
}

.navbar-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}

</style>
