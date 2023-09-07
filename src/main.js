import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router/index';
import store from './store/index';
import axios from 'axios';

Vue.config.productionTip = false;

const storedToken = localStorage.getItem('authToken');

if (storedToken) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;

  axios.get('http://localhost:3000/api/auth/verify-token')
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
