<script>
export default {
  name: "TiCode",

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
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-code"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M25.027 49.084L8.057 32.113l16.97-16.97 2.829 2.828-14.143 14.142 14.143 14.142-2.829 2.829zm30.986-16.971l-16.97 16.971-2.829-2.829 14.142-14.142-14.142-14.142 2.829-2.828 16.97 16.97z"></path>
  </svg>
</template>