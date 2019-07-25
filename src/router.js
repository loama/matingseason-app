import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/home.vue'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    { path: '*', redirect: '/home' }
  ]
})
