<script>
export default {
  name: "TiLockClose",

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
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-lock-close"
    :class="{'spin': spin}" :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M19.864 28.185c-.015-6.15.053-12.618 6.276-15.627 5.201-2.515 12.223-1.522 15.598 3.109 1.625 2.229 2.377 5.036 2.288 7.787l.001 4.56c2.313 1.368 3.965 3.857 4.07 6.673.058 4.677.422 9.4-.037 14.023-.378 3.812-3.76 7.043-7.745 7.191-5.674.07-11.369.525-17.023-.036-3.813-.379-7.043-3.76-7.191-7.746-.058-4.676-.422-9.399.037-14.023.24-2.417 1.685-4.599 3.726-5.911zm4.118 2.72c-2.032.075-3.805 1.829-3.882 3.882a540.49 540.49 0 000 13.233c.076 2.035 1.829 3.806 3.882 3.882 5.411.067 10.823.067 16.234 0 2.035-.076 3.805-1.828 3.882-3.882.055-4.411.055-8.823 0-13.233-.076-2.035-1.829-3.806-3.882-3.882a655.604 655.604 0 00-16.234 0zm16.085-4.002c.093-4.273.098-8.461-3.344-10.506-3.339-1.985-8.195-1.668-10.807 1.231-1.407 1.56-2.084 3.746-2.049 5.758v3.52h.016a651.571 651.571 0 0116.184-.003z" fill-rule="nonzero"></path>
  </svg>
</template>