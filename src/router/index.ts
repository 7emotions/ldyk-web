import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/privacy.html',
    name: 'Privacy',
    component: () => import('../views/Privacy.vue')
  },
  {
    path: '/privacy-policy.html',
    name: 'PrivacyPolicy',
    component: () => import('../views/PrivacyPolicy.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 