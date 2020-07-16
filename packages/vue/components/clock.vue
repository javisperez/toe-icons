<script>
export default {
  name: "TiClock",

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
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-clock"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M32.231 56.088c6.18-.06 12.298-2.62 16.697-6.967 5.225-5.163 7.916-12.803 6.977-20.096-1.609-12.499-11.883-20.98-23.828-20.98-9.075 0-17.896 5.677-21.764 13.909-2.962 6.303-2.967 13.911 0 20.225C14.154 50.353 22.83 56 31.923 56.088h.308zm-.283-4.004c-9.23-.089-17.841-7.226-19.553-16.377-1.207-6.452 1.072-13.434 5.818-18.016 5.543-5.35 14.254-7.142 21.496-4.109 6.481 2.713 11.331 9.013 12.225 15.954.766 5.95-1.369 12.185-5.565 16.48-3.68 3.767-8.841 6.017-14.163 6.068h-.258z" fill-rule="nonzero"></path><path d="M29.97 16.141h4v18h-4zM33.97 30.141h10v4h-10z"></path>
  </svg>
</template>