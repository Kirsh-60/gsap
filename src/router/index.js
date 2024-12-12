import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('../views/gsap/index.vue') },
  { path: '/tween', component: () => import('../views/gsap/tween.vue') },
]

const router = createRouter({
  history: createWebHashHistory(),

  routes, // short for `routes: routes`
})

export default router
