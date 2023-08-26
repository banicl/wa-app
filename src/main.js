import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router/index';
import '@fortawesome/fontawesome-free/css/all.css'; // Import the Font Awesome CSS

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router, // Use the router instance
  render: h => h(App)
}).$mount('#app');
