<script>
export default {
  name: "TiSpinner",

  props: {
    size: { type: [String, Number], default: 24 },
    color: { type: String, default: "currentColor" },
    stroke: { type: [String, Number], default: "0" },
    strokeColor: { type: String, default: "currentColor" }
  },
}
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-spinner"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M46.03 32a4.987 4.987 0 014.985-4.985A4.988 4.988 0 0156 32a4.988 4.988 0 01-4.985 4.985A4.987 4.987 0 0146.03 32z" style="opacity: 0.15"></path><path d="M41.92 41.92a4.99 4.99 0 017.051 0 4.99 4.99 0 010 7.051 4.99 4.99 0 01-7.051 0 4.99 4.99 0 010-7.051z" style="opacity: 0.30"></path><circle cx="32" cy="51.015" r="4.985" style="opacity: 0.45"></circle><path d="M22.08 41.92a4.99 4.99 0 010 7.051 4.99 4.99 0 01-7.051 0 4.99 4.99 0 010-7.051 4.99 4.99 0 017.051 0z" style="opacity: 0.60"></path><path d="M17.97 32a4.987 4.987 0 01-4.985 4.985A4.988 4.988 0 018 32a4.988 4.988 0 014.985-4.985A4.987 4.987 0 0117.97 32zM22.08 22.08a4.99 4.99 0 01-7.051 0 4.99 4.99 0 010-7.051 4.99 4.99 0 017.051 0 4.99 4.99 0 010 7.051z" style="opacity: 0.75"></path><circle cx="32" cy="12.985" r="4.985"></circle>
  </svg>
</template>