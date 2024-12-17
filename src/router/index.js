import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('../views/index.vue') },
  { path: '/gsap', component: () => import('../views/gsap/gsap.vue') },
  { path: '/tween', component: () => import('../views/gsap/tween.vue') },
  { path: '/Timelines', component: () => import('../views/gsap/Timelines.vue') },
  { path: '/config', component: () => import('../views/gsap/config.vue') },
  { path: '/plugins', component: () => import('../views/gsap/plugins.vue') },
]

const router = createRouter({
  history: createWebHashHistory(),

  routes, // short for `routes: routes`
})

export default router
