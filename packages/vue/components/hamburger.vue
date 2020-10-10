<script>
export default {
  name: "TiHamburger",

  props: {
    size: { type: [String, Number], default: 24 },
    color: { type: String, default: "currentColor" },
    stroke: { type: [String, Number], default: "0" },
    strokeColor: { type: String, default: "currentColor" }
  },
}
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-hamburger"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path fill-rule="nonzero" d="M8.002 43.851h47.822v5.992H8.002zM8.212 28.93h47.821v5.992H8.212zM8.212 14.008h47.821V20H8.212z"></path>
  </svg>
</template>