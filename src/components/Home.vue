<template>
  <div class="home">
    <div class="overlay">
      <img src="@/assets/title.png" alt="Home Image" class="home-image" />
      <div class="cta-buttons">
        <router-link to="/Login" class="cta-button" @mouseenter="playLoginSound">
          登录 / Login 🔐 </router-link>
        <router-link to="/registration" class="cta-button" @mouseenter="playRegisterSound">
        注册 / Register 📝</router-link>
      </div>
      <footer class="footer">
          <b>© FIPU &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 📆 {{ currentDate }} &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Made with 💓.</b>
      </footer>
    </div>
  </div>
</template>

<script>
import loginSound from "@/assets/sounds/login-sound.mp3";
import registerSound from "@/assets/sounds/register-sound.mp3";

export default {
  name: 'Home',
  data() {
    return {
      loginAudio: new Audio(loginSound),
      registerAudio: new Audio(registerSound),
      currentDate: this.getCurrentDate(),
    };
  },
  methods: {
    playLoginSound() {
      this.loginAudio.play();
    },
    playRegisterSound() {
      this.registerAudio.play();
    },
    getCurrentDate() {
      const now = new Date();
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return now.toLocaleDateString('zh-CN', options); 
    },
  },
  mounted() {
    setInterval(() => {
      this.currentDate = this.getCurrentDate();
    }, 1000); 
  },
};
</script>

<style scoped>
.home {
  position: relative;
  height: 100vh;
  background-image: url('~@/assets/background.gif');
  background-size: cover;
  background-position: center;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
}

.home-image {
  max-width: 100%; 
  height: auto;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

.cta-button {
  padding: 0.5rem 1rem;
  background-color: #b71c1c;
  color: white;
  text-decoration: none;
  text-align: center;
  font-size: 25px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #7f0000;
}
.footer {
  display: flex;
  justify-content: center; 
  align-items: center;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.8); 
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  color: whitesmoke;
  border-top: 5px solid black;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px; 
}

</style>

