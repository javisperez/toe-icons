<script>
export default {
  name: "TiVue",

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
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-vue"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M17.595 11.204h8.91l5.536 9.391 5.591-9.391h8.831L32.041 36.563 17.595 11.204z" fill="#435466"></path><path d="M8.089 11.204l23.952 41.845 24.126-41.845h-9.704L32.041 36.563 17.595 11.204H8.089z" fill="#4dba87"></path>
  </svg>
</template>