<template>
  <div class="w-full h-full flex flex-col justify-start items-center select-none overflow-hidden">
    <div class="mt-24">
      <transition name="fade">
        <span v-if="credentialsTextShown" class="text-4xl font-semibold text-gray-200 block mb-12">Referenzen:</span>
      </transition>
    </div>
    <transition name="fade">
      <div class="credential-container w-full overflow-hidden relative" v-if="credentialsShown">
        <div class="background-fade w-full h-full">
          <div class="h-full w-full overflow-x-hidden overflow-y-auto flex justify-start flex-col items-center pb-40 pt-16">
            <Credential v-for="credential in credentials" :key="credential.id" :credential="credential"/>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {ICredential} from "~/logic/ICredential";

export default Vue.extend({
  name: "credentials",
  mounted() {
    setTimeout(() => {
      this.credentialsTextShown = true;
    }, 500);
    setTimeout(() => {
      this.credentialsShown = true;
    }, 1000);
  },
  data() {
    return {
      credentialsTextShown: false,
      credentialsShown: false,
      credentials: [
        {
          id: "tri",
          title: "Trilliun",
          subtitle: "Von Schülern für Schulen!",
          role: "Fullstack Entwickler",
          description: "Trilliun ist eine Lösung für Schulen, die die Finanzbewegungen ihrer Schüler zentralisiert einsehen und bearbeiten wollen.",
          url: "https://trilliun.eu",
        } as ICredential,
        {
          id: "tri2",
          title: "Trilliun",
          subtitle: "Von Schülern für Schulen!",
          role: "Fullstack Entwickler",
          description: "Trilliun ist eine Lösung für Schulen, die die Finanzbewegungen ihrer Schüler zentralisiert einsehen und bearbeiten wollen.",
          url: "https://trilliun.eu",
        } as ICredential,
        {
          id: "tri3",
          title: "Trilliun",
          subtitle: "Von Schülern für Schulen!",
          role: "Fullstack Entwickler",
          description: "Trilliun ist eine Lösung für Schulen, die die Finanzbewegungen ihrer Schüler zentralisiert einsehen und bearbeiten wollen.",
          url: "https://trilliun.eu",
        } as ICredential,
      ]
    };
  }
});
</script>

<style scoped lang="scss">
.background-fade {
  mask: linear-gradient(to bottom, black 80%, transparent 100%), linear-gradient(to top, transparent 95%, black 100%);
  mask-composite: exclude;
}

.credential-container {
  height: 100%;
}
</style>
