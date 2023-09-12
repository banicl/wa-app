<template>
    <div>
      <div v-if="!gameOver">
        <h2>Help Family Members Complete Tasks! 🏡</h2>
  
        <div class="emoji">{{ currentFamilyMemberEmoji }}</div>
  
        <h2>{{ currentFamilyMemberHanzi }}</h2>
        <p><b>Task:</b> {{ currentTaskDescription }}</p>
  
        <!-- Display the action choices -->
        <div class="choice-rows">
          <div class="choice-row" v-for="(choice, index) in actionChoices" :key="index">
            <button class="game-choice-button" @click="checkAction(choice)">
              <b>{{ choice }}</b>
            </button>
          </div>
        </div>
      </div>
  
      <!-- Display game feedback messages -->
      <div v-if="completedTask">
        <br>
        <audio ref="correctSound" src="@/assets/sounds/correct-answer.mp3"></audio>
        <p>Great job! Task completed. 🎉👏<br><b>+25 points 💯</b></p>
      </div>
  
      <div v-if="incompleteTask">
        <br>
        <audio ref="wrongSound" src="@/assets/sounds/wrong-answer.mp3"></audio>
        <p>Oops, try again. Task not completed.❌🙁<br><b>-5 points</b></p>
      </div>
  
      <div v-if="gameOver">
        <audio ref="backgroundMusic" src="@/assets/sounds/level-completed.mp3" autoplay></audio>
        <h1>Congratulations! You helped the whole family. 🏆🎉</h1>
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
        currentFamilyMemberIndex: 0,
        actionChoices: [
        'Help with homework 📚',
        'Cook together 🍳',
        'Fix the refrigerator ❄️',
        'Play a game 🎲',
        'Listen to stories 📖',
        'Garden together 🌱',
        'Go for a bike ride 🚴‍♂️',
        'Organize an event 🎉',
        'Play a sport ⚽',
        'Take for a walk 🚶',
        'Feed and care for 🐾',
        'Fix a leaky faucet 🚰',
        ],
        completedTask: false,
        incompleteTask: false,
        gameOver: false,
        familyMembers: [
          {
            hanzi: '爸爸 (bàba)',
            pinyin: 'bàba',
            emoji: '👨', 
            task: 'Fix a leaky faucet 🚰',
            taskDescription: 'Help your dad fix a leaky faucet in the bathroom.',
          },
          {
            hanzi: '妈妈 (māmā)',
            emoji: '👩', 
            task: 'Cook together 🍳',
            taskDescription: 'Help your mom prepare a special dinner for the family.',
          },
          {
            hanzi: '哥哥 (gēgē)',
            emoji: '🧑', 
            task: 'Help with homework 📚',
            taskDescription: 'Assist your older brother with his homework.',
          },
          {
            hanzi: '妹妹 (mèimèi)',
            emoji: '👧', 
            task: 'Play a game 🎲',
            taskDescription: 'Play a fun game with your younger sister.',
          },
          {
            hanzi: '姐姐 (jiějiě)',
            pinyin: 'jiějiě',
            emoji: '👧', 
            task: 'Listen to stories 📖',
            taskDescription: 'Read or listen to stories with your older sister.',
        },
        {
            hanzi: '爷爷 (yéyé)',
            pinyin: 'yéyé',
            emoji: '👴', 
            task: 'Garden together 🌱',
            taskDescription: 'Spend time gardening with your grandfather.',
        },
        {
            hanzi: '奶奶 (nǎinai)',
            pinyin: 'nǎinai',
            emoji: '👵', 
            task: 'Go for a bike ride 🚴‍♂️',
            taskDescription: 'Take a bike ride with your grandmother.',
        },
        {
            hanzi: '叔叔 (shūshu)',
            pinyin: 'shūshu',
            emoji: '👨', 
            task: 'Organize an event 🎉',
            taskDescription: 'Help your uncle organize a family event.',
        },
        {
            hanzi: '阿姨 (āyí)',
            pinyin: 'āyí',
            emoji: '👩', 
            task: 'Play a sport ⚽',
            taskDescription: 'Play a sport with your aunt.',
        },
        {
            hanzi: '宠物 (chǒngwù)',
            pinyin: 'chǒngwù',
            emoji: '🐾', 
            task: 'Feed and care for 🐾',
            taskDescription: 'Take care of your pet.',
        },
        ],
        score: 0,
      };
    },
    computed: {
      currentFamilyMemberHanzi() {
        return this.familyMembers[this.currentFamilyMemberIndex].hanzi;
      },
      currentFamilyMemberEmoji() {
        return this.familyMembers[this.currentFamilyMemberIndex].emoji;
      },
      currentTaskDescription() {
        return this.familyMembers[this.currentFamilyMemberIndex].taskDescription;
      },
    },
    methods: {
      checkAction(action) {
        const correctAction = this.familyMembers[this.currentFamilyMemberIndex].task;
        if (action === correctAction) {
          this.completedTask = true;
          this.$nextTick(() => {
            this.$refs.correctSound.play();
          });
          this.score += 20;
          setTimeout(() => {
            this.completedTask = false;
            this.moveToNextFamilyMember();
          }, 1000);
        } else {
          this.incompleteTask = true;
          this.$nextTick(() => {
            this.$refs.wrongSound.play();
          });
          this.score -= 5;
          setTimeout(() => {
            this.incompleteTask = false;
          }, 1000);
        }
      },
      moveToNextFamilyMember() {
        if (this.currentFamilyMemberIndex < this.familyMembers.length - 1) {
          this.currentFamilyMemberIndex++;
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
  .emoji {
    font-size: 72px;
    margin: 20px;
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
  
  .home-icon {
    font-size: 30px;
    cursor: pointer;
    color: black;
  }
  </style>
  