<template>
  <div class="w-full h-full">
    <div
      class="w-full h-full flex flex-col justify-start items-center select-none overflow-hidden"
      v-if="$store.getters.canRender"
    >
      <div class="md:mt-12" :class="{'mt-0': $store.state.isNavbarExpanded, 'mt-8': $store.state.isNavbarExpanded}">
        <transition name="fade">
          <span v-if="credentialsTextShown" class="text-4xl font-semibold text-gray-200 block mb-4 md:mb-12">Referenzen:</span>
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
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Credential} from "~/logic/Credential";

export default Vue.extend({
  name: "credentials",
  mounted() {
    this.credentials.push(
      {
        title: "Trilliun",
        subtitle: "Von Schülern für Schulen",
        description: "Eine Lösung Schulen, um die Finanzbewegungen der Schüler zentral zu verwalten.",
        endedAt: new Date(),
        isActive: true,
        role: "Fullstack",
        showWeb: true,
        url: "https://trilliun.eu",
        startedAt: new Date()
      });
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
      credentials: new Array<Credential>(),
    };
  },
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
