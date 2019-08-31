<script lang="ts">
import Vue from "vue";
import { component as VueCodeHighlight } from "vue-code-highlight";

export default Vue.extend({
  name: "icon-modal-usage",

  props: {
    icon: {
      type: String,
      required: true
    }
  },

  components: {
    CodeHighlight: VueCodeHighlight
  }
});
</script>

<template>
  <div>
    <h3 class="flex items-center justify-between mt-0">Usages</h3>
    <p>There're many ways to use these icons:</p>

    <h4>With Vue</h4>
    <code-highlight language="html">&lt;TiInfoCircle /&gt;</code-highlight>

    <h4>With CSS</h4>
    <code-highlight language="css">
&lt;style&gt;
  .icon {
    width: 24px;
    height: 24px;
    background: url(./icons/file.svg) no-repeat;
  }
&lt;/style&gt;
    </code-highlight>

    <h4>With HTML</h4>
    <code-highlight language="html">&lt;img src="./icons/file.svg" width="24" height="24" /&gt;</code-highlight>
  </div>
</template>


<style src="../../node_modules/vue-code-highlight/themes/prism-okaidia.css"></style>
