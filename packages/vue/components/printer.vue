<script>
export default {
  name: "TiPrinter",

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
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-printer"
    :class="{'spin': spin}" :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M44.12 40.151h-24v12h24v-12zm-28-12.002l-1.988.002c-1.051.007-1.978.902-2.012 1.949-.078 4.052-.176 8.109.003 12.158.057 1.007.952 1.873 1.97 1.893.676.004 1.351.01 2.027.016v-8.016h32v8.082c.709-.025 1.419-.053 2.129-.085 1.007-.057 1.875-.954 1.894-1.97.027-4.044.175-8.092-.003-12.132-.058-1.002-.939-1.862-1.944-1.894-.692-.013-1.384-.025-2.076-.035v.046h-32v-.014zm28-15.986h-24v11.904c7.999-.075 16-.017 24 .042V12.163zm-28 43.988v-7.963a767.44 767.44 0 01-2.155-.039c-3.05-.097-5.746-2.771-5.843-5.843a323.824 323.824 0 010-12.31c.096-3.044 2.77-5.745 5.843-5.843.718-.014 1.436-.026 2.155-.037V8.163h32v15.975l2.1.014c3.094.059 5.863 2.783 5.922 5.922.026 4.077.076 8.155-.001 12.232-.097 3.044-2.771 5.746-5.843 5.843l-2.178.039v7.963h-32z" fill-rule="nonzero"></path>
  </svg>
</template>