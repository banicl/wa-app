import Vue from 'vue';
import Vuex from 'vuex';
import authService from '@/services/authService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuthenticated: authService.isAuthenticated(),
    currentUser: authService.getCurrentUser(),
  },
  mutations: {
    SET_AUTHENTICATED(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
    SET_CURRENT_USER(state, user) {
      state.currentUser = user;
    },
  },
  actions: {
    login({ commit }, { username, password }) {
     console.log('Attempting login...');
      const isAuthenticated = authService.login(username, password);
      if (isAuthenticated) {
        const user = authService.getCurrentUser();
        commit('SET_AUTHENTICATED', true);
        commit('SET_CURRENT_USER', user);
      }
      console.log('Login result:', isAuthenticated);
      return isAuthenticated;
    },
    logout({ commit }) {
      authService.logout();
      commit('SET_AUTHENTICATED', false);
      commit('SET_CURRENT_USER', null);
      console.log('Logged out.');
    },
  },
  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
    currentUser: (state) => state.currentUser,
  },
});
