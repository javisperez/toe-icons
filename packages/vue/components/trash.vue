<script>
export default {
  name: "TiTrash",

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
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-trash"
    :class="{'spin': spin}" :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <g fill-rule="nonzero"><path d="M19.186 16.493v-1.992c.043-3.346 2.865-6.296 6.277-6.427 3.072-.04 10.144-.04 13.216 0 3.346.129 6.233 3.012 6.277 6.427v1.992h9.106v4H49.62v29.11c-.043 3.348-2.865 6.296-6.278 6.428-7.462.095-14.926.002-22.39.002-3.396-.044-6.385-2.96-6.429-6.43v-29.11H10.08v-4h9.106zm26.434 4H18.521c-.014 9.72-.122 19.441.002 29.16.049 1.25 1.125 2.33 2.379 2.379a875.45 875.45 0 0022.338 0c1.273-.049 2.363-1.163 2.38-2.455V20.493zm-4.701-4c-.014-.83 0-1.973 0-1.973s-.059-2.418-2.343-2.447a723.348 723.348 0 00-13.01 0c-1.273.049-2.363 1.162-2.38 2.454v1.966h17.733z"></path><path d="M22.58 28.099h3v16.327h-3zM30.571 28.099h3v16.327h-3zM38.58 28.099h3v16.327h-3z"></path></g>
  </svg>
</template>