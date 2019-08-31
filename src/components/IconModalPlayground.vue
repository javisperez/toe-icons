<script lang="ts">
import Vue from "vue";
import { Chrome as ColorPicker } from "vue-color";
import ClickOutside from "vue-click-outside";
// import Multiselect from "vue-multiselect";
import iconsJson from "../../dist/icons.json";
import { capitalize } from "lodash";

export default Vue.extend({
  name: "icon-modal-playground",

  components: {
    ColorPicker,
    // Multiselect
  },

  directives: {
    ClickOutside
  },

  data() {
    return {
      size: 5,
      fillColor: "#333333",
      strokeColor: "#333333",
      isRotating: false,
      strokeSize: 0,
      isFillColorPickerOpen: false,
      isStrokeColorPickerOpen: false,

      isSecondaryIconEnabled: false,
      secondaryIcon: "",
      secondaryIconScale: 1.0,

      colors: {
        fill: ["#F00", "#0F0", "#00F", "#000", "#FFF", "#F0F"],
        stroke: ["#F00", "#0F0", "#00F", "#000", "#FFF", "#F0F"],

        tmpFill: "",
        tmpStroke: ""
      }
    };
  },

  methods: {
    hidePicker(picker: String) {
      const capitalizedPicker = capitalize(picker);

      if (!this[`is${capitalizedPicker}ColorPickerOpen`]) {
        return;
      }

      this[`is${capitalizedPicker}ColorPickerOpen`] = false;
      this.setColor(picker, this.colors[`tmp${capitalizedPicker}`]);
    },

    setColor(type, hex) {
      const recents = this.colors[type];

      recents.unshift(hex);
      this.colors[type] = recents.splice(0, 6);
      this[`${type}Color`] = hex;
    }
  },

  computed: {
    sizeInPx(): Number {
      return Math.pow(2, this.size);
    },
    secondarySizeInPx(): Number {
      return Math.pow(2, this.size);
    },
    secondaryIcons(): string[] {
      const icons = Object.keys(iconsJson);

      return icons.filter(i => i !== this.$route.params.icon);
    }
  }
});
</script>

<template>
  <div class="h-96 flex">
    <div class="w-1/3 pr-4">
      <div>
        <strong>Fill Color</strong>
        <ul class="list-reset flex items-center">
          <li
            style="line-height: 0"
            class="cursor-pointer hover:text-black"
            v-click-outside="
              () => {
                hidePicker('fill');
              }
            "
          >
            <div
              class="inline-flex items-center"
              @click="isFillColorPickerOpen = true"
            >
              <TiPlusCircle size="24" />
              <div class="absolute" v-show="isFillColorPickerOpen">
                <ColorPicker
                  :value="fillColor"
                  @input="
                    ({ hex }) => {
                      this.colors.tmpFill = hex;
                    }
                  "
                />
              </div>
            </div>
          </li>
          <li
            class="ml-2 cursor-pointer border-2 border-solid block w-4 h-4 rounded-full hover:border-grey-darker"
            :class="{
              'border-black': color === fillColor,
              'border-grey-light': color !== fillColor
            }"
            v-for="(color, i) in colors.fill"
            :key="`${color}${i}`"
            @click="fillColor = color"
          >
            <span
              class="block w-full h-full rounded-full"
              :style="`background: ${color}`"
            ></span>
          </li>
        </ul>
      </div>

      <div>
        <strong>Stroke Color</strong>
        <ul class="list-reset flex items-center">
          <li
            style="line-height: 0"
            class="cursor-pointer hover:text-black"
            v-click-outside="
              () => {
                hidePicker('stroke');
              }
            "
          >
            <div
              class="inline-flex items-center"
              @click="isStrokeColorPickerOpen = true"
            >
              <TiPlusCircle size="24" />
              <div class="absolute" v-show="isStrokeColorPickerOpen">
                <ColorPicker
                  :value="strokeColor"
                  @input="
                    ({ hex }) => {
                      this.colors.tmpStroke = hex;
                    }
                  "
                />
              </div>
            </div>
          </li>
          <li
            class="ml-2 cursor-pointer border-2 border-solid block w-4 h-4 rounded-full hover:border-grey-darker"
            :class="{
              'border-black': color === strokeColor,
              'border-grey-light': color !== strokeColor
            }"
            v-for="(color, i) in colors.stroke"
            :key="`${color}${i}`"
            @click="strokeColor = color"
          >
            <span
              class="block w-full h-full rounded-full"
              :style="`background: ${color}`"
            ></span>
          </li>
        </ul>
      </div>

      <div>
        <strong>Stroke Width</strong>
        <div class="border border-grey-darker py-2 flex text-black font-bold">
          <input
            type="range"
            min="0"
            max="4"
            v-model="strokeSize"
            step="1"
            class="flex-auto"
          />
          <span class="ml-1 w-12 text-sm">{{ strokeSize }}</span>
        </div>
      </div>

      <div>
        <strong>Icon Size</strong>
        <div class="border border-grey-darker py-2 flex text-black font-bold">
          <input type="range" min="4" max="8" v-model="size" step="1" />
          <span class="ml-1 w-12 text-sm">{{ sizeInPx }}px</span>
        </div>
      </div>
    </div>

    <div
      class="flex flex-col justify-center items-center flex-auto bg-white p-4"
    >
      <!-- <div class="w-full z-10">
        <div class="flex justify-start w-full items-center">
          <label>
            <input type="checkbox" v-model="isSecondaryIconEnabled" />
            Combine with another icon:
          </label>
        </div>

        <div class="flex w-full items-center" v-if="isSecondaryIconEnabled">
          <multiselect v-model="secondaryIcon" :options="secondaryIcons">
            <template slot="singleLabel" slot-scope="props">
              <div class="flex items-center">
                <ti :icon="props.option" size="24" />
                <div class="option__desc ml-2">
                  <span class="option">{{ props.option }}</span>
                </div>
              </div>
            </template>

            <template slot="option" slot-scope="props">
              <div class="flex items-center">
                <ti :icon="props.option" size="24" />
                <div class="option__desc ml-2">
                  <span class="option">{{ props.option }}</span>
                </div>
              </div>
            </template>
          </multiselect>
          <div class="whitespace-no-wrap text-sm ml-2">
            <span
              class="cursor-pointer"
              :class="{
                'text-black': secondaryIconScale === 1.5,
                'text-blue hover:underline': secondaryIconScale !== 1.5
              }"
              @click="secondaryIconScale = 1.5"
              >1.5x</span
            >
            |
            <span
              class="cursor-pointer"
              :class="{
                'text-black': secondaryIconScale === 1.0,
                'text-blue hover:underline': secondaryIconScale !== 1.0
              }"
              @click="secondaryIconScale = 1.0"
              >1.0x</span
            >
            |
            <span
              class="cursor-pointer"
              :class="{
                'text-black': secondaryIconScale === 0.75,
                'text-blue hover:underline': secondaryIconScale !== 0.75
              }"
              @click="secondaryIconScale = 0.75"
              >0.75x</span
            >
            |
            <span
              class="cursor-pointer"
              :class="{
                'text-black': secondaryIconScale === 0.5,
                'text-blue hover:underline': secondaryIconScale !== 0.5
              }"
              @click="secondaryIconScale = 0.5"
              >0.5x</span
            >
          </div>
        </div>
      </div> -->

      <div class="flex-1 w-full text-center justify-center items-center flex">
        <span class="relative block">
          <ti
            :icon="$route.params.icon"
            :spin="isRotating"
            :size="sizeInPx"
            :color="fillColor"
            :strokeColor="strokeColor"
            :stroke="strokeSize"
          />
          <ti
            class="absolute pin"
            v-if="secondaryIcon && isSecondaryIconEnabled"
            :icon="secondaryIcon"
            :spin="isRotating"
            :size="secondarySizeInPx"
            :color="fillColor"
            :strokeColor="strokeColor"
            :stroke="strokeSize"
            :style="`transform: scale(${secondaryIconScale})`"
          />
        </span>
      </div>
    </div>
  </div>
</template>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style scoped>
input[type="range"] {
  background: transparent;
  appearance: none;
  width: 100%;
}

input[type="range"]:focus {
  outline: none;
}

input[type="range"]::-webkit-slider-runnable-track {
  @apply .cursor-pointer .w-full .h-1 .bg-grey-light;
}

input[type="range"]::-webkit-slider-thumb {
  @apply .w-4 .bg-white .cursor-pointer .border .border-solid .border-black;
  height: 18px;
  appearance: none;
  margin-top: -7px;
}
</style>
