<script>
export default {
  name: "TiArrowRight",

  props: {
    size: { type: [String, Number], default: 24 },
    spin: { type: Boolean, default: false },
    color: { type: String, default: "currentColor" },
    stroke: { type: [String, Number], default: "0" },
    strokeColor: { type: String, default: "currentColor" }
  },
}
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-arrow-right"
    :class="{'spin': spin}" :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M48.337 29.881l-7.414-7.414 2.832-2.832 12.247 12.247v.002L43.755 44.13l-2.832-2.832 7.412-7.412H8v-4.005h40.337z"></path>
  </svg>
</template>