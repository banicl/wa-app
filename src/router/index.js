import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import Login from '../components/Login.vue';
import Registration from '../components/Registration.vue';
import LevelsMenu from '../components/LevelsMenu.vue';
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
        path: '/Level1',
        component: Level1,
      },
];

const router = new VueRouter({
    routes,
});

export default router;
