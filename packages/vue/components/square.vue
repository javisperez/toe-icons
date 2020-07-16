<script>
export default {
  name: "TiSquare",

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
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-square"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M50.005 56H14.016a5.997 5.997 0 01-5.995-5.995V13.994a5.998 5.998 0 015.995-5.995h35.989A5.998 5.998 0 0156 13.994v36.011A5.997 5.997 0 0150.005 56zm-.993-4.001a2.99 2.99 0 002.989-2.989V14.989A2.99 2.99 0 0049.012 12H15.009a2.99 2.99 0 00-2.989 2.989V49.01a2.99 2.99 0 002.989 2.989h34.003z"></path>
  </svg>
</template>