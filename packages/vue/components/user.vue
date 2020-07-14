<script>
export default {
  name: "TiUser",

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
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-user"
    :class="{'spin': spin}" :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M31.625 32.4a12.186 12.186 0 01-12.21-12.21c0-6.763 5.447-12.211 12.21-12.211 6.763 0 12.21 5.448 12.21 12.21 0 6.763-5.447 12.21-12.21 12.21zm0-20.664a8.418 8.418 0 00-8.453 8.453 8.418 8.418 0 008.453 8.454 8.418 8.418 0 008.453-8.454 8.418 8.418 0 00-8.453-8.453zM15.096 47.24v8.782h-3.757V47.24c0-7.42 9.11-13.15 20.664-13.15 11.553 0 20.663 5.73 20.663 13.15v8.782H48.91V47.24c0-5.072-7.703-9.393-16.907-9.393-9.205 0-16.907 4.321-16.907 9.393z" fill-rule="nonzero"></path>
  </svg>
</template>