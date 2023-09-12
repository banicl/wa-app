<template>
    <div>
      <div v-if="!gameOver">
        <h2>Write the fruit & veggie names in English! 🍏🍌🍊</h2>
        <br>
        <div class="fruit-image">
          <img :src="currentFruitImage" alt="Fruit" class="image" />
        </div>
        <div class="chinese">
          <h1>{{ currentFruitHanzi }}</h1>
          <h3>{{ currentFruitPinyin }}</h3>
        </div>
  
        <input
          type="text"
          v-model="userInput"
          placeholder="Enter the English name"
          @input="checkAnswer"
        />
      </div>
  
      <!-- Display game completion message -->
      <div v-if="gameOver">
        <audio ref="backgroundMusic" src="@/assets/sounds/level-completed.mp3" autoplay></audio>
        <h1>Congratulations! You completed the level. 🏆🎉</h1>
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
        currentFruitIndex: 0,
        fruits: [
          {
            hanzi: '苹果',
            pinyin: 'píngguǒ',
            image: 'apple.png',
            english: 'apple',
          },
          {
            hanzi: '香蕉',
            pinyin: 'xiāngjiāo',
            image: 'banana.png',
            english: 'banana',
          },
          {
            hanzi: '橙子',
            pinyin: 'chéngzi',
            image: 'orange.png',
            english: 'orange',
          },
          {
            hanzi: '草莓',
            pinyin: 'cǎoméi',
            image: 'strawberry.png',
            english: 'strawberry',
            },
            {
            hanzi: '葡萄',
            pinyin: 'pútáo',
            image: 'grape.png',
            english: 'grape',
            },
            {
                hanzi: '胡萝卜',
                pinyin: 'húluóbo',
                image: 'carrot.png',
                english: 'carrot',
            },
            {
                hanzi: '西红柿',
                pinyin: 'xīhóngshì',
                image: 'tomato.png',
                english: 'tomato',
            },
            // Additional vegetables
            {
                hanzi: '黄瓜',
                pinyin: 'huángguā',
                image: 'cucumber.png',
                english: 'cucumber',
            },
            {
                hanzi: '茄子',
                pinyin: 'qiézi',
                image: 'eggplant.png',
                english: 'eggplant',
            },
            {
                hanzi: '土豆',
                pinyin: 'tǔdòu',
                image: 'potato.png',
                english: 'potato',
            },
        ],
        userInput: '',
        score: 0,
        gameOver: false,
      };
    },
    computed: {
      currentFruitHanzi() {
        return this.fruits[this.currentFruitIndex].hanzi;
      },
      currentFruitPinyin() {
        return this.fruits[this.currentFruitIndex].pinyin;
      },
      currentFruitImage() {
        return require(`@/assets/fruits/${this.fruits[this.currentFruitIndex].image}`);
      },
    },
    methods: {
      checkAnswer() {
        const userAnswer = this.userInput.trim().toLowerCase();
        const correctAnswer = this.fruits[this.currentFruitIndex].english.toLowerCase();
  
        if (userAnswer === correctAnswer) {
          this.score += 20;
          this.moveToNextFruit();
        }
      },
      moveToNextFruit() {
        if (this.currentFruitIndex < this.fruits.length - 1) {
          this.currentFruitIndex++;
          this.userInput = ''; // Clear the user input for the next fruit
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
    max-width: 300px;
    height: auto;
  }
  
  .fruit-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .chinese {
    text-align: center;
  }
  
  input {
    width: 100%;
    padding: 10px;
    font-size: 18px;
    margin-top: 20px;
    text-align: center;
  }
  
  .home-icon {
    font-size: 30px;
    cursor: pointer;
    color: black;
  }
  </style>
  