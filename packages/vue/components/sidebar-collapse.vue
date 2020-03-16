<script>
export default {
  name: "TiSidebarCollapse",

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
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-sidebar-collapse"
    :class="{'spin': spin}" :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M49.984 56H13.995A5.997 5.997 0 018 50.005V13.994a5.998 5.998 0 015.995-5.995h35.989a5.998 5.998 0 015.995 5.995v36.011A5.997 5.997 0 0149.984 56zM24 51.999V12h-9.012a2.99 2.99 0 00-2.989 2.989V49.01a2.99 2.99 0 002.989 2.989H24zM48.991 12H28v39.999h20.991a2.99 2.99 0 002.989-2.989V14.989A2.99 2.99 0 0048.991 12z"></path><path d="M19.999 38.774l-6.828-6.828 6.828-6.829 2.829 2.829-4 4 4 4-2.829 2.828z"></path>
  </svg>
</template>