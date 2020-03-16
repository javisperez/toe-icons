<script>
export default {
  name: "TiWrenchHead",

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
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-wrench-head"
    :class="{'spin': spin}" :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M44.575 55.581L28.164 39.145s-8.462 2.97-15.352-3.931c-7.896-7.908-3.505-17.121-3.505-17.121s8.199 8.117 10.347 10.269c1.71 1.713 3.686 1.47 7.043-1.892 2.54-2.544 3.233-5.108 1.59-6.754A4792.264 4792.264 0 0017.94 9.447s9.763-4.66 17.508 3.097c6.884 6.894 4.282 15.017 4.122 15.178-.064.063 7.343 7.509 16.341 16.505L44.575 55.581z"></path>
  </svg>
</template>