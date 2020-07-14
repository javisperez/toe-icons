import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import ToeIcons from "@toe-icons/vue";

import "@/assets/css/tailwind.css";

Vue.config.productionTip = false;

Vue.use(ToeIcons);

new Vue({
  router,
  render: h => h(App),
}).$mount("#app");
