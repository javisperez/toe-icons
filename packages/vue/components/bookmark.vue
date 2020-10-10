<script>
export default {
  name: "TiBookmark",

  props: {
    size: { type: [String, Number], default: 24 },
    color: { type: String, default: "currentColor" },
    stroke: { type: [String, Number], default: "0" },
    strokeColor: { type: String, default: "currentColor" }
  },
}
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-bookmark"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M44.076 55.982l-12-15.996-12 15.996V7.981h24v48.001zm-20-44.001v32.005l8.018-10.692 7.982 10.692V11.981h-16z" fill-rule="nonzero"></path>
  </svg>
</template>