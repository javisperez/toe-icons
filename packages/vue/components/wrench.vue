<script>
export default {
  name: "TiWrench",

  props: {
    size: { type: [String, Number], default: 24 },
    color: { type: String, default: "currentColor" },
    stroke: { type: [String, Number], default: "0" },
    strokeColor: { type: String, default: "currentColor" }
  },
}
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-wrench"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M-33.349 23.538l25.24 24.346-6.577 6.577-23.969-25.617 5.306-5.306zm-7.208 3.403l5.306-5.305s-2.695-2.056-2.447-3.34c.248-1.285.809-3.1 4.711-4.711 3.903-1.611 7.543-1.757 7.543-1.757l.131-1.758s-8.969-1.356-13.707.327c-4.738 1.684-10.097 8.02-10.097 8.02s.935 3.064-.667 4.666c-1.601 1.601-3.754-.245-3.754-.245l-2.456 3.118 6.197 6.197 3.112-2.461s-1.472-2.207-.017-3.528c3.132-2.842 6.145.777 6.145.777zM8.746 13.871s4.824 4.769 6.088 6.033c1.006 1.006 2.168.864 4.143-1.111 1.495-1.495 1.903-3.001.936-3.968-1.346-1.346-6.088-6.032-6.088-6.032s5.744-2.738 10.301 1.819c4.05 4.05 2.519 8.822 2.425 8.916-.094.095 28.089 28.089 28.089 28.089s2.941 3.215-.341 6.497c-2.987 2.987-6.37.213-6.37.213L19.841 26.238s-4.979 1.745-9.032-2.309c-4.646-4.645-2.063-10.058-2.063-10.058zm40.402 35.147c.894-.894 2.355-.885 3.26.021.905.905.915 2.366.021 3.26-.894.894-2.355.884-3.26-.021-.906-.905-.915-2.366-.021-3.26z"></path>
  </svg>
</template>