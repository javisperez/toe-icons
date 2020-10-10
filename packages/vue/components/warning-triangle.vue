<script>
export default {
  name: "TiWarningTriangle",

  props: {
    size: { type: [String, Number], default: 24 },
    color: { type: String, default: "currentColor" },
    stroke: { type: [String, Number], default: "0" },
    strokeColor: { type: String, default: "currentColor" }
  },
}
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-warning-triangle"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <g fill-rule="nonzero"><path d="M32.427 7.987c2.183.124 4 1.165 5.096 3.281l17.936 36.208c1.739 3.66-.954 8.585-5.373 8.656H13.967c-4.022-.064-7.322-4.631-5.352-8.696l18.271-36.207c.342-.65.498-.838.793-1.179 1.186-1.375 2.483-2.111 4.748-2.063zm-.295 3.997a2.034 2.034 0 00-1.659 1.017C24.161 24.98 18.076 37.082 12.172 49.268c-.546 1.225.391 2.797 1.762 2.863 12.06.195 24.125.195 36.185 0 1.325-.064 2.321-1.584 1.769-2.85-5.793-12.184-11.765-24.286-17.966-36.267-.366-.651-.903-1.042-1.79-1.03z"></path><path d="M33.631 40.581h-3.348l-.368-16.449h4.1l-.384 16.449zm-3.828 5.03c0-.609.197-1.113.592-1.514.396-.4.935-.601 1.618-.601.684 0 1.223.201 1.618.601.395.401.593.905.593 1.514 0 .587-.193 1.078-.577 1.473-.385.395-.929.593-1.634.593-.705 0-1.249-.198-1.634-.593-.384-.395-.576-.886-.576-1.473z"></path></g>
  </svg>
</template>