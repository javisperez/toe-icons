import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./views/Home";
import IconDetail from "./components/IconDetail";

export default createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/icons",
      redirect: "/",
    },
    {
      path: "/icons/:icon/:tab?",
      name: "icon-detail",
      component: IconDetail,
    },
  ],
});
