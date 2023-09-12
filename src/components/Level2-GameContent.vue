<template>
    <div>
      <div v-if="!gameOver">
        <h2>Choose the correct answer! 🤔</h2>
        <h3>Click the Chinese number that matches the Arabic number displayed below! 🧩</h3>
        <transition name="fade" mode="out-in">
          <div class="number-tiles">
            <div
              v-for="(chineseNumber, index) in chineseNumbers"
              :key="index"
              class="number-tile"
              @click="checkNumber(chineseNumber)"
            >
              {{ chineseNumber }}
            </div>
          </div>
        </transition>

        <div class="current-arabic-number">👉  {{ currentNumber }}  👈</div>

        <div v-if="correctAnswer">
          <br>
          <audio ref="correctSound" src="@/assets/sounds/correct-answer.mp3"></audio>
          <p>Correct! Keep it up.🎉👍<br><b>+20 points 💯</b></p>
        </div>
  
        <div v-if="wrongAnswer">
          <br>
          <audio ref="wrongSound" src="@/assets/sounds/wrong-answer.mp3"></audio>
          <p>Oops, that's not the right number. Try again.❌🙁<br><b>-5 points</b></p>
        </div>
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
        arabicNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 
        chineseNumbers: ['一 (yī)', '二 (èr)', '三 (sān)', '四 (sì)', '五 (wǔ)', '六 (liù)', '七 (qī)', '八 (bā)', '九 (jiǔ)', '十 (shí)'], 
        currentNumberIndex: 0, 
        currentNumber: 1, 
        correctAnswer: false, 
        wrongAnswer: false, 
        gameOver: false, 
        score: 0,
      };
    },
    methods: {
      startGame() {
        this.moveToNextNumber(); 
      },
      moveToNextNumber() {
        if (this.currentNumberIndex < this.arabicNumbers.length) {
          this.currentNumber = this.arabicNumbers[this.currentNumberIndex];
        } else {
          this.gameOver = true;
          this.$emit('gameOver');
        }
      },
      checkNumber(chineseNumber) {
        if (chineseNumber === this.chineseNumbers[this.currentNumber - 1]) {
          this.correctAnswer = true;
          this.$nextTick(() => {
            this.$refs.correctSound.play();
          });
          this.score += 20;
          setTimeout(() => {
            this.correctAnswer = false;
            this.currentNumberIndex++;
            this.moveToNextNumber();
          }, 1000); 
        } else {
          this.wrongAnswer = true;
          this.$nextTick(() => {
            this.$refs.wrongSound.play();
          });
          this.score -= 5; 
          setTimeout(() => {
            this.wrongAnswer = false;
          }, 1000); 
        }
      },
      goToLevels() {
        this.$router.push('LevelsMenu');
      },
    },
    mounted() {
      this.startGame();
    },
  };
  </script>
  
  <style scoped>
  .number-tiles {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .number-tile {
    padding: 20px;
    font-size: 2rem;
    background-color: #e74c3c;
    color: white;
    text-align: center;
    cursor: pointer;
    border-radius: 10px;
    transition: background-color 0.3s ease;
    margin: 30px;
  }
  
  .number-tile:hover {
    background-color: #C23020;
  }
  
  .current-arabic-number {
    font-size: 3rem;
    text-align: center;
    margin-top: 20px;
  }
  
  .home-icon {
    font-size: 30px;
    cursor: pointer;
    color: black;
  }
  </style>
  