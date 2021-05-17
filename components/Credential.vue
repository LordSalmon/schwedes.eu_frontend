<template>
  <div class="credential">
    <div class="flex justify-between items-center mb-0 md:mb-2">
      <div class="flex justify-start items-center">
        <span class="font-semibold text-xl md:text-2xl text-gray-200 mr-4">{{givenCredential.title}}</span>
        <span class="font-semibold text-gray-300 text-lg md:text-xl">{{ givenCredential.subtitle }}</span>
      </div>
        <a :href="givenCredential.url" target="_blank" class="fas fa-external-link-alt open-external-icon hover:text-blue-400 duration-150" title="Extern öffnen"></a>
    </div>
    <div class="flex justify-start items-center text-lg md:text-xl mb-4">
      <span class="text-gray-300 font-semibold mr-4">Rolle:</span>
      <span class="text-yellow-500 font-semibold">{{ givenCredential.role }}</span>
    </div>
    <div class="mb-6">
      <p>{{ givenCredential.description }}</p>
    </div>
    <div class="w-full mb-4" v-if="givenCredential.showWeb">
      <iframe :src="givenCredential.url" class="bg-gray-200 rounded w-full h-60 md:h-80"></iframe>
    </div>
    <div class="flex justify-center items-center font-semibold">
      <span>{{ givenCredential.startedAt.getFullYear() }}</span>
      <span class="mx-2">-</span>
      <span v-if="givenCredential.isActive">Aktuell</span>
      <span v-else>{{ givenCredential.endedAt.getFullYear() }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Credential} from "~/logic/Credential";
import moment from "moment";

export default Vue.extend({
  name: "Credential",
  props: {
    credential: Object
  },
  data() {
    return {
      givenCredential: new Credential(this.credential)
    };
  },
  methods: {
  }
});
</script>

<style scoped lang="scss">
@import "assets/styles";

.credential {
  @apply box-border p-4 rounded bg-gray-400 bg-opacity-30 mb-8 w-9/10 md:w-1/2;
  @include boxShadow(-7px, 7px, 16px, -5px, black);
}

.open-external-icon {
  text-decoration: none;
}
</style>
