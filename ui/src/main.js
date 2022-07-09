import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './utils/request'

import ViewUIPlus from 'view-ui-plus'
import 'view-ui-plus/dist/styles/viewuiplus.css'


Vue.config.productionTip = false

Vue.use(ViewUIPlus) //全局注册element-ui

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
