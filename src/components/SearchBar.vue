<script>
export default {
  name: "search-bar",

  props: {
    value: String
  },

  methods: {
    onSearch(e) {
      this.$emit("input", e.target.value);
    },

    clearSearch() {
      this.$emit("input", "");
      this.$refs.searchInput.focus();
    }
  }
};
</script>

<template>
  <div class="search-bar-container">
    <div class="bg-white shadow rounded flex items-center">
      <ti-search class="mr-2 py-4 pl-4"/>
      <input
        class="h-full border-none block outline-none flex-auto text-base py-4"
        type="text"
        autofocus
        ref="searchInput"
        :value="value"
        @input="onSearch"
        placeholder="Search icons..."
      >
      <span @click="clearSearch" class="ml-2 py-4 pr-4 cursor-pointer" v-show="value">
        <ti-times size="18" class="align-middle"/>
      </span>
    </div>
  </div>
</template>
