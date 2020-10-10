<script>
export default {
  name: "TiPin",

  props: {
    size: { type: [String, Number], default: 24 },
    color: { type: String, default: "currentColor" },
    stroke: { type: [String, Number], default: "0" },
    strokeColor: { type: String, default: "currentColor" }
  },
}
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="toe-icon ti ti-pin"
    :width="size" :height="size"
    viewBox="0 0 64 64" :fill="color" :stroke="strokeColor"
    :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round">
    <path d="M28.571 34.065h-4.574c-.484-.016-.629-.08-.887-.208-.993-.491-1.464-1.651-.84-2.803l2.405-4.107v-9.255L22.41 14.74c-.255-.356-.393-.586-.413-1.218v-3.493c.013-.402.046-.468.106-.643.27-.796.856-1.323 1.894-1.357 5.376 0 10.756-.171 16.13.004.401.04.465.078.635.148.734.304 1.202.855 1.234 1.848v3.493c-.014.443-.046.714-.423 1.231l-2.303 2.949v9.236l2.445 4.103c.464.842.313 1.047.247 1.396-.175.922-.841 1.591-1.966 1.628h-4.574l-3.425 22-3.426-22zm3.815 0h-.779l.39 2.501.389-2.501zm5.61-22.036H25.997v.814l2.264 2.953c.413.575.4.803.414 1.217v10.476c-.012.343-.016.534-.274 1.01l-.917 1.566h8.993l-.925-1.553c-.172-.308-.266-.49-.282-1.023V17.013c.024-.721.178-.893.424-1.231l2.302-2.948v-.805z" fill-rule="nonzero"></path>
  </svg>
</template>