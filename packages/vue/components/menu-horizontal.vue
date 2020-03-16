<script>
export default {
  name: "TiMenuHorizontal",

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
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-menu-horizontal"
    :class="{'spin': spin}" :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M56.086 31.96c0 2.207-1.793 4-4 4-2.208 0-4-1.793-4-4 0-2.208 1.792-4 4-4 2.207 0 4 1.792 4 4zM16.086 31.96c0 2.207-1.793 4-4 4-2.208 0-4-1.793-4-4 0-2.208 1.792-4 4-4 2.207 0 4 1.792 4 4zM36.086 31.96c0 2.207-1.793 4-4 4-2.208 0-4-1.793-4-4 0-2.208 1.792-4 4-4 2.207 0 4 1.792 4 4z"></path><path d="M32.149 109.79L8.078 85.719l3.009-3.009 21.062 21.062L53.21 82.71l3.009 3.009-24.07 24.071z" fill-rule="nonzero"></path>
  </svg>
</template>