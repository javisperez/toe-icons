<script>
  export let size = 24;
  export let spin = false;
  export let color = "currentColor";
  export let stroke = "0";
  export let strokeColor = "currentColor";
</script>

<svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-hamburger"
  class:spin={spin} width={size} height={size}
  viewBox="0 0 64 64" fill={color} stroke={strokeColor}
  stroke-width={stroke} stroke-linecap="round" stroke-linejoin="round">
  <path fill-rule="nonzero" d="M8.002 43.851h47.822v5.992H8.002zM8.212 28.93h47.821v5.992H8.212zM8.212 14.008h47.821V20H8.212z"></path>
</svg>