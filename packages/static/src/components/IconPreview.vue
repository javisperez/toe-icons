<script>
export default {
  name: "icon-preview",

  props: {
    icon: {
      icon: String,
      required: true,
    },
  },
};
</script>

<template>
  <div
    class="icon-component bg-white p-2 border border-solid border-gray-200 rounded-lg items-center hover:border-gray-700 flex items-center"
  >
    <component :is="`ti-${icon}`" size="24" />
    <span class="ml-2 font-bold">{{ icon }}</span>
  </div>
</template>

<style>
.icon-component:hover > .actions {
  opacity: 1;
}
</style>
