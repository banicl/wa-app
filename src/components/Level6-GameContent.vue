<template>
    <div>
      <div v-if="!gameOver">
        <h2>Click on the animal to hear how to call it in Chinese! 🐾</h2>
        <br>
        <div class="animal-image">
          <img :src="currentAnimalImage" alt="Animal" class="image" @click="playAnimalSound" />
        </div>
        <br>
        <h1>{{ currentAnimalHanzi }}</h1>
        <h3>{{ currentAnimalPinyin }}</h3>
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
        currentAnimalIndex: 0,
        animals: [
          {
            hanzi: '猫',
            pinyin: 'māo',
            sound: 'cat.mp3',
            image: 'cat.png',
          },
          {
            hanzi: '狗',
            pinyin: 'gǒu',
            sound: 'dog.mp3',
            image: 'dog.png',
          },
          {
            hanzi: '兔子',
            pinyin: 'tùzǐ',
            sound: 'rabbit.mp3',
            image: 'rabbit.png',
          },
          {
            hanzi: '大象',
            pinyin: 'dàxiàng',
            sound: 'elephant.mp3',
            image: 'elephant.png',
          },
          {
            hanzi: '狮子',
            pinyin: 'shīzi',
            sound: 'lion.mp3',
            image: 'lion.png',
          },
          {
            hanzi: '熊猫',
            pinyin: 'xióngmāo',
            sound: 'panda.mp3',
            image: 'panda.png',
          },
        ],
        score: 0,
        gameOver: false,
      };
    },
    computed: {
      currentAnimalHanzi() {
        return this.animals[this.currentAnimalIndex].hanzi;
      },
      currentAnimalPinyin() {
        return this.animals[this.currentAnimalIndex].pinyin;
      },
      currentAnimalImage() {
        return require(`@/assets/animals/${this.animals[this.currentAnimalIndex].image}`);
      },
    },
    methods: {
      playAnimalSound() {
        const soundFile = this.animals[this.currentAnimalIndex].sound;
        const audio = new Audio(require(`@/assets/sounds/${soundFile}`));
        
        audio.addEventListener('ended', () => {
          this.moveToNextAnimal();
        });
        
        audio.play();
      },
      moveToNextAnimal() {
        if (this.currentAnimalIndex < this.animals.length - 1) {
          this.currentAnimalIndex++;
        } else {
          this.gameOver = true;
          this.$emit('gameOver');
          this.score = 100;
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
    max-height: 200px;
    height: auto;
    cursor: pointer;
  }
  
  .animal-image {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  
  .home-icon {
    font-size: 30px;
    cursor: pointer;
    color: black;
  }
  </style>
  