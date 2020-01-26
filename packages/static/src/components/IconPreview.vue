<script>
export default {
  name: "icon-preview",

  props: {
    icon: {
      icon: String,
      required: true
    }
  }
};
</script>

<template>
  <div
    class="icon-component bg-white p-4 border border-solid border-gray-200 rounded-lg items-center hover:border-gray-700"
  >
    <div class="flex items-center">
      <span :is="`ti-${icon}`" size="24"></span>
      <span class="ml-2 font-bold">{{ icon }}</span>
    </div>
  </div>
</template>
