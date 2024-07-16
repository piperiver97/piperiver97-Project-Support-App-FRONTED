import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/request',
      name: 'request',
    
      component: () => import('../views/RequestEditView.vue')
    },
    {
      path: '/requestedit',
      name: 'requestedit',
    
      component: () => import('../views/RequestEditView.vue')
    },
    {
      path: '/requestlist',
      name: 'requestlist',
      component: () => import('../views/RequestListView.vue')
    },
    {
      path: '/supportform',
      name: 'supportform',
      component: () => import('../views/SupportFormView.vue')
    },
    
  ]
})

export default router
