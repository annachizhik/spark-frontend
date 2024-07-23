import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/CategoriesView.vue'

const routes = [
  {
    path: '/vue-home',
    name: 'vueHome',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/AboutView.vue')
  },
  {
    path: '/',
    name: 'categories',
    component: HomeView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
