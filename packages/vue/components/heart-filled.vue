<script>
export default {
  name: "TiHeartFilled",

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
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-heart-filled"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M43.046 9.05c5.137.117 9.856 3.451 11.782 8.485 2.392 6.249.678 13.452-2.495 19.624-3.792 7.375-10.79 12.703-17.966 17.288 0 0-2.796 1.351-5.516-.403-9.246-6.021-17.877-13.963-20.318-24.82C6.676 20.966 9.694 10.628 19.115 9.19c4.72-.721 11.109 2.766 12.808 5.869 1.657-3.095 6.565-5.884 10.694-6.008.215-.002.214-.003.429-.001z" fill-rule="nonzero"></path>
  </svg>
</template>