<script>
export default {
  name: "TiClipboardPaste",

  props: {
    size: { type: [String, Number], default: 24 },
    color: { type: String, default: "currentColor" },
    stroke: { type: [String, Number], default: "0" },
    strokeColor: { type: String, default: "currentColor" }
  },
}
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-clipboard-paste"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path fill-rule="nonzero" d="M33.523 31.226h16.87v2h-16.87zM33.508 36.47h16.87v2h-16.87zM33.523 41.714h16.87v2h-16.87zM33.523 46.958h16.87v2h-16.87z"></path><path d="M52.211 27.774H31.767v24.393h20.444V27.774zM55.99 56h-28V23.94h28V56z" fill-rule="nonzero"></path><g><path d="M26.278 56h-8.516a5.997 5.997 0 01-5.995-5.995l.021-31.47a5.997 5.997 0 015.995-5.995h4.48V12a1.017 1.017 0 011.016-1.016h5.589s.07-2.956 2.899-2.956 2.872 2.956 2.872 2.956h5.515c.561 0 1.016.455 1.016 1.016v.54h4.602a5.997 5.997 0 015.995 5.995l-.001 3.863h-3.998v-2.869a2.991 2.991 0 00-2.989-2.989H41.17v.973c0 .562-.455 1.016-1.016 1.016H23.279a1.015 1.015 0 01-1.016-1.016v-.973h-3.487a2.991 2.991 0 00-2.989 2.989l-.021 29.481a2.99 2.99 0 002.989 2.989h7.523V56zm5.489-46.618a1.521 1.521 0 11-1.52 1.521c0-.839.681-1.521 1.52-1.521z"></path></g>
  </svg>
</template>