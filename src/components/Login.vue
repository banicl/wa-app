<template>
  <div class="login">
    <div class="background-overlay"></div>
    <div class="overlay">
      <h2> 登录 / Login 🔐</h2>
    <div class="login-form">
      <form @submit.prevent="login">
        <input type="text" v-model="username" placeholder="Username" required />
        <input type="password" v-model="password" placeholder="Password" required />
        <button type="submit">🚀 Let's Go!</button>
      </form><br>
      <p>Don't have an account? <router-link to="/registration">Register here!</router-link>🌟</p>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      
    },
  },
};
</script>

<style scoped>
.background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  z-index: -1;
}

.login {
  position: relative;
  height: 100vh;
  background-image: url('~@/assets/login-bg3.svg');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.overlay {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  position: relative;
}

input {
  display: block;
  margin: 1rem auto;
  padding: 0.7rem;
  border: none;
  border-radius: 5px;
  width: 100%;
  max-width: 500px;
  font-size: 16px;
}

button {
  background-color: #ffb2b2;
  color: white;
  padding: 0.7rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #ff8080;
}
</style>
