import Vue from 'vue';
import Vuex from 'vuex';
import router from './router/index';

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
    SET_CURRENT_USER(state, user) {
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
          commit('SET_CURRENT_USER', { username }); // You can set user data here
          localStorage.setItem('authToken', 'yourAuthToken'); // Replace with your auth token
          console.log('Authentication successful.');
          return true; // Authentication successful
        } else {
          console.log('Authentication failed.');
          return false; // Authentication failed
        }
      } catch (error) {
        console.error('Login error:', error);
        return false; // Authentication failed due to an error
      }
    },
    logout({ commit }) {
      commit('CLEAR_USER');
      localStorage.removeItem('authToken'); 

      router.push('/');
    },
    updateTotalScore({ commit }, score) {
      commit('SET_TOTAL_SCORE', score);
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
