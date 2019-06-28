<script lang="ts">
import Vue from "vue";
import IconModalTabs from "./IconModalTabs.vue";
import IconModalAbout from "./IconModalAbout.vue";
import iconsTags from "../../dist/icons-tags.json";
import IconModalPlayground from "./IconModalPlayground.vue";

// @TODO these types should be imported from 'types.ts'
type IconTags = { [key: string]: string[] };

type State = {
  tags: string[];
};

export default Vue.extend({
  name: "icon-detail",

  props: {
    icon: String
  },

  components: {
    IconModalTabs,
    IconModalAbout,
    IconModalPlayground
  },

  data(): State {
    const { icon } = this;
    const tags = (iconsTags as IconTags)[icon];

    return {
      tags
    };
  },

  computed: {
    isPlayground(): boolean {
      return this.$route.params.tab === "playground";
    }
  }
});
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

      <IconModalTabs :icon="icon" />

      <div class="bg-grey-lightest px-6 py-6 rounded-br rounded-bl">
        <IconModalAbout :icon="icon" v-if="!isPlayground" />
        <IconModalPlayground :icon="icon" v-if="isPlayground" />
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
