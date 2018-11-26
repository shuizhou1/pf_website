import Vue from 'vue'
import Router from 'vue-router'
import homePage from '../components/homePage.vue'
import incubate from '../components/incubate'
import cases from '../components/cases'
import solution from '../components/solution'
import about from '../components/about'
import contact from '../components/contact'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "homePage",
      component: homePage
    },
    {
      path: "/incubate",
      name: "incubate",
      component: incubate
    },
    {
      path: "/cases",
      name: "cases",
      component: cases
    },
    {
      path: "/solution",
      name: "solution",
      component: solution
    },
    {
      path: "/about",
      name: "about",
      component: about
    },
    {
      path: "contact",
      name: "/contact",
      component: contact
    },
  ]
});
