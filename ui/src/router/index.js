import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Column from '../views/Column'
import Tpl from '../views/Tpl'

Vue.use(VueRouter)

const routes = [
  {
    path: '/tpl',
    name: 'Tpl',
    component: Tpl
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/column',
    name: 'Column',
    component: Column
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
