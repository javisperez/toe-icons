<script>
export default {
  name: "TiStarEmpty",

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
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-star-empty"
    :class="{'spin': spin}" :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M37.675 26.643H56.01L41.176 37.42l5.666 17.438-14.833-10.777-14.834 10.777 5.666-17.438L8.008 26.643h18.335l5.666-17.438 5.666 17.438zm-8.407 4.026h-8.869l7.175 5.213-2.74 8.435 7.175-5.213 7.175 5.213-2.741-8.435 7.175-5.213h-8.869l-2.74-8.434-2.741 8.434z" fill-rule="nonzero"></path>
  </svg>
</template>