import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router/index';
import store from './store';
import axios from 'axios';

Vue.use(Vuex);
Vue.config.productionTip = false;

const api = axios.create({
  baseURL: 'https://wa-app-backend.onrender.com',
});

Vue.prototype.$api = api;

const storedToken = localStorage.getItem('authToken');

if (storedToken) {
  api.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;

  api
    .get('/api/auth/verify-token')
    .then(() => {
      store.commit('SET_AUTHENTICATED', true);
    })
    .catch(() => {
      localStorage.removeItem('authToken');
      store.commit('SET_AUTHENTICATED', false);
    });
}

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
