<template>
    <div>
      <div v-if="!gameOver">
        <h2>Choose the correct answer! 🤔</h2>
        <h3>What greeting would you use according to the picture? 🖼️🗣️</h3>
        <transition name="fade" mode="out-in">
        <img :src="currentImage" alt="Image" />
        </transition>
  
        <!-- Display the answer choices in two rows -->
        <div class="choice-rows">
          <div class="choice-row" v-for="(choice, index) in answerChoices" :key="index">
            <button class="game-choice-button" @click="checkAnswer(choice)">
              <b>{{ choice }}</b>
            </button>
          </div>
        </div>
      </div>

      <div v-if="correctAnswer">
        <br>
        <audio ref="correctSound" src="@/assets/sounds/correct-answer.mp3"></audio>
        <p>Correct! Moving to the next image.🎉👍<br><b>+25 points 💯</b></p>
      </div>

      <div v-if="wrongAnswer">
        <br>
        <audio ref="wrongSound" src="@/assets/sounds/wrong-answer.mp3"></audio>
        <p>Wrong answer. Please try again.❌🙁<br><b>-5 points</b></p>
      </div>
  
      <div v-if="gameOver">
        <audio ref="backgroundMusic" src="@/assets/sounds/level-completed.mp3" autoplay></audio>
        <h1>Congratulations! You completed the level.🏆🎉</h1>
        <h3>Your Score: {{ score }} 🥇</h3><br>
        <div class="home-icon" @click="goToLevels">
            <i class="fas fa-home"></i>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentImageIndex: 0,
        answerChoices: ['你好 (nǐ hǎo) 👋', '早上好 (zǎo shàng hǎo) ☕️', ' 晚上好 (wǎn shàng hǎo) 🌙', ' 下午好 (xià wǔ hǎo) ☀️'],
        correctAnswerIndices: [0, 1, 3, 2, 2, 1, 0, 3], 
        correctAnswerIndex: 0, 
        correctAnswer: false, 
        wrongAnswer: false, 
        gameOver: false,
        images: [
          'hello.gif',
          'good-morning.gif',
          'good-afternoon.gif',
          'good-evening.gif',
          'good-evening.png',
          'good-morning.png',
          'hello2.gif',
          'good-afternoon.png',
        ],
        score: 0, 
      };
    },
    computed: {
      currentImage() {
        return require(`@/assets/${this.images[this.currentImageIndex]}`);
      },
    },
    methods: {
      checkAnswer(choice) {
        if (choice === this.answerChoices[this.correctAnswerIndices[this.currentImageIndex]]) {
          this.correctAnswer = true;
          this.$nextTick(() => {
            this.$refs.correctSound.play();
          });
          this.score += 25; 
          setTimeout(() => {
            this.correctAnswer = false;
            this.moveToNextImage();
          }, 2000); 
        } else {
          this.wrongAnswer = true;
          this.$nextTick(() => {
            this.$refs.wrongSound.play();
          });
          this.score -= 5; 
          setTimeout(() => {
            this.wrongAnswer = false;
          }, 5000); 
        }
      },
      moveToNextImage() {
        if (this.currentImageIndex < this.images.length - 1) {
          this.currentImageIndex++;
        } else {
          this.gameOver = true;
        }
      },
      goToLevels() {
      this.$router.push('LevelsMenu');
    },
    },
    mounted() {
      this.$refs.backgroundMusic.volume = 1;
      this.$refs.backgroundMusic.play();
    },
  };
  </script>

<style scoped>
.game-choice-button {
  padding: 10px 20px;
  width: 300px;
  font-size: 20px;
  background-color: #e74c3c;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin: 5px;
}

.game-choice-button:hover {
  background-color: #C23020;
}

.choice-rows {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.choice-row {
  flex-basis: calc(50% - 5px);
}

.home-icon {
  font-size: 30px;
  cursor: pointer;
  color: black; 
}

</style>
