import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router/index';
import store from './store'; 
import '@fortawesome/fontawesome-free/css/all.css'; 

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store, 
  render: h => h(App)
}).$mount('#app');
