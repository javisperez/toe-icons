<script lang="ts">
import Vue, { PropType } from "vue";

type Variant = "primary" | "secondary";

export default Vue.extend({
  name: "ui-button",

  props: {
    variant: String as PropType<Variant>,
    href: {
      type: String,
      required: true
    }
  }
});
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
  @apply .bg-blue .text-white .cursor-pointer .font-bold;
}
.ui-button-primary:hover {
  @apply .bg-blue-dark;
}

.ui-button-secondary {
  @apply .border-2 .border-grey-dark .border-solid .text-grey-dark .cursor-pointer .font-bold;
}
.ui-buton-secondary:hover {
  @apply .bg-grey-lighter .text-black;
}
</style>
