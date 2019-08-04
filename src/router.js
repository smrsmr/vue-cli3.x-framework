import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  // mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "*", redirect: "/home/home" },
    {
      path: "/home/home",
      name: "home",
      component: () => import("./views/home/home.vue"),
      meta: {
        // 页面标题title
        title: "主页",
        keepAlive: false
      }
    }
  ]
});
