<script>
export default {
  name: "TiSidebar",

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
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-sidebar"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M50.01 56.074H14.021a5.997 5.997 0 01-5.995-5.995V14.068a5.997 5.997 0 015.995-5.994H50.01a5.997 5.997 0 015.995 5.994v36.011a5.997 5.997 0 01-5.995 5.995zm-25.984-4v-40h-9.012a2.991 2.991 0 00-2.989 2.989v34.022a2.99 2.99 0 002.989 2.989h9.012zm24.991-40H28.026v40h20.991a2.99 2.99 0 002.989-2.989V15.063a2.991 2.991 0 00-2.989-2.989z"></path>
  </svg>
</template>