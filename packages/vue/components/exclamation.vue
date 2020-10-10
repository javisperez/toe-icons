<script>
export default {
  name: "TiExclamation",

  props: {
    size: { type: [String, Number], default: 24 },
    color: { type: String, default: "currentColor" },
    stroke: { type: [String, Number], default: "0" },
    strokeColor: { type: String, default: "currentColor" }
  },
}
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-exclamation"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M34.476 42.174h-5.464l-.425-34.192h6.348l-.459 34.192zm-6.118 10.405c0-.981.3-1.805.9-2.47.599-.665 1.488-.998 2.666-.998s2.073.333 2.683.998c.611.665.916 1.489.916 2.47 0 .982-.305 1.794-.916 2.438-.61.643-1.505.965-2.683.965s-2.067-.322-2.666-.965c-.6-.644-.9-1.456-.9-2.438z" fill-rule="nonzero"></path>
  </svg>
</template>