<script>
export default {
  name: "TiSidebarExpand",

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
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-sidebar-expand"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M50.008 56H14.019a5.997 5.997 0 01-5.995-5.995V13.994a5.998 5.998 0 015.995-5.995h35.989a5.998 5.998 0 015.995 5.995v36.011A5.997 5.997 0 0150.008 56zm-25.984-4.001V12h-9.012a2.99 2.99 0 00-2.989 2.989V49.01a2.99 2.99 0 002.989 2.989h9.012zM49.015 12H28.024v39.999h20.991a2.99 2.99 0 002.989-2.989V14.989A2.99 2.99 0 0049.015 12z"></path><path d="M16.024 38.774l6.828-6.828-6.828-6.829-2.829 2.829 4 4-4 4 2.829 2.828z"></path>
  </svg>
</template>