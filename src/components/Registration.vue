<template>
  <div class="register">
    <audio ref="backgroundMusic" src="@/assets/sounds/register-here.mp3" autoplay></audio>
    <div class="background-overlay"></div>
    <div class="home-icon" @click="goToMainPage">
      <i class="fas fa-home"></i>
    </div>
    <div class="overlay">
      <h2> 注册 / Registration 📝</h2>
      <br>
      <p v-if="passwordMismatch" class="error-message">Passwords do not match. 😞</p>
      <p v-if="registrationFailed" class="error-message">Username taken. 😢 Please try another one.</p>
      <div class="login-form">
        <form @submit.prevent="register">
          <input type="text" v-model="username" placeholder="Username" required />
          <input type="password" v-model="password" placeholder="Password" required />
          <input type="password" v-model="confirmPassword" placeholder="Confirm Password" required />
          <button type="submit">🎉 Sign Up!</button>
        </form>
        <br>
        <p>Already have an account? <router-link to="/login">Log in here!</router-link>💫</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Register',
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: '',
      passwordMismatch: false,
      registrationFailed: false,
    };
  },
  methods: {
    async register() {
      try {
        if (this.password !== this.confirmPassword) {
          this.passwordMismatch = true;
          this.registrationFailed = false;
          return;
        }

        const response = await axios.post('http://localhost:3000/api/register', {
          username: this.username,
          password: this.password,
        });

        if (response.status === 201) {
          console.log('Registration successful.');
          this.$router.push('/Login');
        } else {
          this.registrationFailed = true;
          this.passwordMismatch = false;
        }
      } catch (error) {
        console.error('Registration failed:', error);
        this.registrationFailed = true;
        this.passwordMismatch = false;
      }
    },
    goToMainPage() {
      this.$router.push('/');
    },
    mounted() {
      this.$refs.backgroundMusic.volume = 1;
      this.$refs.backgroundMusic.play();
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
.register {
  position: relative;
  height: 100vh;
  background-image: url('~@/assets/bg-gif.gif');
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
  background-color: rgba(0, 255, 0, 0.2);
  color: white;
  padding: 0.7rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: rgba(0, 255, 0, 0.4);
}

.home-icon {
  position: absolute;
  top: 20px;
  left: 30px; 
  font-size: 30px;
  cursor: pointer;
  color: white; 
}
  </style>
  