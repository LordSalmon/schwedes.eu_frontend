<template>
  <div class="w-full h-full">
    <div
      class="w-full h-full flex flex-col justify-start items-center select-none"
      v-if="$store.getters.canRender"
    >
      <div class="md:mt-12" :class="{'mt-0': $store.state.isNavbarExpanded, 'mt-8': $store.state.isNavbarExpanded}">
        <transition name="fade">
          <span v-if="credentialsTextShown" class="text-4xl font-semibold text-gray-200 block mb-4 md:mb-12">Referenzen:</span>
        </transition>
      </div>
      <transition name="fade">
        <div class="credential-container w-full h-full relative" v-if="credentialsShown">
          <div class="h-full w-full flex justify-start flex-col items-center pb-20 pt-16">
            <Credential v-for="credential in credentials" :key="credential.id" :credential="credential"/>
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
        description: "Eine Software-Lösung für Schulen, um die Finanzbewegungen der Schüler zentralisiert zu verwalten.",
        startedAt: new Date(2019, 1, 1),
        endedAt: new Date(),
        isActive: true,
        role: "Fullstack",
        showWeb: false,
        url: "https://trilliun.eu"
      });
    this.credentials.push(
      {
        title: "Physical Education Assistant",
        subtitle: "",
        description: "Erstelle Übungen, Trainingseinheiten und Schulstunden oder verwende von anderen bereitgestellte Vorlagen.",
        startedAt: new Date(2019, 1, 1),
        endedAt: new Date(),
        isActive: true,
        role: "Fullstack",
        showWeb: false,
        url: "https://pe-assistant.school"
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

.credential-container {
  height: 100%;
}
</style>
