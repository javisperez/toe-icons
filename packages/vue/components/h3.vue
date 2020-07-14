<script>
export default {
  name: "TiH3",

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
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-h3"
    :class="{'spin': spin}" :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <text x="41.386" y="51.71" font-family="&apos;Roboto-Medium&apos;,&apos;Roboto&apos;" font-weight="500" font-size="28.563">3</text><text x="3.379" y="51.989" font-family="&apos;Roboto-Regular&apos;,&apos;Roboto&apos;" font-size="56.228">H</text>
  </svg>
</template>