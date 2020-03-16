<script>
  export let size = 24;
  export let spin = false;
  export let color = "currentColor";
  export let stroke = "0";
  export let strokeColor = "currentColor";
</script>

<svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-circle"
  class:spin={spin} width={size} height={size}
  viewBox="0 0 64 64" fill={color} stroke={strokeColor}
  stroke-width={stroke} stroke-linecap="round" stroke-linejoin="round">
  <path d="M32.142 56.043c6.179-.06 12.297-2.62 16.696-6.967 5.225-5.163 7.916-12.803 6.978-20.096C54.207 16.481 43.933 8 31.988 8c-9.075 0-17.896 5.677-21.765 13.909-2.961 6.303-2.967 13.911 0 20.225 3.842 8.174 12.517 13.821 21.61 13.909h.309zm-.283-4.004c-9.23-.089-17.841-7.227-19.553-16.378-1.208-6.452 1.071-13.433 5.818-18.015 5.543-5.35 14.253-7.142 21.496-4.11 6.481 2.714 11.331 9.014 12.225 15.955.766 5.949-1.369 12.185-5.565 16.48-3.68 3.767-8.841 6.017-14.164 6.068h-.257z" fill-rule="nonzero"></path>
</svg>