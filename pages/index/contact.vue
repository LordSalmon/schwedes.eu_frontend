<template>
  <transition name="route">
    <div>
      <transition name="show">
        <div class="flex justify-start flex-col items-center" v-if="shown">
          <div class="mt-24 flex justify-center items-center mb-8">
            <span class="text-4xl font-semibold select-none">Kontakt:</span>
          </div>
          <div class="box-border p-4 bg-opacity-10 bg-gray-200 rounded">
            <div class="contact-element">
              <DInput label="Name:" v-model="name"/>
            </div>
            <div class="contact-element">
              <DInput label="Email:" v-model="email"/>
            </div>
            <div class="contact-element">
              <span class="mb-4">Nachricht:</span>
              <textarea class="default-text-area content" v-model="content"></textarea>
            </div>
            <div class="flex justify-center items-center py-4">
              <button class="send-button rounded px-4 py-2 bg-blue-600 duration-150 hover:bg-blue-500 active:bg-blue-700 select-none">
                <span>Abschicken</span>
              </button>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "contact.vue",
  mounted() {
    setTimeout(() => {
      this.shown = true;
    }, 50);
  },
  transition: "route",
  data() {
    return {
      name: "",
      email: "",
      content: "",
      shown: false,
    };
  },
});
</script>

<style scoped lang="scss">
.send-button {
  outline: 0;
}

.contact-element {
  @apply my-12 flex flex-col justify-start items-start;
}

.content {
  width: 30vw;
  height: 12vh;
  min-height: 2.5rem;
  max-height: 35vh;
}

.show-enter-active {
  transition: all 0.5s;
}

.show-enter {
  opacity: 0;
  transform: translateY(3rem);
}

.show-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>
