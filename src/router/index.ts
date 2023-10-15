import { createRouter, createWebHistory } from 'vue-router'
import HomeViewVue from '@/views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeViewVue
    },
    {
      path: '/counter',
      name: 'counter',
      component: ()=> import('@/modules/counter/views/CounterView.vue')
    },
    {
      path: '/setup',
      name: 'setup',
      component: ()=> import('@/modules/counter/views/CounterViewSetup.vue')
    },

  ]
})

export default router
