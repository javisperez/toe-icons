<script>
export default {
  name: "TiBrackets",

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
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-brackets"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M38.147 56.256c3.68-.818 6.451-2.165 8.312-4.039 1.861-1.874 2.791-4.35 2.791-7.428v-4.886c0-3.978 2.204-5.967 6.612-5.967v-3.56c-4.408 0-6.612-1.981-6.612-5.942v-5.108c-.041-2.995-.972-5.414-2.791-7.256-1.82-1.841-4.59-3.179-8.312-4.014l-1.186 2.824c4.346 1.096 6.519 3.953 6.519 8.569v4.96c0 3.716 1.736 6.302 5.209 7.759-3.473 1.474-5.209 4.084-5.209 7.833v5.058c-.062 4.502-2.235 7.293-6.519 8.373l1.186 2.824zm-12.44-.025c-3.679-.818-6.448-2.164-8.308-4.037-1.86-1.873-2.79-4.348-2.79-7.424v-4.884c0-3.975-2.203-5.963-6.609-5.963v-3.559c4.406 0 6.609-1.979 6.609-5.939V19.32c.041-2.994.971-5.411 2.79-7.252 1.818-1.84 4.587-3.178 8.308-4.012l1.184 2.822c-4.343 1.096-6.515 3.951-6.515 8.565v4.958c0 3.714-1.735 6.299-5.206 7.755 3.471 1.472 5.206 4.082 5.206 7.829v5.055c.062 4.5 2.234 7.289 6.515 8.369l-1.184 2.822z" fill-rule="nonzero"></path>
  </svg>
</template>