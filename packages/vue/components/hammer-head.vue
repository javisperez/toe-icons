<script>
export default {
  name: "TiHammerHead",

  props: {
    size: { type: [String, Number], default: 24 },
    color: { type: String, default: "currentColor" },
    stroke: { type: [String, Number], default: "0" },
    strokeColor: { type: String, default: "currentColor" }
  },
}
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-hammer-head"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M55.821 44.743a988.23 988.23 0 01-8.547 8.764L33.991 39.31l7.953-7.953 13.877 13.386zm-24.682-8.284l7.953-7.953s-4.039-3.082-3.667-5.007c.372-1.925 1.212-4.647 7.062-7.062 5.849-2.414 11.306-2.632 11.306-2.632l.196-2.637s-13.444-2.031-20.546.492c-7.102 2.523-15.135 12.021-15.135 12.021s1.401 4.593-.999 6.994c-2.401 2.401-5.628-.367-5.628-.367L8 34.982l9.289 9.288 4.665-3.689s-2.208-3.307-.026-5.287c4.695-4.261 9.211 1.165 9.211 1.165z"></path>
  </svg>
</template>