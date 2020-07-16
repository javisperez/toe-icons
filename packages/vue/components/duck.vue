<script>
export default {
  name: "TiDuck",

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
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-duck"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M17.406 25.591s2.059.83 1.986 2.891c-.072 2.062-6.66 2.957-6.66 11.094s9.096 14.532 19.217 14.532c10.12 0 23.872-5.932 23.872-17.83 0-19.976-1.513-6.134-17.276-6.134-5.235 0-6.169-1.787-5.342-2.806 3.91-4.811 5.342-17.446-7.42-17.446-8.327.173-10.338 6.946-10.325 8.587.008 1.153-1.204 1.543-7.308 1.308-1.536 5.619 9.256 5.804 9.256 5.804zm3.77-10.366a2 2 0 11-2 2c0-1.103.897-2 2-2z"></path>
  </svg>
</template>