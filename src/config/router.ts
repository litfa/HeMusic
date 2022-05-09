import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: () =>
      import('@/pages/Search.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router