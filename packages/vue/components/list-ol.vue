<script>
export default {
  name: "TiListOl",

  props: {
    size: { type: [String, Number], default: 24 },
    color: { type: String, default: "currentColor" },
    stroke: { type: [String, Number], default: "0" },
    strokeColor: { type: String, default: "currentColor" }
  },
}
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-list-ol"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path fill-rule="nonzero" d="M24.026 45.947h32.083v4.023H24.026zM23.985 14.034h32.083v4.023H23.985zM23.985 29.991h32.083v4.023H23.985z"></path><text x="6.594" y="22.369" font-family="&apos;Roboto-Black&apos;,&apos;Roboto&apos;" font-weight="900" font-size="17.67">1</text><text x="7.47" y="38.404" font-family="&apos;Roboto-Black&apos;,&apos;Roboto&apos;" font-weight="900" font-size="17.418">2</text><text x="7.598" y="54.739" font-family="&apos;Roboto-Black&apos;,&apos;Roboto&apos;" font-weight="900" font-size="18.343">3</text>
  </svg>
</template>