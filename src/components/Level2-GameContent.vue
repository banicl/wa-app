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
  
        <!-- Display the current Arabic number above the Chinese numbers -->
        <div class="current-arabic-number">👉  {{ currentNumber }}  👈</div>
  
        <!-- Display feedback for correct and wrong answers -->
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
        arabicNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], // Arabic numerals
        chineseNumbers: ['一 (yī)', '二 (èr)', '三 (sān)', '四 (sì)', '五 (wǔ)', '六 (liù)', '七 (qī)', '八 (bā)', '九 (jiǔ)', '十 (shí)'], // Corresponding Chinese numbers
        currentNumberIndex: 0, // Index of the current number
        currentNumber: 1, // Current Arabic numeral to match (start with 1)
        correctAnswer: false, // Flag to display correct answer message
        wrongAnswer: false, // Flag to display wrong answer message
        gameOver: false, // Flag to display game over message
        score: 0, // Initialize the score
      };
    },
    methods: {
      startGame() {
        this.moveToNextNumber(); // Start with the first number
      },
      moveToNextNumber() {
        if (this.currentNumberIndex < this.arabicNumbers.length) {
          this.currentNumber = this.arabicNumbers[this.currentNumberIndex];
        } else {
          this.gameOver = true;
        }
      },
      checkNumber(chineseNumber) {
        if (chineseNumber === this.chineseNumbers[this.currentNumber - 1]) {
          this.correctAnswer = true;
          this.$nextTick(() => {
            this.$refs.correctSound.play();
          });
          this.score += 20; // Add points for a correct answer
          setTimeout(() => {
            this.correctAnswer = false;
            this.currentNumberIndex++;
            this.moveToNextNumber();
          }, 1000); // Automatically proceed after 1 second
        } else {
          this.wrongAnswer = true;
          this.$nextTick(() => {
            this.$refs.wrongSound.play();
          });
          this.score -= 5; // Deduct points for a wrong answer
          setTimeout(() => {
            this.wrongAnswer = false;
          }, 1000); // Hide the message after 1 second
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
  