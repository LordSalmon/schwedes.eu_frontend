<template>
  <div class="flex flex-col justify-start items-center">
    <transition name="fade">
      <div class="mt-4 md:mt-12 flex justify-start items-center select-none" v-if="titleShown">
        <span class="text-2xl md:text-3xl text-gray-300">Dein Ansprechpartner für </span>
        <span class="ml-2 text-3xl text-gray-100 font-semibold">{{ getCurrentSloganText() }}</span>
        <span class="assignment-title-dash"></span>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "assignments",
  mounted() {
    setTimeout(() => {
      this.titleShown = true;
    }, 550);
    // @ts-ignore
    this.interval = setInterval(() => {
      if (this.isOuterTimeout) return;
      if (this.isInnerTimeout) return;
      this.isOuterTimeout = true;
      setTimeout(() => {
        if (!this.sloganObj.isGrowing && this.sloganObj.position === 0) {
          this.isInnerTimeout = true;
          setTimeout(() => {
            this.sloganObj.index = (this.sloganObj.index + 1) % this.slogans.length;
            this.sloganObj.position = 0;
            this.sloganObj.isGrowing = true;
            this.isInnerTimeout = false;
          }, 750);
        } else {
          if (this.sloganObj.position === this.slogans[this.sloganObj.index].length) {
            this.isInnerTimeout = true;
            setTimeout(() => {
              this.sloganObj.isGrowing = false;
              this.isInnerTimeout = false;
            }, 1000);
          }
          if (this.sloganObj.isGrowing) {
            this.sloganObj.position = Math.min(this.sloganObj.position + 1, this.slogans[this.sloganObj.index].length);
          } else {
            this.sloganObj.position = Math.max(0, this.sloganObj.position - 1);
          }
        }
        this.isOuterTimeout = false;
      }, (this.sloganObj.isGrowing ? 100 : 10) + Math.random() * 200);
    }, 50);
  },
  data() {
    return {
      interval: undefined,
      slogans: ["Frontend.", "Backend.", "Fullstack.", "Algorithmik."],
      sloganObj: {
        index: 0,
        isGrowing: true,
        position: 0,
      },
      isInnerTimeout: false,
      isOuterTimeout: false,
      titleShown: false,
    };
  },
  methods: {
    getCurrentSloganText(): string {
      return this.slogans[this.sloganObj.index]
        .toString()
        .substring(0, this.sloganObj.position);
    },
  },
});
</script>

<style scoped lang="scss">
.assignment-title-dash {
  animation: dash 1s infinite linear;
  width: 2px;
  height: 100%;
  @apply bg-gray-200;

}

@keyframes dash {
  0% {
    opacity: 0.3;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0.3;
  }
}
</style>
