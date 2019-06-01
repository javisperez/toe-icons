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
      tags: iconsTags[icon],
      isRotating: false
    };
  }
};
</script>

<template>
  <div class="icon-detail fixed pin shadow-lg">
    <div
      class="absolute w-full max-w-lg bg-white shadow rounded pt-6 icon-detail-content"
    >
      <div class="px-6 border-b border-solid border-transparent">
        <div class="flex justify-between items-center mb-4">
          <h2 class="m-0 p-0 flex items-center">
            <ti :icon="icon" size="24" class="mr-2" />
            {{ icon }}
          </h2>

          <router-link to="/" class="inline-block text-right">
            <ti-times size="18" class="cursor-pointer" />
          </router-link>
        </div>
        <div class="tags text-xs mb-6 flex items-center">
          <ti-tags size="18" />

          <span
            class="tag ml-2 px-2 rounded bg-blue-lighter text-blue-darker"
            v-for="(tag, $index) in tags"
            :key="`tag-${$index}`"
            >{{ tag }}</span
          >
        </div>
      </div>

      <div class="bg-grey-lightest px-6 py-6 rounded-br rounded-bl">
        <h3 class="flex items-center justify-between mt-0">
          Examples
          <span
            class="cursor-pointer inline-flex items-center text-blue text-sm"
            @click="isRotating = !isRotating"
          >
            <ti
              :icon="isRotating ? 'toggle-on' : 'toggle-off'"
              size="28"
            />Rotate
          </span>
        </h3>

        <h4>With Strokes</h4>
        <div class="flex justify-between mb-16">
          <div class="flex items-center justify-center w-24 h-24">
            <ti
              :icon="icon"
              :spin="isRotating"
              size="12"
              stroke="1"
              strokeColor="#000000"
              class="text-white"
            />
          </div>

          <div class="flex items-center justify-center w-24 h-24">
            <ti
              :icon="icon"
              :spin="isRotating"
              size="18"
              stroke="1"
              strokeColor="#000000"
              class="text-white"
            />
          </div>

          <div class="flex items-center justify-center w-24 h-24">
            <ti
              :icon="icon"
              :spin="isRotating"
              size="24"
              stroke="1"
              strokeColor="#000000"
              class="text-white"
            />
          </div>

          <div class="flex items-center justify-center w-24 h-24">
            <ti
              :icon="icon"
              :spin="isRotating"
              size="32"
              stroke="1"
              strokeColor="#000000"
              class="text-white"
            />
          </div>

          <div class="flex items-center justify-center w-24 h-24">
            <ti
              :icon="icon"
              :spin="isRotating"
              size="64"
              stroke="1"
              strokeColor="#000000"
              class="text-white"
            />
          </div>

          <div class="flex items-center justify-center w-24 h-24">
            <ti
              :icon="icon"
              :spin="isRotating"
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
            <ti :icon="icon" :spin="isRotating" size="32" />
          </div>

          <div
            class="bg-grey flex items-center justify-center w-24 h-24 shadow hover:shadow-lg border-2 rounded-full"
          >
            <ti :icon="icon" :spin="isRotating" size="32" class="text-white" />
          </div>

          <div
            class="bg-black flex items-center justify-center w-24 h-24 shadow hover:shadow-lg border-2 rounded-full"
          >
            <ti :icon="icon" :spin="isRotating" size="32" class="text-white" />
          </div>

          <div
            class="bg-blue flex items-center justify-center w-24 h-24 shadow hover:shadow-lg border-2 rounded-full"
          >
            <ti :icon="icon" :spin="isRotating" size="32" class="text-white" />
          </div>

          <div
            class="bg-red flex items-center justify-center w-24 h-24 shadow hover:shadow-lg border-2 rounded-full"
          >
            <ti :icon="icon" :spin="isRotating" size="32" class="text-white" />
          </div>

          <div
            class="bg-green flex items-center justify-center w-24 h-24 shadow hover:shadow-lg border-2 rounded-full"
          >
            <ti :icon="icon" :spin="isRotating" size="32" class="text-white" />
          </div>
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

.spin {
  animation: spin 1s infinite linear;
}

@keyframes spin {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(359deg);
  }
}
</style>
