<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "icon-modal-examples",

  props: {
    icon: {
      type: String,
      required: true
    }
  }
});
</script>

<template>
  <div>
    <h3 class="flex items-center justify-between mt-0">Examples</h3>

    <h4>With Strokes</h4>
    <div class="flex justify-between mb-16">
      <div class="flex items-center justify-center w-24 h-24">
        <ti
          :icon="icon"
          size="12"
          stroke="1"
          strokeColor="#000000"
          class="text-white"
        />
      </div>

      <div class="flex items-center justify-center w-24 h-24">
        <ti
          :icon="icon"
          size="18"
          stroke="1"
          strokeColor="#000000"
          class="text-white"
        />
      </div>

      <div class="flex items-center justify-center w-24 h-24">
        <ti
          :icon="icon"
          size="24"
          stroke="1"
          strokeColor="#000000"
          class="text-white"
        />
      </div>

      <div class="flex items-center justify-center w-24 h-24">
        <ti
          :icon="icon"
          size="32"
          stroke="1"
          strokeColor="#000000"
          class="text-white"
        />
      </div>

      <div class="flex items-center justify-center w-24 h-24">
        <ti
          :icon="icon"
          size="64"
          stroke="1"
          strokeColor="#000000"
          class="text-white"
        />
      </div>

      <div class="flex items-center justify-center w-24 h-24">
        <ti
          :icon="icon"
          size="128"
          stroke="1"
          strokeColor="#000000"
          class="text-white"
        />
      </div>
    </div>

    <h4>With Background</h4>
    <div class="flex justify-between icon-detail-samples">
      <div
        class="bg-white flex items-center justify-center w-24 h-24 shadow hover:shadow-lg border-2 rounded-full"
      >
        <ti :icon="icon" size="32" />
      </div>

      <div
        class="bg-grey flex items-center justify-center w-24 h-24 shadow hover:shadow-lg border-2 rounded-full"
      >
        <ti :icon="icon" size="32" class="text-white" />
      </div>

      <div
        class="bg-black flex items-center justify-center w-24 h-24 shadow hover:shadow-lg border-2 rounded-full"
      >
        <ti :icon="icon" size="32" class="text-white" />
      </div>

      <div
        class="bg-blue flex items-center justify-center w-24 h-24 shadow hover:shadow-lg border-2 rounded-full"
      >
        <ti :icon="icon" size="32" class="text-white" />
      </div>

      <div
        class="bg-red flex items-center justify-center w-24 h-24 shadow hover:shadow-lg border-2 rounded-full"
      >
        <ti :icon="icon" size="32" class="text-white" />
      </div>

      <div
        class="bg-green flex items-center justify-center w-24 h-24 shadow hover:shadow-lg border-2 rounded-full"
      >
        <ti :icon="icon" size="32" class="text-white" />
      </div>
    </div>
  </div>
</template>
