import axios from 'axios';

const apiUrl = 'http://localhost:3000/api'; // Adjust the API URL to match your backend

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
      // Include any headers or authentication tokens needed
      // headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  },

  // Add more API functions as needed
};

export default api;
