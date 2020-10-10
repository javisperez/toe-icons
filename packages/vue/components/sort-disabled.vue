<script>
export default {
  name: "TiSortDisabled",

  props: {
    size: { type: [String, Number], default: 24 },
    color: { type: String, default: "currentColor" },
    stroke: { type: [String, Number], default: "0" },
    strokeColor: { type: String, default: "currentColor" }
  },
}
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-sort-disabled"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M31.966 53.494L15.232 36.759l2.1-2.1L31.975 49.3 46.68 34.597l2.091 2.092-16.805 16.805zM32.034 10.506l16.734 16.735-2.1 2.1L32.025 14.7 17.32 29.403l-2.091-2.092 16.805-16.805z" style="opacity: 0.15" fill-rule="nonzero"></path>
  </svg>
</template>