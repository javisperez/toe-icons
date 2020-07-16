<script>
export default {
  name: "TiPaperShredder",

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
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-paper-shredder"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M50.11 16.042a5.997 5.997 0 015.995 5.995v12.01a5.997 5.997 0 01-5.995 5.995H14.121a5.997 5.997 0 01-5.995-5.995v-12.01a5.997 5.997 0 015.995-5.995H50.11zm-.993 4H15.114a2.991 2.991 0 00-2.989 2.989v10.022a2.99 2.99 0 002.989 2.989h34.003a2.99 2.99 0 002.989-2.989V23.031a2.991 2.991 0 00-2.989-2.989z"></path><path d="M20.106 30.043h2.996v-.001h4v.001h2.996v-.001h4v.001h2.997v-.001h4v.001h2.996v-.001h4v.001h.015v3.999h-.015v22h-4v-22h-2.996v22h-4v-22h-2.997v22h-4v-22h-2.996v22h-4v-22h-2.996v22h-4v-26h4v.001zM16.106 8.042h32v10.411h-4v-6.411h-24v6.411h-4V8.042z"></path>
  </svg>
</template>