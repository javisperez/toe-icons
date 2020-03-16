<script>
export default {
  name: "TiListTask",

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
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-list-task"
    :class="{'spin': spin}" :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14.563 17.167l7.468-7.468 2.61 2.61-10.107 10.107-6.359-6.358 2.64-2.64 3.748 3.749zm41.456.806H28.026v-3.969h27.993v3.969z"></path><path d="M14.563 17.167l7.468-7.468 2.61 2.61-10.107 10.107-6.359-6.358 2.64-2.64 3.748 3.749zm41.456.806H28.026v-3.969h27.993v3.969zM14.563 49.167l7.468-7.468 2.61 2.61-10.107 10.107-6.359-6.358 2.64-2.64 3.748 3.749zm41.456.806H28.026v-3.969h27.993v3.969z"></path><path d="M14.563 49.167l7.468-7.468 2.61 2.61-10.107 10.107-6.359-6.358 2.64-2.64 3.748 3.749zm41.456.806H28.026v-3.969h27.993v3.969zM14.563 33.167l7.468-7.468 2.61 2.61-10.107 10.107-6.359-6.358 2.64-2.64 3.748 3.749zm41.456.806H28.026v-3.969h27.993v3.969z"></path><path d="M14.563 33.167l7.468-7.468 2.61 2.61-10.107 10.107-6.359-6.358 2.64-2.64 3.748 3.749zm41.456.806H28.026c0-13.3 7.749-3.969 27.993-3.969v3.969z"></path>
  </svg>
</template>