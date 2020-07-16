<script>
export default {
  name: "search-bar",

  props: {
    value: String,
  },

  methods: {
    onSearch(e) {
      this.$emit("update:value", e.target.value);
    },

    clearSearch() {
      this.$emit("update:value", "");
      this.$refs.searchInput.focus();
    },
  },
};
</script>

<template>
  <div class="search-bar-container">
    <div
      class="bg-white shadow border border-gray-300 border-solid rounded-full flex items-center"
    >
      <div class="text-black w-8 ml-4">
        <ti-search size="24" />
      </div>
      <input
        class="h-full border-none block outline-none flex-auto text-base py-4"
        type="text"
        autofocus
        ref="searchInput"
        :value="value"
        @input="onSearch"
        placeholder="Search icons..."
      />
      <span class="ml-2 py-4 pr-4 cursor-pointer">
        <span @click="clearSearch" v-show="value">
          <ti-times size="18" class="align-middle" />
        </span>
      </span>
    </div>
  </div>
</template>
