<script>
export default {
  name: "TiCircleChecked",

  props: {
    size: { type: [String, Number], default: 24 },
    color: { type: String, default: "currentColor" },
    stroke: { type: [String, Number], default: "0" },
    strokeColor: { type: String, default: "currentColor" }
  },
}
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-circle-checked"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M32.021 7.957c13.258 0 24.022 10.755 24.022 24 0 13.246-10.764 24-24.022 24C18.764 55.957 8 45.203 8 31.957c0-13.245 10.764-24 24.021-24zm15.73 14.815L25.123 45.38 16 36.264l2.767-2.764 6.295 6.29 19.86-19.843 2.829 2.825z"></path>
  </svg>
</template>