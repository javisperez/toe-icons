<script>
export default {
  name: "TiHr",

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
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-hr"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14.026 35.927h3.778v16.221h28.444V35.927h3.778v20.055h-36V35.927zm36-8h-3.778V11.833H17.804v16.094h-3.778V8h36v19.927z" fill-rule="nonzero"></path><path d="M8.026 30.131h47.955v3.72H8.026z"></path>
  </svg>
</template>