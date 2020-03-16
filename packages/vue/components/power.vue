<script>
export default {
  name: "TiPower",

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
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-power"
    :class="{'spin': spin}" :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M34.056 9.886a2 2 0 00-4 0v24a2 2 0 004 0v-24z"></path><path d="M40 14.62c7.91 3.16 13.505 10.896 13.505 19.928 0 11.838-9.611 21.449-21.449 21.449-11.838 0-21.449-9.611-21.449-21.449 0-8.99 5.542-16.695 13.393-19.883v4.332c-5.616 2.918-9.456 8.789-9.456 15.551 0 9.665 7.847 17.512 17.512 17.512s17.512-7.847 17.512-17.512c0-6.806-3.891-12.711-9.568-15.608v-4.32z"></path>
  </svg>
</template>