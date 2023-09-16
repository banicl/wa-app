import axios from 'axios';

const apiUrl = 'http://localhost:3000/api';

const api = {
  async login(username, password) {
    const response = await axios.post(`${apiUrl}/auth/login`, {
      username,
      password,
    });
    return response.data;
  },

  async register(username, password) {
    const response = await axios.post(`${apiUrl}/auth/register`, {
      username,
      password,
    });
    return response.data;
  },

  async getUserProfile() {
    const response = await axios.get(`${apiUrl}/user/profile`, {
    });
    return response.data;
  },

};

export default api;
