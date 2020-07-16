<script>
export default {
  name: "ui-button",

  props: {
    variant: String,
    href: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <div
    class="ui-button px-4 py-2 rounded-lg flex text-base items-center"
    :class="[`ui-button-${variant}`, href ? 'ui-button-link' : '']"
  >
    <a
      :href="href"
      class="no-underline text-white flex text-base items-center"
      v-if="href"
    >
      <slot />
    </a>

    <slot v-else />
  </div>
</template>

<style scoped>
.ui-button,
.ui-button a {
  box-sizing: border-box;
}

.ui-button-primary {
  @apply .bg-blue-400 .text-white .cursor-pointer .font-bold;
}
.ui-button-primary:hover {
  @apply .bg-blue-700;
}

.ui-button-secondary {
  @apply .border-2 .border-gray-500 .border-solid .text-gray-500 .cursor-pointer .font-bold;
}
.ui-buton-secondary:hover {
  @apply .bg-gray-300 .text-black;
}
</style>
