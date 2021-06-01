<template>
   <div class="page-wrapper" :style="{'min-height': $store.state.appHeight, 'min-width': $store.state.appWidth}">
      <Background class="fixed top-0 left-0 w-screen h-full" />
      <div class="default-wrapper fixed top-0 left-0 w-screen overflow-hidden h-full">
         
      </div>
   </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

<style lang="scss" scoped>
@import "../../assets/styles";

.default-wrapper {
   color: white;
   display: grid;
   grid-template: "navbar" "load";
   grid-template-columns: 1fr;
   grid-template-rows: min-content 1fr;
}
</style>