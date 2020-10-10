<script>
export default {
  name: "TiPlus",

  props: {
    size: { type: [String, Number], default: 24 },
    color: { type: String, default: "currentColor" },
    stroke: { type: [String, Number], default: "0" },
    strokeColor: { type: String, default: "currentColor" }
  },
}
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-plus"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M30.034 29.948V7.965h3.741v21.983h22.203v3.741H33.775v22.203h-3.741V33.689H8.026v-3.741h22.008z"></path>
  </svg>
</template>