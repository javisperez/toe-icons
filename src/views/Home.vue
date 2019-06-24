<script lang="ts">
import Vue from "vue";
import Button from "../components/Button.vue";
import IconsList from "../components/IconsList.vue";
import SearchBar from "../components/SearchBar.vue";
import IconModal from "../components/IconModal.vue";

const { version: VERSION } = require("../../package.json");

export default Vue.extend({
  name: "home",

  components: {
    Button,
    SearchBar,
    IconsList,
    IconModal
  },

  data() {
    return {
      searchTerm: "",
      downloadLink: `https://api.github.com/repos/javisperez/toe-icons/zipball/v${VERSION}`
    };
  },

  computed: {
    activeIcon(): string {
      return this.$route.params.icon;
    }
  }
});
</script>

<template>
  <div class="home max-w-xl mx-auto">
    <div class="text-center py-32 text-3xl">
      <strong>Toe Icons</strong> is a free basic icons library.
      <div class="flex justify-center max-w-sm mx-auto mt-8">
        <Button variant="primary" :href="downloadLink">
          <TiDownload />Download
        </Button>
      </div>
    </div>

    <SearchBar v-model="searchTerm" />

    <IconsList class="mt-16" :filterBy="searchTerm" />

    <!-- Modal -->
    <transition name="fade">
      <IconModal v-if="activeIcon" :icon="activeIcon" />
    </transition>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
