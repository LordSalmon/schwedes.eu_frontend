<template>
  <div class="credential">
    <div class="flex justify-between items-center">
        <span>{{credential.title}} - {{ credential.subtitle }}</span>
        <a :href="credential.url" target="_blank" class="fas fa-external-link-alt open-external-icon hover:text-blue-400 duration-150" title="Extern öffnen"></a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Credential} from "~/logic/Credential";

export default Vue.extend({
  name: "Credential",
  props: {
    credential: Object
  },
  data() {
    return {
      givenCredential: new Credential(this.credential)
    };
  }
});
</script>

<style scoped lang="scss">
.credential {
  @apply box-border p-4 rounded bg-gray-400 bg-opacity-50 mb-8;
  overflow: hidden;
  height: min-content;
  min-width: 30rem;
  max-width: 70%;
  width: max-content;
  -webkit-box-shadow: -9px 10px 28px -10px rgb(27, 29, 49);
  -moz-box-shadow: -9px 10px 28px -10px  rgb(27, 29, 49);
  box-shadow: -9px 10px 28px -10px  rgb(27, 29, 49);
}

.open-external-icon {
  text-decoration: none;
}
</style>
