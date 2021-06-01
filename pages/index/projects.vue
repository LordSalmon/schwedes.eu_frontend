<template>
<div class="flex justify-center items-start mt-4 md:mt-12">
  <div class="project-card">
      <span>RUNE - Smarthome</span>
  </div>
</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "projects.vue"
});
</script>

<style scoped lang="scss">
.project-card {
    @apply flex flex-col justify-start items-center box-border p-4 rounded bg-gray-300 bg-opacity-30;
}
</style>
