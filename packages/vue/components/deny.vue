<script>
export default {
  name: "TiDeny",

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
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-deny"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M32.266 7.951c13.246 0 24 10.754 24 24s-10.754 24-24 24-24-10.754-24-24 10.754-24 24-24zM16.65 19.416a19.942 19.942 0 00-4.411 12.535c0 11.053 8.974 20.027 20.027 20.027 4.743 0 9.102-1.652 12.534-4.411L16.65 19.416zm31.048 25.295a19.941 19.941 0 004.596-12.76c0-11.054-8.974-20.028-20.028-20.028a19.941 19.941 0 00-12.76 4.596l28.192 28.192z"></path>
  </svg>
</template>