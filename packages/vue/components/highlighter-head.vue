<script>
export default {
  name: "TiHighlighterHead",

  props: {
    size: { type: [String, Number], default: 24 },
    color: { type: String, default: "currentColor" },
    stroke: { type: [String, Number], default: "0" },
    strokeColor: { type: String, default: "currentColor" }
  },
}
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-highlighter-head"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M52.152 47.543v8.439h-4V48.42l-9.36-20.34H25.359l-9.285 20.337v7.565h-4v-8.435L22.788 24.08h18.567l10.797 23.463zM40.074 22.372h-16v-9.128l16-5.262v14.39z" fill-rule="nonzero"></path>
  </svg>
</template>