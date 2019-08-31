<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "icon-modal-tabs",

  props: {
    icon: String
  },

  methods: {
    isTabActive(tab: string): boolean {
      return this.$route.params.tab === tab;
    }
  }
});
</script>

<template>
  <div class="tabs">
    <router-link
      class="p-4 py-2 no-underline inline-flex items-center ml-6 rounded-t-lg text-sm"
      :class="{ 'text-grey hover:text-black': $route.params.tab }"
      exact-active-class="bg-grey-lightest text-black"
      :to="`/icons/${icon}`"
    >
      <TiHeart class="text-red" size="21" />Examples
    </router-link>

    <router-link
      class="p-4 py-2 no-underline inline-flex items-center rounded-t-lg text-sm ml-2"
      :class="{ 'text-grey hover:text-black': !isTabActive('usage') }"
      exact-active-class="bg-grey-lightest text-black"
      :to="`/icons/${icon}/usage`"
    >
      <TiWrench class="text-green-dark" size="21" />Usage
    </router-link>

    <router-link
      class="p-4 py-2 no-underline inline-flex items-center rounded-t-lg text-sm ml-2"
      :class="{ 'text-grey hover:text-black': !isTabActive('playground') }"
      exact-active-class="bg-grey-lightest text-black"
      :to="`/icons/${icon}/playground`"
    >
      <TiDuck class="text-blue" size="21" />Playground
    </router-link>
  </div>
</template>
