<script>
export default {
  name: "TiHalfCircle",

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
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-half-circle"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M32.076 7.963c-13.265 0-24.018 10.754-24.018 24.019C8.058 45.246 18.811 56 32.076 56v-4.013c-11.049 0-20.006-8.957-20.006-20.005 0-11.049 8.957-20.006 20.006-20.006V7.963z"></path>
  </svg>
</template>