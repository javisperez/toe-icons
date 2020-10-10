<script>
export default {
  name: "TiArrowDown",

  props: {
    size: { type: [String, Number], default: 24 },
    color: { type: String, default: "currentColor" },
    stroke: { type: [String, Number], default: "0" },
    strokeColor: { type: String, default: "currentColor" }
  },
}
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-arrow-down"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M29.998 48.287l-7.413-7.414-2.832 2.832 12.246 12.247.001-.001.001.001 12.246-12.247-2.832-2.832-7.411 7.412V7.95h-4.006v40.337z"></path>
  </svg>
</template>