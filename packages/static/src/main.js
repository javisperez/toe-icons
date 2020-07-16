import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import ToeIcons from "@toe-icons/vue";

import "@/assets/css/tailwind.css";

createApp(App)
  .use(router)
  .use(ToeIcons)
  .mount("#app");
