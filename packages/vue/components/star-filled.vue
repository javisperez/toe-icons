<script>
export default {
  name: "TiStarFilled",

  props: {
    size: { type: [String, Number], default: 24 },
    color: { type: String, default: "currentColor" },
    stroke: { type: [String, Number], default: "0" },
    strokeColor: { type: String, default: "currentColor" }
  },
}
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-star-filled"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M32.001 9.188l5.666 17.438h18.335L41.169 37.403l5.666 17.438-14.834-10.777-14.833 10.777 5.666-17.438L8 26.626h18.335l5.666-17.438z"></path>
  </svg>
</template>