<script>
export default {
  name: "TiPlusCircle",

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
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-plus-circle"
    :class="{'spin': spin}" :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M16.118 29.968h13.754V16.221h3.961v13.747h14.239v3.961H33.833v14.246h-3.961V33.929H16.118v-3.961z"></path><path d="M32.142 56.083c6.179-.059 12.297-2.619 16.696-6.966 5.225-5.164 7.916-12.803 6.978-20.096-1.609-12.499-11.883-20.98-23.828-20.98-9.075 0-17.896 5.677-21.765 13.909-2.961 6.302-2.967 13.911 0 20.225 3.842 8.174 12.517 13.821 21.61 13.908h.309zm-.283-4.003c-9.23-.089-17.841-7.227-19.553-16.378-1.208-6.452 1.071-13.433 5.818-18.015 5.543-5.35 14.253-7.143 21.496-4.11 6.481 2.714 11.331 9.014 12.225 15.955.766 5.949-1.369 12.184-5.565 16.48-3.68 3.767-8.841 6.016-14.164 6.068h-.257z" fill-rule="nonzero"></path>
  </svg>
</template>