<script>
export default {
  name: "TiCircleSelected",

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
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-circle-selected"
    :class="{'spin': spin}" :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M32.142 56.043c6.18-.06 12.298-2.62 16.697-6.967 5.224-5.163 7.915-12.803 6.977-20.096C54.207 16.481 43.933 8 31.988 8c-9.075 0-17.896 5.677-21.764 13.91-2.962 6.302-2.968 13.91 0 20.224 3.84 8.174 12.517 13.821 21.61 13.909h.308zm-.283-4.004c-9.23-.089-17.841-7.226-19.553-16.377-1.207-6.452 1.071-13.434 5.818-18.016 5.543-5.35 14.253-7.142 21.496-4.11 6.48 2.714 11.331 9.014 12.225 15.955.766 5.95-1.37 12.185-5.565 16.48-3.68 3.767-8.84 6.017-14.163 6.068h-.258z" fill-rule="nonzero"></path><circle cx="543.992" cy="352" r="14.13" transform="translate(-620.995 -390.527) scale(1.20036)"></circle>
  </svg>
</template>