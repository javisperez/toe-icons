<script>
export default {
  name: "TiRefresh",

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
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-refresh"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M45.274 29.772c-1.094-8.15-8.075-14.435-16.525-14.435-9.203 0-16.674 7.471-16.674 16.674s7.471 16.675 16.674 16.675c4.423 0 8.664-1.757 11.791-4.884l2.862 2.863a20.722 20.722 0 01-14.653 6.069c-11.437 0-20.723-9.285-20.723-20.723 0-11.437 9.286-20.723 20.723-20.723 10.623 0 19.379 7.994 20.582 18.294l3.551-3.551L56 29.148l-8.792 8.792-8.796-8.796 3.118-3.117 3.744 3.745z" fill-rule="nonzero"></path>
  </svg>
</template>