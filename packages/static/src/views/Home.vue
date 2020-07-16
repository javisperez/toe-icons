<script>
import Button from "../components/Button.vue";
import IconsList from "../components/IconsList.vue";
import SearchBar from "../components/SearchBar.vue";

const { version: VERSION } = require("../../package.json");

export default {
  name: "home",

  components: {
    Button,
    SearchBar,
    IconsList,
  },

  data() {
    return {
      searchTerm: "",
      downloadLink: `https://api.github.com/repos/javisperez/toe-icons/zipball/v${VERSION}`,
    };
  },
};
</script>

<template>
  <div class="home max-w-4xl mx-auto">
    <div class="text-center py-16 text-3xl">
      <strong>Toe Icons</strong> is a free basic icons library.
      <div class="flex justify-center max-w-sm mx-auto mt-8">
        <Button variant="primary" :href="downloadLink">
          <TiDownload />Download
        </Button>
      </div>
    </div>

    <SearchBar v-model:value="searchTerm" />

    <IconsList class="mt-16" :filterBy="searchTerm" />
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
