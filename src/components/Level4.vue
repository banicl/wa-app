<template>
    <div class="level-1">
      <div class="overlay">
        <div class="home-icon" @click="goToLevels">
          <i class="fas fa-home"></i>
        </div>
        <div class="frame">
          <hr class="divider" />
          <div v-if="!gameStarted">
            <h1>十二生肖！Chinese Zodiac!</h1><br>
            <p><b>Welcome to Level 4! 😊🌼</b><br>
                In this level, you'll learn about the Chinese Zodiac and match the animals<br> to their respective years. 🐉 🐍
Each year in the Chinese Zodiac is<br> associated with an animal sign. Let's see if you can match them all! 🧩🤔<br>
              <br>Start by pressing the big red button below. 🔴👇</p>
            <hr class="divider" />
            <button @click="startGame">Start Game</button>
          </div>
          <div v-else>
            <ZodiacGame @gameOver="handleGameOver" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import ZodiacGame from "@/components/Level4-GameContent.vue";
  
  export default {
    name: 'Level4',
    components: {
      ZodiacGame, 
    },
    data() {
      return {
        gameStarted: false,
      };
    },
    methods: {
      startGame() {
        this.gameStarted = true;
      },
      handleGameOver() {
        const level4Score = 300;
        this.$store.dispatch('updateTotalScore', level4Score);
      },
      goToLevels() {
        this.$router.push('LevelsMenu');
      },
    },
  };
  </script>

<style scoped>
.level-1 {
  position: relative;
  height: 100vh;
  background-image: url('~@/assets/levels-background.svg');
  background-size: cover;
  background-position: center;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: black;
}

.frame {
  padding: 20px 50px 50px 50px;
  padding-left: 40px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(225, 225, 225, 0.8) 100%);
  border: 2px solid white;
  border-radius: 10px;
  max-width: 1200px;
  text-align: center;
  max-height: 90%;
  overflow-y: auto; 
}

h2 {
  font-size: 2rem;
  margin-bottom: 50px;
}

.study-part {
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.study-text {
  text-align: left;
  flex: 1;
  padding: 20px;
}

.study-images img {
  max-width: 150px;
  height: auto;
  margin: 0 10px;
}

.interactive-greeting {
  text-align: center;
}

button {
  padding: 10px 20px;
  font-size: 1.2rem;
  background-color: #e74c3c;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #C23020; 
}

.greeting-display {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chinese-characters {
  font-size: 25px;
  margin-right: 10px;
}

.voice-icon {
  font-size: 1.5rem;
  cursor: pointer;
}

.greetings-section {
  margin-top: 50px;
  text-align: center;
  padding-left: 20px;
}

.greeting-buttons {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

.greeting-buttons button {
  padding: 10px;
  font-size: 1.2rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

button img {
  width: 150px;
  height: 150px;
  background-color: transparent;
}

.divider {
  border: 0;
  border-top: 1px solid #ccc; 
  margin: 20px 0;
}

.self-introduction {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.video-container {
  width: 60%;
  padding-right: 10px;
  height: 100%; 
}

.text-container {
  width: 40%;
  padding-left: 10px;
  height: 100%; 
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