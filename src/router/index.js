import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import Login from '../components/Login.vue';
import Registration from '../components/Registration.vue';
import LevelsMenu from '../components/LevelsMenu.vue';
import store from '@/store'; // Import the store
import Level1 from '../components/Level1.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/Login',
    component: Login,
  },
  {
    path: '/Registration',
    component: Registration,
  },
  {
    path: '/LevelsMenu',
    component: LevelsMenu,
  },
  {
    path: '/UserProfile',
    name: 'UserProfile',
    component: () => import('@/components/UserProfile.vue'), 
    meta: { requiresAuth: true },
  },
  {
    path: '/Level1',
    component: Level1,
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
      next('/Login');
    } else {
      next();
    }
  });

export default router;
