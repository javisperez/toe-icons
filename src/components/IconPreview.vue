<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "icon-preview",

  props: {
    type: {
      type: String,
      required: true
    },
    active: Boolean
  }
});
</script>

<template>
  <div
    class="icon-component bg-white p-4 border border-solid border-grey-lighter rounded-lg items-center hover:border-grey-darker"
  >
    <div class="flex items-center">
      <span :is="`ti-${type}`" size="24"></span>
      <span class="ml-2 font-bold">{{ type }}</span>
    </div>
  </div>
</template>
