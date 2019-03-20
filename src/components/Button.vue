<script>
const only = values => ({ validator: value => values.indexOf(value) > -1 });

export default {
  name: "ui-button",

  props: {
    variant: only(["primary", "secondary"])
  }
};
</script>

<template>
  <div class="ui-button" :class="[`ui-button-${variant}`]">
    <slot/>
  </div>
</template>

<style>
.ui-button {
  @apply .px-4 .py-2 .rounded-lg .text-base .flex .items-center;
  box-sizing: border-box;
}

.ui-button-primary {
  @apply .bg-blue .text-white .cursor-pointer .font-bold;
}

.ui-button-primary:hover {
  @apply .bg-blue-dark;
}

.ui-button-secondary {
  @apply .border-2 .border-grey-dark .border-solid .text-grey-dark .cursor-pointer .font-bold;
}

.ui-button-secondary:hover {
  @apply .bg-grey-lighter .text-black;
}
</style>
