<script>
export default {
  name: "TiSuccess",

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
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-success"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M56.103 16.824L22.807 50.121 8.026 35.341l2.767-2.767 11.952 11.952 30.53-30.53 2.828 2.828z" fill-rule="nonzero"></path>
  </svg>
</template>