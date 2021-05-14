<template>
   <div class="d-input">
      <div class="flex flex-col items-start justify-center z-20">
         <input
            :type="type"
            class="d-input-element"
            :value="value"
            @input="registerInput($event.target.value)"
            @focus="isFocused=true"
            @focusout="isFocused=false"
            @keypress.enter="$emit('enter')"
         />
         <span class="d-input-border"></span>
      </div>
      <span class="d-input-label" :class="{selected: value.length > 0 || isFocused}">{{ label }}</span>
   </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
   name: "DInput",
   mounted() {
      this.$emit("clicked", "jsakldjlks");
   },
   props: {
      label: String,
      value: {
         type: String,
         required: true,
         default: "",
      },
      type: {
         type: String,
         default: "text",
      },
   },
   data() {
      return {
         isFocused: false,
      };
   },
   methods: {
      registerInput(text: string): void {
         this.$emit("input", text);
         this.$emit("update:modelValue", text);
      },
      log(event: any) {
         console.log(event);
      },
   },
});
</script>


<style lang="scss" scoped>
.d-input {
   position: relative;

   .d-input-label {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      text-align: left;
      @apply text-gray-300 duration-300;
      user-select: none;
      z-index: 10;
      pointer-events: none;
      margin-left: 0.5rem;
   }

   .selected {
      transform: translateY(-1.25rem);
   }

   .d-input-element {
      background: transparent;
      border: 0;
      outline: 0;
      padding: 0.25rem 0.5rem;
   }

   .d-input-border {
      width: 100%;
      height: 2px;
      @apply bg-gray-500;
   }
}
</style>
