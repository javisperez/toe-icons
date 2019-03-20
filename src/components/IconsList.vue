<script>
import iconsList from "../../dist/icons.json";
import iconsTags from "../../dist/icons-tags.json";
import IconPreview from "./IconPreview.vue";

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
      iconsList
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
    <h4>
      <span v-if="filterBy">Showing {{ Object.keys(filteredIcons).length }} of</span>
      {{ Object.keys(iconsList).length }} icons available
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
  transition: width 0.4s;
}

.icon-preview:first-child,
.icon-preview:nth-child(4n + 5) {
  padding-left: 0;
}

.icon-preview:nth-child(4n + 4) {
  padding-right: 0;
}
</style>
