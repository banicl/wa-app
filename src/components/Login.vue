<template>
  <div class="login">
    <div class="login-tile">
      <h3>你好！Hello! 👋</h3>
      <h5>Glad to see you back! 😄</h5>
      <br><img src="@/assets/liu3.png" alt="Liu 3" class="small-image">
    </div>
    <div class="overlay">
      <h2> 登录 / Login 🔐</h2>
    <div class="login-form">
      <form @submit.prevent="login">
        <input type="text" v-model="username" placeholder="Username" required />
        <input type="password" v-model="password" placeholder="Password" required />
        <button type="submit">🚀 Let's Go!</button>
      </form>
    </div>
    </div>
    <div class="login-tile">
      <h2>AHHHHH</h2>
      <br><img src="@/assets/liu3.png" alt="Liu 3" class="small-image">
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
      // Handle login logic here
    },
  },
};
</script>

<style scoped>

.small-image {
  max-width: 100%;
  height: auto;
  margin-top: 1rem;
}
.login-tile {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  width: 200px; 
  height:270px;
  margin: 0 20px; 
}
.login {
  position: relative;
  height: 100vh;
  background-image: url('~@/assets/background.gif');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  height:270px;
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
