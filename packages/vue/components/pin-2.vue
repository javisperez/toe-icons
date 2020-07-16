<script>
export default {
  name: "TiPin2",

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
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-pin-2"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M29.975 35.163l3.235 3.234c.353.331.5.388.773.481 1.049.354 2.203-.133 2.576-1.389l1.204-4.605 6.544-6.544 3.69-.486c.431-.071.691-.136 1.153-.568l2.47-2.47c.275-.294.298-.365.379-.53.372-.754.33-1.541-.379-2.299-3.803-3.802-7.485-7.727-11.41-11.403-.311-.255-.383-.273-.553-.344-.734-.304-1.454-.246-2.18.434l-2.47 2.47c-.302.323-.471.537-.57 1.17l-.457 3.713-6.531 6.531-4.63 1.172c-.924.267-.962.52-1.162.813-.528.776-.53 1.719.239 2.54l3.235 3.235-13.134 17.979 17.978-13.134zm-2.698-2.698l.551.551-2.044 1.493 1.493-2.044zm11.615-19.549l8.485 8.486-.576.575-3.689.486c-.699.116-.851.286-1.153.569l-7.407 7.407c-.235.251-.367.389-.521.908l-.459 1.755-6.359-6.358 1.752-.444c.339-.097.535-.159.923-.524l7.407-7.408c.493-.527.507-.757.571-1.17l.457-3.713.569-.569z" fill-rule="nonzero"></path>
  </svg>
</template>