<script>
export default {
  name: "TiConnection",

  props: {
    size: { type: [String, Number], default: 24 },
    color: { type: String, default: "currentColor" },
    stroke: { type: [String, Number], default: "0" },
    strokeColor: { type: String, default: "currentColor" }
  },
}
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-connection"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M-45.457 32.027l24.07-24.07 3.009 3.008-21.062 21.062 21.062 21.062-3.009 3.009-24.07-24.071z" fill-rule="nonzero"></path><path d="M32.096 30.055h12l-16 25.989 4-21.989h-12l16-26.016-4 22.016z"></path>
  </svg>
</template>