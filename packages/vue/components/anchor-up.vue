<script>
export default {
  name: "TiAnchorUp",

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
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-anchor-up"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M109.01 32.025L84.939 7.954l-3.008 3.009 21.061 21.062-21.061 21.062 3.008 3.008 24.071-24.07zM32.16 18.778L8.089 42.849l3.009 3.009L32.16 24.796l21.062 21.062 3.009-3.009L32.16 18.778z" fill-rule="nonzero"></path>
  </svg>
</template>