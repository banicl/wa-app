import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import Login from '../components/Login.vue';
import Registration from '../components/Registration.vue';
import LevelsMenu from '../components/LevelsMenu.vue';
import store from '@/store/index'; 
import Level1 from '../components/Level1.vue';
import Level2 from '../components/Level2.vue';
import Level3 from '../components/Level3.vue';
import Level4 from '../components/Level4.vue';
import Level5 from '../components/Level5.vue';
import Level6 from '../components/Level6.vue';
import Level7 from '../components/Level7.vue';
import Level8 from '../components/Level8.vue';
import Level9 from '../components/Level9.vue';
import Level10 from '../components/Level10.vue';

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
  {
    path: '/Level2',
    component: Level2,
  },
  {
    path: '/Level3',
    component: Level3,
  },
  {
    path: '/Level4',
    component: Level4,
  },
  {
    path: '/Level5',
    component: Level5,
  },
  {
    path: '/Level6',
    component: Level6,
  },
  {
    path: '/Level7',
    component: Level7,
  },
  {
    path: '/Level8',
    component: Level8,
  },
  {
    path: '/Level9',
    component: Level9,
  },
  {
    path: '/Level10',
    component: Level10,
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
