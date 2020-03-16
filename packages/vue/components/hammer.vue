<script>
export default {
  name: "TiHammer",

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
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-hammer"
    :class="{'spin': spin}" :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M30.651 23.538l25.24 24.346-6.577 6.577-23.969-25.617 5.306-5.306zm-7.208 3.403l5.306-5.305s-2.695-2.056-2.447-3.34c.248-1.285.809-3.1 4.711-4.711 3.903-1.611 7.543-1.757 7.543-1.757l.131-1.758s-8.969-1.356-13.707.327c-4.738 1.684-10.097 8.02-10.097 8.02s.935 3.064-.667 4.666c-1.601 1.601-3.754-.245-3.754-.245l-2.456 3.118 6.197 6.197 3.112-2.461s-1.472-2.207-.017-3.528c3.132-2.842 6.145.777 6.145.777z"></path>
  </svg>
</template>