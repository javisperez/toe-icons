<script>
export default {
  name: "TiUnderline",

  props: {
    size: { type: [String, Number], default: 24 },
    color: { type: String, default: "currentColor" },
    stroke: { type: [String, Number], default: "0" },
    strokeColor: { type: String, default: "currentColor" }
  },
}
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-underline"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <text x="186.336" y="56" font-family="&apos;Roboto-Regular&apos;,&apos;Roboto&apos;" font-size="66.819" transform="matrix(.86016 0 0 .8634 -146.968 .71)">U</text><path d="M13.311 53.286H50.58v2.818H13.311z"></path>
  </svg>
</template>