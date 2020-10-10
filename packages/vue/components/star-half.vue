<script>
export default {
  name: "TiStarHalf",

  props: {
    size: { type: [String, Number], default: 24 },
    color: { type: String, default: "currentColor" },
    stroke: { type: [String, Number], default: "0" },
    strokeColor: { type: String, default: "currentColor" }
  },
}
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-star-half"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M37.67 26.613h18.335L41.172 37.39l5.666 17.437L32.004 44.05 17.17 54.827l5.666-17.437L8.003 26.613h18.335l5.666-17.439 5.665 17.439zm-5.666-4.41v16.87l7.175 5.214-2.741-8.436 7.176-5.212h-8.87l-2.74-8.435z" fill-rule="nonzero"></path>
  </svg>
</template>