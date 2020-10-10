<script>
export default {
  name: "TiAnchorDown",

  props: {
    size: { type: [String, Number], default: 24 },
    color: { type: String, default: "currentColor" },
    stroke: { type: [String, Number], default: "0" },
    strokeColor: { type: String, default: "currentColor" }
  },
}
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-anchor-down"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M32.149 45.79L8.078 21.719l3.009-3.009 21.062 21.062L53.21 18.71l3.009 3.009-24.07 24.071z" fill-rule="nonzero"></path>
  </svg>
</template>