<script>
export default {
  name: "TiHamburger2",

  props: {
    size: { type: [String, Number], default: 24 },
    color: { type: String, default: "currentColor" },
    stroke: { type: [String, Number], default: "0" },
    strokeColor: { type: String, default: "currentColor" }
  },
}
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-hamburger-2"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path fill-rule="nonzero" d="M7.971 43.925h16.031v5.992H7.972zM8.18 29.004h31.822v5.992H8.181zM8.18 14.082h47.822v5.992H8.181z"></path>
  </svg>
</template>