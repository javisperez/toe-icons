<script>
export default {
  name: "TiSun",

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
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-sun"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M46.225 29.724h9.774v3.974h-9.774zM30.013 17.485V7.71h3.974v9.775zM17.78 33.698H8.004v-3.974h9.774zM33.984 45.936v9.774H30.01v-9.774z"></path><g><path d="M40.654 20.248l6.911-6.912 2.81 2.81-6.911 6.912zM20.535 23.056l-6.911-6.911 2.81-2.81 6.911 6.911zM23.35 43.172l-6.912 6.911-2.81-2.81 6.912-6.911zM43.462 40.367l6.911 6.911-2.81 2.81-6.911-6.911z"></path></g><path d="M32.107 43.633c3.081-.03 6.13-1.306 8.323-3.473 2.605-2.574 3.946-6.382 3.478-10.017-.802-6.23-5.923-10.458-11.878-10.458-4.523 0-8.92 2.83-10.848 6.933-1.477 3.142-1.48 6.935 0 10.082 1.914 4.074 6.239 6.89 10.772 6.933h.153zm-.129-3.66c-3.834-.036-7.411-3-8.122-6.802-.501-2.68.445-5.58 2.417-7.483 2.302-2.222 5.92-2.967 8.929-1.707 2.691 1.127 4.706 3.744 5.077 6.627.318 2.471-.568 5.061-2.311 6.845a8.406 8.406 0 01-5.99 2.52z" fill-rule="nonzero"></path>
  </svg>
</template>