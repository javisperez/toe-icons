<script>
export default {
  name: "TiTags",

  props: {
    size: { type: [String, Number], default: 24 },
    color: { type: String, default: "currentColor" },
    stroke: { type: [String, Number], default: "0" },
    strokeColor: { type: String, default: "currentColor" }
  },
}
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-tags"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9.89 30.496a6.002 6.002 0 00-.033 8.518l10.081 10.082a6.012 6.012 0 008.448.051A491357.7 491357.7 0 0047.72 30.276a3 3 0 00.905-2.146V10.523h-17.22c-.788 0-1.544.309-2.105.862L9.89 30.496zm34.735-15.973v11.945c0 .811-.329 1.587-.91 2.152L26.23 45.604a2.961 2.961 0 01-4.157-.031l-8.709-8.709a2.976 2.976 0 01.02-4.232l17.573-17.25a3 3 0 012.102-.859h11.566zm-7.907 2.462c-1.751.015-3.45 1.017-4.266 2.553a4.973 4.973 0 00-.118 4.356c.836 1.812 2.851 3.021 4.882 2.809 2.042-.212 3.899-1.835 4.304-3.896.296-1.503-.162-3.136-1.213-4.251-.899-.953-2.18-1.548-3.495-1.57l-.094-.001zm.008 2.519c1.105.007 2.142.849 2.343 1.961.069.384.043.786-.09 1.154-.393 1.079-1.62 1.811-2.764 1.536-1.139-.274-1.997-1.489-1.802-2.67.177-1.069 1.146-1.963 2.27-1.981h.043z"></path><path d="M48.625 13.137v4.001h3.362v11.945c0 .811-.328 1.587-.909 2.152L33.593 48.218a2.961 2.961 0 01-4.157-.03l-.034-.034-1.016.993a6.006 6.006 0 01-2.259 1.389l1.174 1.174a6.009 6.009 0 008.447.051l19.335-18.87a3.003 3.003 0 00.904-2.147V13.137h-7.362z"></path>
  </svg>
</template>