<script>
export default {
  name: "TiSearch",

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
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-search"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M39.94 44.142c-3.387 2.507 7.145-8.263 4.148-4.169.075-.006-.064.221-.53.79 0 0 8.004 7.95 11.933 11.996 1.364 1.475-1.097 4.419-2.769 2.882-3.558-3.452-11.977-12.031-11.99-12.045l-.792.546z"></path><path d="M28.179 48.162c5.15-.05 10.248-2.183 13.914-5.806 4.354-4.303 6.596-10.669 5.814-16.747-1.34-10.415-9.902-17.483-19.856-17.483-7.563 0-14.913 4.731-18.137 11.591-2.468 5.252-2.473 11.593 0 16.854 3.201 6.812 10.431 11.518 18.008 11.591h.257zm-.236-3.337c-7.691-.074-14.867-6.022-16.294-13.648-1.006-5.376.893-11.194 4.849-15.012 4.618-4.459 11.877-5.952 17.913-3.425 5.4 2.261 9.442 7.511 10.187 13.295.638 4.958-1.141 10.154-4.637 13.733-3.067 3.14-7.368 5.014-11.803 5.057h-.215z" fill-rule="nonzero"></path>
  </svg>
</template>