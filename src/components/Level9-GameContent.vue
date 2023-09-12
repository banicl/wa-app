<template>
  <div>
    <div v-if="!gameOver">
      <h2>Match the English Word to the Chinese Word! 📚🧮</h2>
      <h3>Can you pair the correct Chinese word with its English word?</h3>

      <div class="word">
        <p>{{ currentWord }}</p>
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
      <p>Correct! Moving to the next word. 🎉👍<br /><b>+25 points 💯</b></p>
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
      <h1>Congratulations! You completed the Chinese Words Level. 🏆🎉</h1>
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
      currentWordIndex: 0,
      answerChoices: [
        'Book',
        'Notebook',
        'Dictionary',
        'Pencil',
        'Pen',
        'Blackboard',
        'Homework',
        'Class',
        'Exam',
        'School',
        'Student',
        'Teacher',
      ],
      correctAnswerIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      correctAnswerIndex: 0,
      correctAnswer: false,
      wrongAnswer: false,
      gameOver: false,
      chineseWords: [
        '书 (shū)📚',
        '笔记本 (bǐjìběn)📓',
        '字典 (zìdiǎn)📖',
        '铅笔 (qiānbǐ)✏️',
        '笔 (bǐ)🖊️',
        '黑板 (hēibǎn)🧮',
        '作业 (zuòyè)📝',
        '课 (kè)🏫',
        '考试 (kǎoshì)📝',
        '学校 (xuéxiào)🏫',
        '学生 (xuéshēng)👩‍🎓',
        '老师 (lǎoshī)👨‍🏫',
      ],
      score: 0,
    };
  },
  computed: {
    currentWord() {
      return this.answerChoices[this.currentWordIndex];
    },
    shuffledChoices() {
      const shuffled = [...this.chineseWords].sort(() => Math.random() - 0.5);
      return shuffled;
    },
  },
  methods: {
    checkAnswer(choice) {
      if (choice === this.chineseWords[this.correctAnswerIndices[this.currentWordIndex]]) {
        this.correctAnswer = true;
        this.$nextTick(() => {
          this.$refs.correctSound.play();
        });
        this.score += 25;
        setTimeout(() => {
          this.correctAnswer = false;
          this.moveToNextWord();
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
    moveToNextWord() {
      if (this.currentWordIndex < this.answerChoices.length - 1) {
        this.currentWordIndex++;
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
  flex-basis: calc(25% - 5px); 
}

.word {
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
