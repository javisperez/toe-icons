<script>
export default {
  name: "TiHashtag",

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
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-hashtag"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M34.06 42.597h-7.391l-2.508 13.529h-5.544l2.508-13.529h-7.623v-5.214h8.613l1.914-10.328H16.01v-5.247h9.009l2.574-13.727h5.51L30.53 21.808h7.424l2.574-13.727h5.511l-2.574 13.727h6.864v5.247h-7.854l-1.914 10.328h7.293v5.214h-8.283l-2.508 13.529h-5.51l2.507-13.529zm-6.401-5.214h7.391l1.914-10.328h-7.391l-1.914 10.328z" fill-rule="nonzero"></path>
  </svg>
</template>