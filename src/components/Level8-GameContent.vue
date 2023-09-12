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
        currentFoodIndex: 0,
        foods: [
          {
            hanzi: '汉堡',
            pinyin: 'hànbǎo',
            image: 'hamburger.png',
            english: 'hamburger'
          },
          {
            hanzi: '披萨',
            pinyin: 'pīsà',
            image: 'pizza.png',
            english: 'pizza',
          },
          {
            hanzi: '沙拉',
            pinyin: 'shālā',
            image: 'salad.png',
            english: 'salad',
          },
          {
            hanzi: '面条',
            pinyin: 'miàntiáo',
            image: 'noodles.png',
            english: 'noodles',
            },
            {
            hanzi: '寿司',
            pinyin: 'shòusī',
            image: 'sushi.png',
            english: 'sushi',
            },
            {
            hanzi: '冰淇淋',
            pinyin: 'bīngqílín',
            image: 'ice-cream.png',
            english: 'ice cream',
            },
            {
            hanzi: '面包',
            pinyin: 'miànbāo',
            image: 'bread.png',
            english: 'bread',
            },
            {
            hanzi: '薯条',
            pinyin: 'shǔtiáo',
            image: 'fries.png',
            english: 'fries',
            },
            {
            hanzi: '牛奶',
            pinyin: 'niúnǎi',
            image: 'milk.png',
            english: 'milk',
            },
            {
            hanzi: '果汁',
            pinyin: 'guǒzhī',
            image: 'juice.png',
            english: 'juice',
            }
        ],
        userInput: '',
        score: 0,
        gameOver: false,
      };
    },
    computed: {
      currentFruitHanzi() {
        return this.foods[this.currentFoodIndex].hanzi;
      },
      currentFruitPinyin() {
        return this.foods[this.currentFoodIndex].pinyin;
      },
      currentFruitImage() {
        return require(`@/assets/foods/${this.foods[this.currentFoodIndex].image}`);
      },
    },
    methods: {
      checkAnswer() {
        const userAnswer = this.userInput.trim().toLowerCase();
        const correctAnswer = this.foods[this.currentFoodIndex].english.toLowerCase();
  
        if (userAnswer === correctAnswer) {
          this.score += 20;
          this.moveToNextFruit();
        }
      },
      moveToNextFruit() {
        if (this.currentFoodIndex < this.foods.length - 1) {
          this.currentFoodIndex++;
          this.userInput = ''; 
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
  