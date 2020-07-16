<script>
export default {
  name: "TiCopy",

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
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-copy"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path fill-rule="nonzero" d="M30.75 22.753h18.593v2.993H30.75zM30.734 30.6h18.592v2.992H30.734zM30.75 38.446h18.593v2.993H30.75zM30.75 46.293h18.593v2.992H30.75z"></path><g><path fill-rule="nonzero" d="M16.005 16.019h6.281v2.993h-6.28zM16 23.866h6.28v2.992H16zM16.005 31.712h6.281v2.993h-6.28zM16.005 39.559h6.281v2.992h-6.28z"></path></g><g><path d="M52.222 19.852H27.778v32.315h24.444V19.852zM56 56H24V16.018h32V56z" fill-rule="nonzero"></path></g><path d="M40 14.406h-3.78v-2.555H11.78v32.315h10.63V48H8V8.018h32v6.388z" fill-rule="nonzero"></path>
  </svg>
</template>