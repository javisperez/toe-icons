<script>
export default {
  name: "TiInfoCircle",

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
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-info-circle"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M32.168 56.028c6.18-.06 12.297-2.62 16.697-6.967 5.224-5.163 7.915-12.803 6.977-20.096-1.609-12.499-11.883-20.98-23.828-20.98-9.075 0-17.896 5.677-21.764 13.909-2.962 6.303-2.968 13.911 0 20.225 3.841 8.174 12.517 13.821 21.61 13.909h.308zm-.283-4.004c-9.23-.089-17.841-7.227-19.553-16.378-1.207-6.452 1.071-13.433 5.818-18.015 5.543-5.35 14.253-7.142 21.496-4.11 6.481 2.714 11.331 9.014 12.225 15.955.766 5.949-1.369 12.185-5.565 16.48-3.68 3.767-8.841 6.017-14.163 6.068h-.258z" fill-rule="nonzero"></path><text x="27.829" y="44.028" font-family="&apos;Roboto-Medium&apos;,&apos;Roboto&apos;" font-weight="500" font-size="32.922">i</text>
  </svg>
</template>