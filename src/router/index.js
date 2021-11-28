import { createRouter, createWebHistory } from 'vue-router';
import store from '../store/index';
import Home from '../views/Home.vue';
import Help from '../views/Help.vue';
import Auth from '../views/Auth.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'main',
      auth: true,
    },
  },
  {
    path: '/help',
    name: 'Help',
    component: Help,
    meta: {
      layout: 'main',
      auth: true,
    },
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    meta: {
      layout: 'auth',
      auth: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiredAuth = to.meta.auth;

  if (requiredAuth && store.getters['auth/isAuthenticated']) {
    next();
  } else if (requiredAuth && !store.getters['auth/isAuthenticated']) {
    next('/auth?message=auth');
  } else {
    next();
  }
});

export default router;
