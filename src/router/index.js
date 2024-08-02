import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import auth from '../stores/auth';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/requestedit/:id',
    name: 'RequestEdit',
    component: () => import('../views/RequestEditView.vue'),
    meta: { requiresAuth: true },
    props: true
  },
  {
    path: '/requestlist',
    name: 'requestlist',
    component: () => import('../views/RequestListView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/supportform',
    name: 'supportform',
    component: () => import('../views/SupportFormView.vue'),
    meta: { requiresAuth: true }
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    next('/');
  } else {
    next();
  }
});

export default router;
