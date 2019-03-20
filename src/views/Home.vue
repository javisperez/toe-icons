<script>
import SearchBar from "../components/SearchBar.vue";
import IconsList from "../components/IconsList.vue";
import IconDetail from "../components/IconDetail.vue";

import Button from "../components/Button.vue";

export default {
  name: "home",

  components: {
    Button,
    SearchBar,
    IconsList,
    IconDetail
  },

  data() {
    return {
      searchTerm: ""
    };
  },

  computed: {
    activeIcon() {
      return this.$route.params.icon;
    }
  }
};
</script>

<template>
  <div class="home max-w-xl mx-auto">
    <div class="text-center py-32 text-3xl">
      <strong>Toe Icons</strong>
      is a free basic icons library.
      <div class="flex justify-center max-w-sm mx-auto mt-8">
        <Button variant="primary">
          <ti-download/>Download
        </Button>
      </div>
    </div>

    <SearchBar v-model="searchTerm"/>

    <IconsList class="mt-16" :filterBy="searchTerm"/>

    <!-- Modal -->
    <transition name="fade">
      <IconDetail v-if="activeIcon" :icon="activeIcon"/>
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

