<script>
export default {
  name: "TiEyeSlash",

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
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-eye-slash"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M13.673 10.345l-3.097 3.096 39.853 39.854 3.097-3.097-39.853-39.853z"></path><path d="M17.119 19.984l2.915 2.915c-3.191 2.717-5.732 6.099-7.374 9.058l-.005.01c4.573 7.646 11.829 14.872 20.987 13.776 2.472-.296 4.778-1.141 6.885-2.35l2.951 2.95c-4.107 2.636-8.815 4.032-13.916 3.342-9.198-1.244-16.719-8.788-21.46-17.648 2.226-4.479 5.271-8.764 9.017-12.053zm6.63-4.32c2.572-1.146 5.355-1.82 8.327-1.868.165-.001 2.124.092 3.012.238a18.45 18.45 0 011.659.35C45.472 16.657 51.936 24.438 56 32.037c-1.705 3.443-3.938 6.398-6.601 9.277l-2.827-2.827c1.967-2.12 3.622-4.161 4.885-6.45 0 0-1.285-2.361-2.248-3.643a37.988 37.988 0 00-1.954-2.395c-.54-.608-2.637-2.673-3.136-3.103-3.348-2.879-7.279-5.138-11.994-5.1-1.826.029-3.582.389-5.249.995l-3.127-3.127z" fill-rule="nonzero"></path><path d="M25.054 27.92l2.399 2.398a4.843 4.843 0 006.114 6.114l2.399 2.399A8.02 8.02 0 0125.054 27.92zm6.849-4.101l.148-.002a8.021 8.021 0 018.017 8.017l-.001.148-8.164-8.163z"></path>
  </svg>
</template>