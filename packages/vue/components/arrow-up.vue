<script>
export default {
  name: "TiArrowUp",

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
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-arrow-up"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M29.991 15.547l-7.413 7.413-2.832-2.832L31.992 7.882l.001.001.001-.001L44.24 20.128l-2.832 2.832-7.411-7.411v40.334h-4.006V15.547z"></path><path d="M29.991 15.547l-7.413 7.413-2.832-2.832L31.992 7.882h.002L44.24 20.128l-2.832 2.832-7.411-7.411v40.334h-4.006V15.547zm2.001-4.837l-9.418 9.418.004.004 5.999-5.999 3.414 1.414v38.336h.006V15.549l3.414-1.415 5.997 5.998.004-.004-9.418-9.418h-.002z"></path>
  </svg>
</template>