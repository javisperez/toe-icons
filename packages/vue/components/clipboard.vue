<script>
export default {
  name: "TiClipboard",

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
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-clipboard"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M45.984 56h-27.99A5.997 5.997 0 0112 50.005l.02-31.47a5.997 5.997 0 015.996-5.995h4.48V12a1.017 1.017 0 011.016-1.016H29.1S29.17 8.028 32 8.028s2.872 2.956 2.872 2.956h5.515c.56 0 1.016.455 1.016 1.016v.54h4.602A5.997 5.997 0 0152 18.535l-.021 31.47A5.997 5.997 0 0145.984 56zm-.993-4.001a2.99 2.99 0 002.989-2.989L48 19.529a2.991 2.991 0 00-2.988-2.989h-3.61v.973c0 .562-.454 1.016-1.015 1.016H23.512a1.015 1.015 0 01-1.016-1.016v-.973h-3.487a2.991 2.991 0 00-2.99 2.989L16 49.01a2.99 2.99 0 002.989 2.989H44.99zM32 9.382a1.521 1.521 0 11-1.52 1.521c0-.839.68-1.521 1.52-1.521z"></path><path fill-rule="nonzero" d="M20 23H44v2H20zM20 28.244H44v2H20zM19.979 33.488H43.98v2H19.979zM20 38.731H44v2H20zM20 43.975H44v2H20z"></path>
  </svg>
</template>