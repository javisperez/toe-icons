<script>
export default {
  name: "TiMenuVertical",

  props: {
    size: { type: [String, Number], default: 24 },
    color: { type: String, default: "currentColor" },
    stroke: { type: [String, Number], default: "0" },
    strokeColor: { type: String, default: "currentColor" }
  },
}
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-menu-vertical"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="32.026" cy="12.028" r="4"></circle><circle cx="32.026" cy="52.028" r="4"></circle><circle cx="32.026" cy="32.028" r="4"></circle>
  </svg>
</template>