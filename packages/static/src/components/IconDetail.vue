<script>
import { startCase, uniq } from "lodash";
import { component as VueCodeHighlight } from "vue-code-highlight";
import tagsByIcons from "@toe-icons/icons/dist/icons-tags.json";
import IconPreview from "./IconPreview";

export default {
  name: "icon-detail",

  components: {
    VueCodeHighlight,
    IconPreview,
  },

  data() {
    return {
      currentPreviewBg: null,
      svgCopied: false,
    };
  },

  computed: {
    icon() {
      return this.$route.params.icon;
    },

    componentName() {
      return `Ti${startCase(this.icon).replace(/\s/g, "")}`;
    },

    tags() {
      return tagsByIcons[this.icon];
    },

    relatedIcons() {
      const related = [];
      const iconTags = tagsByIcons[this.icon];

      for (const icon in tagsByIcons) {
        if (icon === this.icon) {
          continue;
        }

        for (const tag of tagsByIcons[icon]) {
          if (!iconTags.includes(tag)) {
            continue;
          }

          related.push(icon);
        }
      }

      return uniq(related);
    },
  },

  methods: {
    togglePreviewBackground(color = null) {
      if (color && color === this.currentPreviewBg) {
        this.currentPreviewBg = null;
        return;
      }

      this.currentPreviewBg = color;
    },

    copySvg() {
      const textarea = document.createElement("textarea");
      textarea.value = document.querySelector("#icon-preview").outerHTML;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      this.svgCopied = true;
    },
  },
};
</script>

<template>
  <div class="mt-4">
    <router-link to="/" class="flex mb-8 text-blue-400 hover:text-blue-600">
      <ti-arrow-left />Back to all icons
    </router-link>
    <div class="flex flex-col md:flex-row justify-between mb-32">
      <div class="w-full md:w-1/2">
        <div class="flex">
          <component :is="`ti-${icon}`" size="28" />
          <span class="uppercase font-semibold text-xl">
            {{ icon.replace(/-/g, " ") }}
          </span>
        </div>

        <div class="max-w-lg mt-8">
          <div class="flex">
            <ti-vue />
            <strong>Vue Plugin:</strong>
          </div>
          <div class="bg-gray-700 text-white p-2 rounded text-sm font-mono">
            &lt;{{ componentName }} /&gt;
          </div>
        </div>

        <div class="max-w-lg mt-4">
          <div class="flex">
            <ti-code />
            <strong>HTML:</strong>
          </div>
          <div class="bg-gray-700 text-white p-2 rounded text-sm font-mono">
            &lt;img src="./icons/file.svg" width="24" height="24"/&gt;
          </div>
        </div>
      </div>

      <div class="w-full md:w-1/2">
        <div
          class="border border-solid border-gray-300 w-full h-64 flex items-center justify-center"
          :class="{
            'bg-red-500': currentPreviewBg === 'red',
            'bg-blue-500': currentPreviewBg === 'blue',
            'bg-green-500': currentPreviewBg === 'green',
            'bg-black': currentPreviewBg === 'black',
            'icon-preview-box': !currentPreviewBg,
          }"
        >
          <component :is="`ti-${icon}`" size="256" id="icon-preview" />
        </div>
        <div class="flex justify-between items-center">
          <div
            class="cursor-pointer mt-1 px-2 py-1 rounded text-xs flex items-center font-semibold"
            :class="{
              'bg-blue-500 hover:bg-blue-700 text-white': !svgCopied,
            }"
            @click="copySvg"
          >
            <span>
              <component :is="svgCopied ? 'TiSuccess' : 'TiCopy'" size="24" />
            </span>
            {{ svgCopied ? "Copied" : "Copy SVG" }}
          </div>
          <ul class="flex justify-end">
            <li
              class="w-4 h-4 cursor-pointer hover:bg-gray-100 bg-transparent border border-solid border-gray-400 mt-2 mr-2"
              @click="togglePreviewBackground()"
            ></li>
            <li
              class="w-4 h-4 cursor-pointer hover:bg-red-700 bg-red-500 mt-2 mr-2"
              @click="togglePreviewBackground('red')"
            ></li>
            <li
              class="w-4 h-4 cursor-pointer hover:bg-green-700 bg-green-500 mt-2 mr-2"
              @click="togglePreviewBackground('green')"
            ></li>
            <li
              class="w-4 h-4 cursor-pointer hover:bg-blue-700 bg-blue-500 mt-2 mr-2"
              @click="togglePreviewBackground('blue')"
            ></li>
            <li
              class="w-4 h-4 cursor-pointer hover:bg-black bg-gray-700 mt-2"
              @click="togglePreviewBackground('black')"
            ></li>
          </ul>
        </div>
      </div>
    </div>
    <div v-if="tags">
      <h3 class="font-semibold mb-8 flex">
        <span class="mr-2">
          <ti-tags />
        </span>
        KEYWORDS
      </h3>

      <div class="mt-4 mb-32">
        <ul class="flex">
          <li v-for="tag in tags" :key="tag" class="mx-2">
            <span class="border border-solid rounded-full px-4 py-2">{{
              tag
            }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="relatedIcons.length">
      <h3 class="font-semibold mb-8">RELATED ICONS</h3>
      <div class="flex flex-wrap flex-col md:flex-row">
        <div
          class="md:px-2 mb-4 md:w-1/4 icon-preview"
          v-for="icon in relatedIcons"
          :key="icon"
        >
          <div class="w-full">
            <router-link
              :to="`/icons/${icon}`"
              class="no-underline text-gray-700 hover:text-black"
            >
              <IconPreview :icon="icon" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
$black: #ddd; // config("theme.colors.gray.800");

.icon-preview-box {
  background-image: -moz-linear-gradient(45deg, $black 25%, transparent 25%),
    -moz-linear-gradient(-45deg, $black 25%, transparent 25%),
    -moz-linear-gradient(45deg, transparent 75%, $black 75%),
    -moz-linear-gradient(-45deg, transparent 75%, $black 75%);
  background-image: -webkit-gradient(
      linear,
      0 100%,
      100% 0,
      color-stop(0.25, $black),
      color-stop(0.25, transparent)
    ),
    -webkit-gradient(linear, 0 0, 100% 100%, color-stop(0.25, $black), color-stop(0.25, transparent)),
    -webkit-gradient(linear, 0 100%, 100% 0, color-stop(0.75, transparent), color-stop(0.75, $black)),
    -webkit-gradient(linear, 0 0, 100% 100%, color-stop(0.75, transparent), color-stop(0.75, $black));

  background-size: 20px 20px;
  background-position: 0 0, 50px 0, 50px -50px, 0px 50px;
}

.related-icon:first-child {
  margin-left: 0;
}
.related-icon:last-child {
  margin-right: 0;
}
</style>
