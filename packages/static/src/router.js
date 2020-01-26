import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import IconDetail from "./components/IconDetail";

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/icons",
      redirect: "/"
    },
    {
      path: "/icons/:icon/:tab?",
      name: "icon-detail",
      component: IconDetail
    }
  ]
});
