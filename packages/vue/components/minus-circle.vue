<script>
export default {
  name: "TiMinusCircle",

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
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-minus-circle"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M15.88 30.018h31.954v3.961H15.88z"></path><path d="M32.142 56.101c6.179-.059 12.297-2.619 16.696-6.967 5.225-5.163 7.916-12.803 6.978-20.096C54.207 16.54 43.933 8.059 31.988 8.059c-9.075 0-17.896 5.677-21.765 13.909-2.961 6.302-2.967 13.911 0 20.224 3.842 8.174 12.517 13.821 21.61 13.909h.309zm-.283-4.004c-9.23-.089-17.841-7.226-19.553-16.377-1.208-6.452 1.071-13.434 5.818-18.015 5.543-5.35 14.253-7.143 21.496-4.11 6.481 2.714 11.331 9.013 12.225 15.955.766 5.949-1.369 12.184-5.565 16.479-3.68 3.767-8.841 6.017-14.164 6.068h-.257z" fill-rule="nonzero"></path>
  </svg>
</template>