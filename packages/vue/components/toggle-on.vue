<script>
export default {
  name: "TiToggleOn",

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
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-toggle-on"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M25.022 17.099c2.715-.012 12.015.058 13.952 0 22.08-.662 22.961 30.643 0 30.023-3.488.015-12.792-.064-13.952 0-10.359.572-17.04-6.822-16.997-15.272.042-8.451 7.53-15.72 16.997-14.751zm7.882 15.011c.143-5.363-4.664-10.096-10.015-10.015-7.31.111-10.482 6.7-10.016 10.947.625 5.691 5.193 9.06 10.016 9.084 5.536.026 9.862-4.308 10.015-10.016z" fill-rule="nonzero"></path>
  </svg>
</template>