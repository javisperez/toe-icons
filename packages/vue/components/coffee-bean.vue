<script>
export default {
  name: "TiCoffeeBean",

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
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-coffee-bean"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M41.008 9.195c.798.259 1.34 1 1.344 1.84.016.368.017.668.017.668s-.013 10.222-12.116 19.632c-4.924 3.828-9.194 10.05-10.31 15.868a1.952 1.952 0 01-3.537.727c-3.45-5.112-7.36-14.664-.838-25.977 5.882-10.2 16.742-15.415 25.44-12.758zm-2.576 3.214c-7.484-.929-14.823 3.618-19.4 11.544-3.635 6.296-2.934 13.446-1.151 18.175 1.471-4.381 4.34-9.615 9.917-13.952 7.107-5.525 9.87-12.719 10.634-15.767zM23.96 54.219a2.021 2.021 0 01-1.406-1.917c-.017-.341-.019-.61-.019-.61s.013-10.222 12.117-19.632c4.879-3.794 9.117-9.94 10.278-15.71a2.025 2.025 0 013.676-.722c3.423 5.15 7.184 14.62.73 25.813-5.868 10.174-16.688 15.39-25.376 12.778zm2.513-3.233c7.483.928 14.823-3.618 19.4-11.545 3.634-6.296 2.933-13.445 1.15-18.174-1.471 4.38-4.34 9.615-9.917 13.951-7.106 5.525-9.87 12.72-10.633 15.768z"></path>
  </svg>
</template>