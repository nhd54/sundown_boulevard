import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  
  {
    path: '/dish',
    name: 'Dish',
    component: () => import('@/views/Dish.vue')
  },

  {
    path: '/drinks',
    name: 'Drinks',
    component: () => import('@/views/Drinks.vue')
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('@/views/Order.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
