<template>
  <div class="login flex justify-center items-start">
    <div class="my-40 box-border p-4 bg-gray-200 rounded bg-opacity-10">
      <div class="flex justify-start items-center my-8">
        <DInput label="Email:" v-model="email" @enter="submit()" />
      </div>
      <div class="flex justify-start items-center my-8">
          <DInput label="Password:" v-model="password" type="password" @enter="submit()" />
      </div>
      <div class="flex justify-end items-center pt-2">
        <button class="submit-button px-3 py-1 rounded bg-blue-600 cursor-pointer duration-150 hover:bg-blue-500 active:bg-blue-700 select-none outline-none active:outline-none" ref="submit" @click="submit()">
          <span>Anmelden</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "login",
  mounted() {
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    submit(): void {
      console.log("clicked");
    }
  }
});
</script>

<style scoped lang="scss">
.submit-button {
  outline: 0;
}
</style>
