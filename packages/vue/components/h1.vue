<script>
export default {
  name: "TiH1",

  props: {
    size: { type: [String, Number], default: 24 },
    color: { type: String, default: "currentColor" },
    stroke: { type: [String, Number], default: "0" },
    strokeColor: { type: String, default: "currentColor" }
  },
}
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-h1"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <text x="45.014" y="52.058" font-family="&apos;Roboto-Medium&apos;,&apos;Roboto&apos;" font-weight="500" font-size="29.247">1</text><text x="3.429" y="52.058" font-family="&apos;Roboto-Regular&apos;,&apos;Roboto&apos;" font-size="56.228">H</text>
  </svg>
</template>