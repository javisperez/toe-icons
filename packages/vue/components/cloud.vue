<script>
export default {
  name: "TiCloud",

  props: {
    size: { type: [String, Number], default: 24 },
    color: { type: String, default: "currentColor" },
    stroke: { type: [String, Number], default: "0" },
    strokeColor: { type: String, default: "currentColor" }
  },
}
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-cloud"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M22.522 14.765c2.055-.749 4.366-.736 6.482 0 2.086.725 4.596 2.25 6.234 4.724 0 0 3.835-.944 6.82.318 3.861 1.633 6.389 5.874 5.942 10.124 0 0 6.456 2.558 7.637 7.673 1.301 5.638-3.228 11.928-9.45 12.046-8.964.057-17.927.058-26.891 0-6.807-.129-12.611-7.307-10.913-14.133.796-3.2 3.046-5.958 6.029-7.445 0 0-.5-4.118 1.024-7.282 1.561-3.24 4.881-5.222 7.086-6.025zm3.088 3.573c-4.733.091-8.692 5.233-6.75 10.151 0 0 .226 2.01-2.131 2.928-5.874 2.358-6.255 14.065 2.618 14.233 8.955.058 17.911.169 26.864-.001 4.53-.144 7.769-6.932 3.501-10.369-1.774-1.43-4.142-1.227-4.142-1.227-1.527.091-2.55-1.44-1.887-3.162 1.6-4.313-3.358-9.856-8.334-7.056 0 0-2.015.465-3.146-1.635-1.294-2.351-3.921-3.879-6.593-3.862z" fill-rule="nonzero"></path>
  </svg>
</template>