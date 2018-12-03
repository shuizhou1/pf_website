import Vue from "vue";
import Router from "vue-router";
import homePage from "../components/homePage.vue";
import cases from "../components/cases";
import about from "../components/about";
import join from '../components/join.vue'

// 孵化服务

import prototype from "../components/incubate/prototype";
import ui from "../components/incubate/ui";
import develop from "../components/incubate/develop";

// 解决方案
import solution from "../components/solution/solution";
import o2o from "../components/solution/o2o";
import wuliiu from "../components/solution/wuliu";
import hardware from "../components/solution/hardware";
import p2p from "../components/solution/p2p";

Vue.use(Router);

export default new Router({
  mode: "history",
  // 切换页面时滚动条回到页面顶部
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: "/",
      name: "homePage",
      component: homePage
    },
    // 孵化服务
    {
      path: "/prototype",
      name: "prototype",
      component: prototype
    },
    {
      path: "/ui",
      name: "ui",
      component: ui
    },
    {
      path: "/develop",
      name: "develop",
      component: develop
    },
    {
      path: "/cases",
      name: "cases",
      component: cases
    },
    // 解决方案
    {
      path: "/solution",
      component: solution,
      redirect: "/o2o",
      children: [
        {
          path: "/o2o",
          name: "o2o",
          component: o2o
        },
        {
          path: "/wuliu",
          name: "wuliu",
          component: wuliiu
        },
        {
          path: "/hardware",
          name: "hardware",
          component: hardware
        },
        {
          path: "/p2p",
          name: "p2p",
          component: p2p
        }
      ]
    },
    {
      path: "/about",
      name: "about",
      component: about
    },
    {
      path: "/join",
      name: "join",
      component: join
    }
  ]
});
