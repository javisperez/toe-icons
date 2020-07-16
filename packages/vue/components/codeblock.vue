<script>
export default {
  name: "TiCodeblock",

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
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-codeblock"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M50 56H14V19.162L17.778 23v29.167h28.444V11.852h-9.789L32.723 8 50 8.018V56z"></path><path d="M22.539 25.079L14 16.539 22.539 8l2.278 2.277-6.263 6.262 6.263 6.263-2.278 2.277zm15.592-8.54l-8.539 8.54-2.277-2.277 6.262-6.263-6.262-6.262L29.592 8l8.539 8.539z"></path>
  </svg>
</template>