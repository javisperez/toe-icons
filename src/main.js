import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import ToeIcons from "./plugins/VueComponents";

import "@/assets/css/tailwind.css";

Vue.config.productionTip = false;

Vue.use(ToeIcons);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
