<script>
export default {
  name: "TiCoffeeBeansFilled",

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
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-coffee-beans-filled"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M46.77 15.82a1.969 1.969 0 011.437 1.889c.022.056.022.09.022.09s-.009 7.534-8.93 14.47c-3.317 2.577-6.231 6.63-7.336 10.581a1.987 1.987 0 01-3.618.474c-2.28-3.965-4.213-10.438.13-17.97 4.234-7.34 11.964-11.179 18.294-9.533zM35.118 49.262a2.02 2.02 0 01-1.484-1.94c-.023-.03-.023-.05-.023-.05s.009-7.534 8.93-14.47c3.348-2.602 6.286-6.707 7.367-10.693a1.93 1.93 0 013.512-.485c2.313 3.95 4.334 10.482-.055 18.093-4.223 7.322-11.926 11.16-18.247 9.545z"></path><path d="M23.97 49.118a1.95 1.95 0 001.857-1.437.374.374 0 00.048-.095s1.94-7.281-4.881-16.288c-2.528-3.338-4.29-7.987-4.346-12.08a2.007 2.007 0 00-3.411-1.398c-3.217 3.247-6.725 8.988-4.487 17.355 2.19 8.193 8.674 13.904 15.22 13.943zm4.54-4.377c.775.444 1.412.63 2.329.474a5.777 5.777 0 01-1.508 2.095.787.787 0 01-1.27-.711c.026-.504.147-1.103.449-1.858zm3.45-25.584c-7.222 5.296-7.278 13.07-7.571 12.683-6.822-9.008-5.004-16.508-5.004-16.508l.029-.108a1.977 1.977 0 011.85-1.456c3.879.046 7.738 2.053 10.696 5.389z" style="opacity: 0.75"></path>
  </svg>
</template>