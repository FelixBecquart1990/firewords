import Vue from "vue";
import Router from "vue-router";
import Home from "@/pages/Home";
import Ranking from "@/pages/Ranking";
import AuthGuard from "./auth-guard";

import Dashboard from "@/dashboard/Home";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "*",
      redirect: "/"
    },
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
      beforeEnter: AuthGuard
    },
    {
      path: "/ranking",
      name: "Ranking",
      component: Ranking
    }
  ]
});
