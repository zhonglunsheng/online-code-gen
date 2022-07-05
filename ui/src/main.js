import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './utils/request'
import ElementUI from 'element-ui' //引入element-ui库

import 'element-ui/lib/theme-chalk/index.css' //引入element-ui样式


Vue.config.productionTip = false

Vue.use(ElementUI) //全局注册element-ui

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
