import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('../components/Login.vue')
    },
    {
      path: '/product',
      name: 'Product',
      component: () => import('../components/Product.vue')
    },
    {
      path: '/card',
      name: 'Card',
      component: () => import('../components/Card.vue')
    },
    {
      path: '/poll',
      name: 'Poll',
      component: () => import('../components/Poll.vue')
    }
  ]
})

export default router
