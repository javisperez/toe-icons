<script>
import IconPreview from "./IconPreview.vue";
import iconsList from "@toe-icons/icons/dist/icons-info.json";
import iconsTags from "@toe-icons/icons/dist/icons-tags.json";

const VERSION = require("../../package.json").version;

export default {
  name: "icons-list",

  props: {
    filterBy: String
  },

  components: {
    IconPreview
  },

  data() {
    return {
      iconsList,
      version: VERSION
    };
  },

  methods: {
    isMatch(icon) {
      if (!this.filterBy) {
        return true;
      }

      const terms = this.filterBy.split(" ").map(w => w.toLowerCase());
      const tags = iconsTags[icon];

      return terms.some(
        term => icon.includes(term) || tags.some(t => t.includes(term))
      );
    },

    isActive(icon) {
      return this.$route.params.icon === icon;
    }
  },

  computed: {
    filteredIcons() {
      const filteredValues = {};
      const { iconsList, isMatch } = this;
      for (const icon in iconsList) {
        if (!isMatch(icon)) {
          continue;
        }

        filteredValues[icon] = iconsList[icon];
      }

      return filteredValues;
    }
  }
};
</script>

<template>
  <div class="icons-list">
    <div class="flex justify-between items-center mb-4">
      <span>
        <span v-if="filterBy"
          >Showing {{ Object.keys(filteredIcons).length }} of</span
        >
        {{ Object.keys(iconsList).length }} icons available
      </span>
      <span class="text-sm text-black md:text-gray-400 hover:text-black"
        >latest version: {{ version }}</span
      >
    </div>

    <div class="flex flex-wrap flex-col md:flex-row">
      <div
        class="md:px-2 mb-4 md:w-1/4 icon-preview"
        v-for="(path, icon) in filteredIcons"
        :key="icon"
      >
        <div class="w-full">
          <router-link
            :to="'/icons/' + icon"
            class="no-underline text-gray-700 hover:text-black"
          >
            <IconPreview :icon="icon" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scooped>
.icon-preview {
  box-sizing: border-box;
}

.icon-preview:first-child,
.icon-preview:nth-child(4n + 5) {
  padding-left: 0;
}

.icon-preview:nth-child(4n + 4) {
  padding-right: 0;
}
</style>
