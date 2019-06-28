<script lang="ts">
import Vue from "vue";
import { Chrome as ColorPicker } from "vue-color";
import ClickOutside from "vue-click-outside";

export default Vue.extend({
  name: "icon-modal-playground",

  components: {
    ColorPicker
  },

  directives: {
    ClickOutside
  },

  data() {
    return {
      size: 48,
      fillColor: "#333333",
      strokeColor: "#333333",
      isRotating: false,
      isStroked: false,
      strokeSize: 1,
      isFillColorPickerOpen: false,
      isStrokeColorPickerOpen: false
    };
  },

  methods: {
    hidePicker(picker: String) {
      if (picker === "fill") {
        this.isFillColorPickerOpen = false;
      } else if (picker === "stroke") {
        this.isStrokeColorPickerOpen = false;
      }
    }
  }
});
</script>

<template>
  <div class="h-96 flex">
    <div
      class="flex flex-col border-0 border-r border-solid border-grey-lighter pr-4"
    >
      <div class="text-sm rounded p-1 cursor-pointer mb-2">
        <div class="font-bold">Icon Fill Color</div>
        <div
          class="inline-flex items-center"
          v-click-outside="
            () => {
              hidePicker('fill');
            }
          "
        >
          <div
            class="flex items-center inline-block p-2 hover:bg-white rounded"
            @click="isFillColorPickerOpen = !isFillColorPickerOpen"
          >
            <span
              :style="`background-color: ${fillColor}`"
              class="w-4 h-4 rounded mr-2"
            />
            {{ fillColor }}
          </div>

          <div class="absolute" v-show="isFillColorPickerOpen">
            <ColorPicker
              :value="fillColor"
              @input="
                ({ hex }) => {
                  fillColor = hex;
                }
              "
            />
          </div>
        </div>
      </div>

      <div class="text-sm rounded p-1 cursor-pointer mb-2">
        <div class="font-bold">
          Icon Size:
          <span class="ml-1 text-cyan">{{ size }}px</span>
        </div>
        <input type="range" min="8" max="128" v-model="size" step="1" />
      </div>

      <div class="text-sm rounded p-1 cursor-pointer mb-2">
        <div
          class="font-bold flex items-center"
          @click="isRotating = !isRotating"
        >
          Rotate
          <ti
            :icon="isRotating ? 'toggle-on' : 'toggle-off'"
            size="28"
            class="text-black"
          />
        </div>
      </div>

      <div class="text-sm rounded p-1 cursor-pointer mb-2">
        <div
          class="font-bold flex items-center"
          @click="isStroked = !isStroked"
        >
          Stroked
          <ti
            :icon="isStroked ? 'toggle-on' : 'toggle-off'"
            size="28"
            class="text-black"
          />
        </div>
      </div>

      <div class="text-sm rounded p-1 cursor-pointer mb-2" v-if="isStroked">
        <div class="font-bold flex items-center">
          Stroke Size:
          <span class="ml-1 text-cyan">{{ strokeSize }}</span>
        </div>
        <input type="range" min="0" max="4" v-model="strokeSize" step="1" />
      </div>

      <div class="text-sm rounded p-1 cursor-pointer mb-2" v-if="isStroked">
        <div class="font-bold">Icon Stroke Color</div>
        <div
          class="inline-flex items-center"
          v-click-outside="
            () => {
              hidePicker('stroke');
            }
          "
        >
          <div
            class="flex items-center inline-block p-2 hover:bg-white rounded"
            @click="isStrokeColorPickerOpen = !isStrokeColorPickerOpen"
          >
            <span
              :style="`background-color: ${strokeColor}`"
              class="w-4 h-4 rounded mr-2"
            />
            {{ strokeColor }}
          </div>

          <div class="absolute" v-show="isStrokeColorPickerOpen">
            <ColorPicker
              :value="strokeColor"
              @input="
                ({ hex }) => {
                  strokeColor = hex;
                }
              "
            />
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center items-center flex-auto">
      <ti
        :icon="$route.params.icon"
        :spin="isRotating"
        :size="size"
        :color="fillColor"
        :strokeColor="strokeColor"
        :stroke="isStroked ? strokeSize : 0"
      />
    </div>
  </div>
</template>
