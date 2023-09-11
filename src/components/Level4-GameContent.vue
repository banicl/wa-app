<template>
    <div>
      <div v-if="!gameOver">
        <h2>Match the Year to the Chinese Zodiac! 🐉🧧</h2>
        <h3>Can you pair the correct year with its Zodiac sign?</h3>
  
        <!-- Display the current year -->
        <div class="year">
          <p>{{ currentYear }}</p>
        </div>
  
        <!-- Display the shuffled answer choices in a row -->
        <div class="choice-row">
          <button
            class="game-choice-button"
            v-for="(choice, index) in shuffledChoices"
            :key="index"
            @click="checkAnswer(choice)"
          >
            <b>{{ choice }}</b>
          </button>
        </div>
      </div>
  
      <div v-if="correctAnswer">
        <br />
        <audio ref="correctSound" src="@/assets/sounds/correct-answer.mp3"></audio>
        <p>Correct! Moving to the next year. 🎉👍<br /><b>+25 points 💯</b></p>
      </div>
  
      <div v-if="wrongAnswer">
        <br />
        <audio ref="wrongSound" src="@/assets/sounds/wrong-answer.mp3"></audio>
        <p>Wrong answer. Please try again. ❌🙁<br /><b>-5 points</b></p>
      </div>
  
      <div v-if="gameOver">
        <audio
          ref="backgroundMusic"
          src="@/assets/sounds/level-completed.mp3"
          autoplay
        ></audio>
        <h1>Congratulations! You completed the Chinese Zodiac Level. 🏆🎉</h1>
        <h3>Your Score: {{ score }} 🥇</h3><br />
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
        currentYearIndex: 0,
        answerChoices: [
        'Rat 🐀',
        'Ox 🐂',
        'Tiger 🐅',
        'Rabbit 🐇',
        'Dragon 🐉',
        'Snake 🐍',
        'Horse 🐎',
        'Goat 🐐',
        'Monkey 🐒',
        'Rooster 🐓',
        'Dog 🐕',
        'Pig 🐖'
        ],
        correctAnswerIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        correctAnswerIndex: 0,
        correctAnswer: false,
        wrongAnswer: false,
        gameOver: false,
        years: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
        score: 0,
      };
    },
    computed: {
      currentYear() {
        return this.years[this.currentYearIndex];
      },
      shuffledChoices() {
        const shuffled = [...this.answerChoices].sort(() => Math.random() - 0.5);
        return shuffled;
      },
    },
    methods: {
      checkAnswer(choice) {
        if (choice === this.answerChoices[this.correctAnswerIndices[this.currentYearIndex]]) {
          this.correctAnswer = true;
          this.$nextTick(() => {
            this.$refs.correctSound.play();
          });
          this.score += 25;
          setTimeout(() => {
            this.correctAnswer = false;
            this.moveToNextYear();
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
      moveToNextYear() {
        if (this.currentYearIndex < this.years.length - 1) {
          this.currentYearIndex++;
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
.image {
  max-width: 80%;
  height: 20%;
}

.game-choice-button {
  padding: 10px 20px;
  width: 260px;
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
  flex-basis: calc(25% - 5px); /* Four choices in each row with some spacing */
}

.year {
  text-align: center;
  font-size: 48px;
  margin: 20px 0;
}

.home-icon {
  font-size: 30px;
  cursor: pointer;
  color: black;
}
</style>