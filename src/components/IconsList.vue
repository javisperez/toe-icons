<script lang="ts">
import Vue from "vue";
import IconPreview from "./IconPreview.vue";
import iconsList from "../../dist/icons.json";
import iconsTags from "../../dist/icons-tags.json";

const VERSION = require("../../package.json").version;

// @TODO these types should be imported from the `types.ts` file but vue-cli doesnt like mixing `.ts` with `.vue` atm
type EmptyObject = { [key: string]: never };
type IconTags = { [key: string]: string[] };
type IconData = { [key: string]: string };
type MultiLevelObject = { [key: string]: {} };

type State = {
  iconsList: IconData;
  version: string;
};

export default Vue.extend({
  name: "icons-list",

  props: {
    filterBy: String
  },

  components: {
    IconPreview
  },

  data(): State {
    return {
      iconsList,
      version: VERSION
    };
  },

  methods: {
    isMatch(icon: string): boolean {
      if (!this.filterBy) {
        return true;
      }

      const terms: string[] = this.filterBy
        .split(" ")
        .map(w => w.toLowerCase());
      const tags: string[] = (iconsTags as IconTags)[icon];

      return terms.some(
        (term: string) =>
          icon.includes(term) || tags.some((t: string) => t.includes(term))
      );
    },

    isActive(icon: string): boolean {
      return this.$route.params.icon === icon;
    }
  },

  computed: {
    filteredIcons(): object {
      const filteredValues: MultiLevelObject = {};
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
});
</script>

<template>
  <div class="icons-list">
    <h4 class="flex justify-between items-center">
      <span>
        <span v-if="filterBy">Showing {{ Object.keys(filteredIcons).length }} of</span>
        {{ Object.keys(iconsList).length }} icons available
      </span>
      <span
        class="text-sm text-black md:text-grey-light hover:text-black"
      >latest version: {{ version }}</span>
    </h4>
    <div class="flex flex-wrap flex-col md:flex-row">
      <div
        class="md:px-2 mb-4 md:w-1/4 icon-preview"
        v-for="(path, icon) in filteredIcons"
        :key="icon"
      >
        <div class="w-full">
          <router-link
            :to="'/icons/' + icon"
            class="no-underline text-grey-darker hover:text-black"
          >
            <IconPreview :type="icon"/>
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
