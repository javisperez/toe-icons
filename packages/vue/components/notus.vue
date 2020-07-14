<script>
export default {
  name: "TiNotus",

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
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-notus"
    :class="{'spin': spin}" :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M36 45.895L32 56l-4-10.105V8h8v37.895zM32 48l-2.745-1.457L32 53.478l2.745-6.935L32 48zm2.667-35.52h-1.8v33.597l1.8-.955V12.48zm-3.534 33.597V12.48h-1.8v32.642l1.8.955z"></path>
  </svg>
</template>