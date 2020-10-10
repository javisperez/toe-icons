<script>
export default {
  name: "TiHighlighterHead2",

  props: {
    size: { type: [String, Number], default: 24 },
    color: { type: String, default: "currentColor" },
    stroke: { type: [String, Number], default: "0" },
    strokeColor: { type: String, default: "currentColor" }
  },
}
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-highlighter-head-2"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10.158 56.151a2.018 2.018 0 01-.645-.057c-1.24-.223-1.363-.999-1.458-1.659a1.764 1.764 0 01-.017-.229l-.003-.042L8 48.672c.017-.521.064-.862.586-1.427l16.089-15.434.007-3.346c.099-.75.155-.778.578-1.24L44.559 8h5.659L28.675 29.467v3.346l10.461 10.432h2.621L56 30.922l-.021 5.3L44 46.66c-.595.545-.644.552-1.414.585h-3.45l-8.261 8.37c-.603.47-.662.451-1.299.479l-19.418.057zm16.747-21.568l-14.9 14.9.013 2.668 16.717-.057 7.787-7.887-9.617-9.624z" fill-rule="nonzero"></path>
  </svg>
</template>