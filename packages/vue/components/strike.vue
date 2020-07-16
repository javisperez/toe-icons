<script>
export default {
  name: "TiStrike",

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
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-strike"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10.01 30.17h44.15v2.988H10.01z"></path><path d="M10.01 30.17h44.15v2.988H10.01z"></path><path d="M46.396 35.711c.414.482.779.983 1.093 1.504 1.06 1.756 1.59 3.823 1.59 6.2 0 3.791-1.478 6.827-4.433 9.107-2.955 2.281-6.907 3.422-11.854 3.422-3.212 0-6.21-.616-8.994-1.848-2.785-1.231-4.931-2.917-6.441-5.059-1.51-2.142-2.265-4.572-2.265-7.292h6.2c0 2.827 1.044 5.059 3.132 6.698 2.088 1.638 4.877 2.457 8.368 2.457 3.256 0 5.75-.664 7.485-1.992 1.735-1.327 2.602-3.137 2.602-5.429 0-2.291-.803-4.063-2.409-5.316-1.057-.824-2.68-1.642-4.868-2.452h10.794zm-27.382-8.094c-1.629-1.974-2.444-4.3-2.444-6.978 0-3.683 1.472-6.73 4.417-9.139 2.944-2.409 6.773-3.614 11.484-3.614 3.212 0 6.077.621 8.593 1.863 2.517 1.242 4.465 2.956 5.847 5.14a13.147 13.147 0 012.072 7.164h-6.2c0-2.827-.9-5.049-2.699-6.666s-4.336-2.425-7.613-2.425c-3.041 0-5.413.669-7.115 2.007-1.703 1.339-2.554 3.197-2.554 5.574 0 1.906.808 3.518 2.425 4.835.966.786 2.337 1.533 4.112 2.239H19.014z" fill-rule="nonzero"></path>
  </svg>
</template>