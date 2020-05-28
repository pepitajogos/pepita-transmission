import Vue from 'vue'
import VueRouter from 'vue-router'
import End from '@/views/End.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
  },
  {
    path: '/end',
    name: 'end',
    component: End,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
