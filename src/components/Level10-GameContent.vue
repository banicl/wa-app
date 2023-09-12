<template>
    <div>
      <div v-if="!gameOver">
        <h2>Match the English Place to the Chinese Translation! 🏢🏪</h2>
        <h3>Can you pair the correct Chinese translation with its English place name?</h3>
  
        <div class="place">
          <p>{{ currentPlace }}</p>
        </div>
  
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
        <p>Correct! Moving to the next place. 🎉👍<br /><b>+25 points 💯</b></p>
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
        <h1>Congratulations! You completed the Places Level. 🏆🎉</h1>
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
        currentPlaceIndex: 0,
        answerChoices: [
          'Hospital',
          'Bank',
          'Post Office',
          'Park',
          'Restaurant',
          'School',
          'Library',
          'Pharmacy',
          'Cinema',
          'Museum',
          'Airport',
          'Hotel',
        ],
        correctAnswerIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        correctAnswerIndex: 0,
        correctAnswer: false,
        wrongAnswer: false,
        gameOver: false,
        chineseTranslations: [
          '医院 (yīyuàn)🏥',
          '银行 (yínháng)🏦',
          '邮局 (yóujú)🏣',
          '公园 (gōngyuán)🏞️',
          '餐厅 (cāntīng)🍽️',
          '学校 (xuéxiào)🏫',
          '图书馆 (túshūguǎn)📚',
          '药店 (yàodiàn)💊',
          '电影院 (diànyǐngyuàn)🎬',
          '博物馆 (bówùguǎn)🏛️',
          '机场 (jīchǎng)🛫',
          '酒店 (jiǔdiàn)🏨',
        ],
        score: 0,
      };
    },
    computed: {
      currentPlace() {
        return this.answerChoices[this.currentPlaceIndex];
      },
      shuffledChoices() {
        const shuffled = [...this.chineseTranslations].sort(() => Math.random() - 0.5);
        return shuffled;
      },
    },
    methods: {
      checkAnswer(choice) {
        if (choice === this.chineseTranslations[this.correctAnswerIndices[this.currentPlaceIndex]]) {
          this.correctAnswer = true;
          this.$nextTick(() => {
            this.$refs.correctSound.play();
          });
          this.score += 25;
          setTimeout(() => {
            this.correctAnswer = false;
            this.moveToNextPlace();
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
      moveToNextPlace() {
        if (this.currentPlaceIndex < this.answerChoices.length - 1) {
          this.currentPlaceIndex++;
        } else {
          this.gameOver = true;
          this.$emit('gameOver');
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
    width: 270px;
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
    flex-basis: calc(25% - 5px); 
  }
  
  .place {
    text-align: center;
    font-size: 24px;
    margin: 20px 0;
  }
  
  .home-icon {
    font-size: 30px;
    cursor: pointer;
    color: black;
  }
  </style>
  