import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router/index';
import store from './store'; // Import your Vuex store
import axios from 'axios';

Vue.config.productionTip = false;

// Check if the user is already authenticated using a stored token
const storedToken = localStorage.getItem('authToken');

if (storedToken) {
  // Set the authentication token in Axios headers
  axios.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;

  // Verify the token with your backend
  axios
    .get('http://localhost:3000/api/auth/verify-token')
    .then(() => {
      // If the token is valid, set the user as authenticated in the Vuex store
      store.commit('SET_AUTHENTICATED', true);
    })
    .catch(() => {
      // If the token is invalid, remove it and set the user as unauthenticated
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
