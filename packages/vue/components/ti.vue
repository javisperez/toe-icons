<script>
export default {
  name: "Ti",

  props: {
    icon: { type: String, required: true },
    size: { type: [String, Number], default: 24 },
    spin: { type: Boolean, default: false },
    color: { type: String, default: "currentColor" },
    stroke: { type: [String, Number], default: "0" },
    strokeColor: { type: String, default: "currentColor" }
  },
}
</script>
<template>
<svg
  :is="'ti-'+icon"
  :size="size"
  :stroke="stroke"
  :color="color"
  :stroke-color="strokeColor"
  :spin="spin" />
</template>