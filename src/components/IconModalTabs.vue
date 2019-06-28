<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "icon-modal-tabs",

  props: {
    icon: String
  },

  computed: {
    isPlayground(): boolean {
      return this.$route.params.tab === "playground";
    }
  }
});
</script>

<template>
  <div class="tabs">
    <router-link
      class="p-4 py-2 no-underline inline-flex items-center ml-6 rounded-t-lg text-sm"
      :class="{ 'text-cyan hover:text-cyan-dark': isPlayground }"
      exact-active-class="bg-grey-lightest text-black"
      :to="`/icons/${icon}`"
    >
      <TiInfoCircle size="21" class="mr-1" /> About
    </router-link>

    <router-link
      class="p-4 py-2 no-underline inline-flex items-center rounded-t-lg text-sm"
      :class="{ 'text-cyan hover:text-cyan-dark': !isPlayground }"
      exact-active-class="bg-grey-lightest text-black"
      :to="`/icons/${icon}/playground`"
    >
      <TiDuck size="21" class="mr-1" /> Playground
    </router-link>
  </div>
</template>
