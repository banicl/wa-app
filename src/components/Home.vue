<template>
  <div class="home">
    <div class="overlay">
      <img src="@/assets/title.png" alt="Home Image" class="home-image" />
      <div class="cta-buttons">
        <router-link to="/login" class="cta-button" @mouseenter="playLoginSound">
          登录
        </router-link>
        <router-link to="/register" class="cta-button" @mouseenter="playRegisterSound">
          注册
        </router-link>
      </div>
      <footer class="footer">
        <div class="footer-left">
          
        </div>
        <div class="footer-right">
          <b><p>🕒 {{ currentTime }}</p>
          <p>📆 {{ currentDate }}</p></b>
        </div>
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
      currentTime: this.getCurrentTime(),
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
    getCurrentTime() {
      const now = new Date();
      const options = { hour12: false, hour: 'numeric', minute: 'numeric', second: 'numeric' };
      return now.toLocaleTimeString('zh-CN', options); // Display time in Chinese format
    },
    getCurrentDate() {
      const now = new Date();
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return now.toLocaleDateString('zh-CN', options); // Display date in Chinese
    },
  },
  mounted() {
    setInterval(() => {
      this.currentTime = this.getCurrentTime();
      this.currentDate = this.getCurrentDate();
    }, 1000); // Update every second
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
  font-family: 'Noto Serif SC', serif;
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
  justify-content: space-between;
  align-items: center;
  background-color: whitesmoke; 
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  color: black;
  border-top: 5px solid black;
  padding: 0px 30px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding-top: 15px;
}

.footer-left {
  display: flex;
  align-items: center;
}

.footer-right {
  text-align: right;
} 
</style>

