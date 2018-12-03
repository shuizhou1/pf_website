// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI, { Carousel } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'

import Swiper from 'swiper'; 
import 'swiper/dist/css/swiper.min.css';


import BaiduMap  from 'vue-baidu-map'// 百度地图
import carousel3d from 'vue-carousel-3d'

Vue.use(ElementUI)
Vue.use(carousel3d)

Vue.use(BaiduMap, {
  ak: "m2xAiidueSdKT6ljTPFL3ZGTaTbbZHnm"
});
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
