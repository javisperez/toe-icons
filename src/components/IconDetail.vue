<script>
import iconsTags from "../../dist/icons-tags.json";

export default {
  name: "icon-detail",

  props: {
    icon: String
  },

  data() {
    const { icon } = this;

    return {
      tags: iconsTags[icon]
    };
  }
};
</script>

<template>
  <div class="icon-detail fixed pin shadow-lg">
    <div
      class="absolute w-full max-w-lg bg-white shadow rounded p-6 icon-detail-content"
    >
      <div class="flex justify-between items-center mb-4">
        <h2 class="m-0 p-0 flex items-center">
          <ti :icon="icon" size="24" class="mr-2" />
          {{ icon }}
        </h2>

        <router-link to="/" class="inline-block text-right">
          <ti-times size="18" class="cursor-pointer" />
        </router-link>
      </div>

      <div>
        <span
          class="text-sm my-4 bg-grey-lighter rounded p-1 inline-flex items-center"
        >
          <ti-vue size="24" />
          <span class="text-grey-dark font-bold">&lt;ti-{{ icon }} /&gt;</span>
        </span>
      </div>

      <div class="tags text-xs">
        <strong>TAGS:</strong>
        <span
          class="tag ml-2 px-2 rounded-full bg-grey-darkest text-white"
          v-for="(tag, $index) in tags"
          :key="`tag-${$index}`"
          >{{ tag }}</span
        >
      </div>

      <hr class="h-0 border-0 border-t-2 border-solid border-grey-light my-8" />

      <h3>Usage examples</h3>

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
  </div>
</template>

<style>
.icon-detail {
  background: rgba(0, 0, 0, 0.4);
}
.icon-detail-content {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.icon-detail-samples > div {
  transition: box-shadow 0.2s;
}
</style>
