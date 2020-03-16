<script>
export default {
  name: "TiListUl",

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
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-list-ul"
    :class="{'spin': spin}" :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <g fill-rule="nonzero"><path d="M12.016 12.164a3.977 3.977 0 00-3.983 3.983 3.977 3.977 0 003.983 3.982 3.977 3.977 0 003.982-3.982 3.976 3.976 0 00-3.982-3.983zM12.016 28.094a3.978 3.978 0 00-3.983 3.983 3.977 3.977 0 003.983 3.982 3.977 3.977 0 003.982-3.982 3.977 3.977 0 00-3.982-3.983zM12.016 44.024a3.978 3.978 0 00-3.983 3.983 3.994 3.994 0 003.983 3.982 3.994 3.994 0 003.982-3.982 3.977 3.977 0 00-3.982-3.983zM23.981 45.848h32.083v4.023H23.981zM23.981 13.997h32.083v3.984H23.981zM23.981 29.915h32.083v4H23.981z"></path></g>
  </svg>
</template>