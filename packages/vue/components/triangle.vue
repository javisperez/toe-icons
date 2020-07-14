<script>
export default {
  name: "TiTriangle",

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
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-triangle"
    :class="{'spin': spin}" :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M32.398 7.855c2.184.124 4 1.164 5.096 3.281L55.43 47.344c1.739 3.66-.953 8.585-5.372 8.656H13.939c-4.022-.065-7.323-4.631-5.353-8.697l18.271-36.206c.343-.65.499-.838.793-1.179 1.187-1.375 2.484-2.111 4.748-2.063zm-.294 3.997a2.033 2.033 0 00-1.659 1.017c-6.313 11.979-12.398 24.08-18.302 36.266-.545 1.225.391 2.797 1.763 2.864 12.06.195 24.124.194 36.185 0 1.325-.064 2.321-1.584 1.768-2.85-5.793-12.184-11.765-24.286-17.965-36.267-.367-.651-.903-1.042-1.79-1.03z" fill-rule="nonzero"></path>
  </svg>
</template>