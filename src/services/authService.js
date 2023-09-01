import axios from 'axios';

let currentUser = null;

export default {
  async login(username, password) {
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', {
        username: username,
        password: password,
      });

      if (response.status === 200) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error:', error);
      return false;
    }
  },

  logout() {
    currentUser = null;
  },

  isAuthenticated() {
    return currentUser !== null;
  },

  getCurrentUser() {
    return currentUser;
  },
};
