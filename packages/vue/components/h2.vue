<script>
export default {
  name: "TiH2",

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
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-h2"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <text x="41.412" y="52.058" font-family="&apos;Roboto-Medium&apos;,&apos;Roboto&apos;" font-weight="500" font-size="27.4">2</text><text x="3.386" y="52.058" font-family="&apos;Roboto-Regular&apos;,&apos;Roboto&apos;" font-size="56.228">H</text>
  </svg>
</template>