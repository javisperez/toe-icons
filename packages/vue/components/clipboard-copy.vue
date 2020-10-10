<script>
export default {
  name: "TiClipboardCopy",

  props: {
    size: { type: [String, Number], default: 24 },
    color: { type: String, default: "currentColor" },
    stroke: { type: [String, Number], default: "0" },
    strokeColor: { type: String, default: "currentColor" }
  },
}
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-clipboard-copy"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M49.979 40l-.021 10.005A5.998 5.998 0 0143.963 56H15.974a5.997 5.997 0 01-5.995-5.995L10 18.535a5.997 5.997 0 015.995-5.995h4.479V12a1.013 1.013 0 011.016-1.016h5.59s.07-2.956 2.899-2.956 2.871 2.956 2.871 2.956h5.515c.561 0 1.016.455 1.016 1.016v.54h4.603a5.997 5.997 0 015.995 5.995v10.72h-3.998l-.001-9.726a2.991 2.991 0 00-2.989-2.989h-3.61v.973c0 .562-.455 1.016-1.016 1.016H21.49a1.016 1.016 0 01-1.016-1.016v-.973h-3.486a2.991 2.991 0 00-2.989 2.989l-.021 29.481a2.99 2.99 0 002.989 2.989H42.97a2.99 2.99 0 002.989-2.989L45.98 40h3.999zm-20-30.618a1.521 1.521 0 010 3.041 1.521 1.521 0 010-3.041z"></path><path fill-rule="nonzero" d="M18 23h13.5v2H18zM18 28.244h10.457v2H18zM17.979 33.488h8.02v2h-8.02zM18 38.731h10.457v2H18zM18 43.975h13.5v2H18zM54 32.484v4.006H34.891l7.413 7.413-2.832 2.832-12.246-12.246.001-.001-.001-.001 12.246-12.246 2.832 2.832-7.411 7.411H54z"></path>
  </svg>
</template>