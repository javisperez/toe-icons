<script>
export default {
  name: "TiMoon",

  props: {
    size: { type: [String, Number], default: 24 },
    color: { type: String, default: "currentColor" },
    stroke: { type: [String, Number], default: "0" },
    strokeColor: { type: String, default: "currentColor" }
  },
}
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-moon"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M46.377 48.673c.208 0 .383.138.433.335a.443.443 0 01-.209.506 19.937 19.937 0 01-9.593 2.447c-11.032 0-19.987-8.956-19.987-19.987 0-11.031 8.955-19.987 19.987-19.987 3.54 0 6.862.922 9.752 2.54a.437.437 0 01.2.504.437.437 0 01-.434.328c-.05.003-.1.003-.15.003-8.848 0-16.03 7.463-16.03 16.655 0 9.193 7.182 16.656 16.03 16.656 0 0 0 0 0 0z" fill="none" stroke="#000" stroke-width="3.997392"></path>
  </svg>
</template>