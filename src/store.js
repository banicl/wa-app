import Vue from 'vue';
import Vuex from 'vuex';
import router from './router/index';
import api from './api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuthenticated: false,
    currentUser: null,
    totalScore: 0,
    
  },
  mutations: {
    SET_AUTHENTICATED(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
    SET_USER(state, user) {
      state.currentUser = user;
    },
    SET_TOTAL_SCORE(state, score) {
      state.totalScore = score;
    },
  },
  actions: {
    async login({ commit }, { username, password }) {
      try {
        const isAuthenticated = await authenticate(username, password);
  
        if (isAuthenticated) {
          commit('SET_AUTHENTICATED', true);
  
          const userData = await api.getUserProfile();
          commit('SET_USER', userData); 
  
          localStorage.setItem('authToken', 'yourAuthToken'); 
          console.log('Authentication successful.');
          console.log('User data:', userData);

          return true; 
        } else {
          console.log('Authentication failed.');
          return false; 
        }
      } catch (error) {
        console.error('Login error:', error);
        return false; 
      }
    },
    logout({ commit }) {
      commit('CLEAR_USER');
      localStorage.removeItem('authToken'); 

      router.push('/');
    },
    updateTotalScore({ commit, state }, score) {
      const currentTotalScore = state.totalScore;
      const newTotalScore = currentTotalScore + score;
      commit('SET_TOTAL_SCORE', newTotalScore);
    },
    
  },
  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
    currentUser: (state) => state.currentUser,
    totalScore: (state) => state.totalScore,
  },
});


async function authenticate(username, password) {
  
  return username === 'username' && password === 'password';
}
