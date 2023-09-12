<template>
  <div class="user-profile">
    <div class="overlay">
      <div class="home-icon" @click="goToLevels">
        <i class="fas fa-home"></i>
      </div>
      <div class="profile-frame">
        <div class="user-content">
          <i class="fas fa-user user-icon"></i><br><br>
          <h2>USER PROFILE</h2>
          <div class="username" v-if="currentUser">
            <p>Username: <b>{{ currentUser.username }}</b> 😊</p>
          </div>
          <div class="total-score">
            <p>Total Score: <b>{{ computedTotalScore }}</b> 🏆</p>
          </div><br>
          <button @click="performLogout">Log Out</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['currentUser', 'totalScore']),
    computedTotalScore() {
      return this.totalScore;
    },
  },
  methods: {
    ...mapActions(['logout']),
    performLogout() {
      this.logout();
    },
    goToLevels() {
      this.$router.push('LevelsMenu');
    },
  },
};
</script>


<style scoped>
.user-profile {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('~@/assets/profile-background.gif');
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

.profile-frame {
  background-color: rgba(255, 255, 255, 0.8); 
  border: 2px solid #ccc;
  border-radius: 10px; 
  padding: 30px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3); 
  width:400px;
  height: 350px;
}

.user-content {
  text-align: center;
  color: #333; 
}

.user-icon {
  font-size: 48px;
}

h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

total-score {
  font-size: 18px;
  font-weight: bold;
}

button {
  background-color: rgb(90, 90, 90);
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;
}

button:hover {
  background-color: rgb(60, 60, 60);
}

.home-icon {
  position: absolute;
  top: 20px;
  left: 30px; 
  font-size: 30px;
  cursor: pointer;
  color: #333;
}
</style>
