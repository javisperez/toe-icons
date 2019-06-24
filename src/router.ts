import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  // mode: "history",
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
      path: "/icons/:icon",
      name: "home-icon",
      component: Home
    }
  ]
});
