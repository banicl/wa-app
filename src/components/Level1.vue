<template>
  <div class="level-1">
    <audio ref="backgroundMusic" src="@/assets/sounds/level1/welcome-level1.mp3" autoplay></audio>
    <div class="overlay">
      <div class="frame">
        <hr class="divider" />
        <h1>你好！ 你叫什么名字？👋</h1>
        <h2>Hello! What's your name?</h2>
        <div class="study-part">
          <div class="study-text">
            <h3>
            Welcome to Level 1! 😊🌼
            </h3>
             <p>
            In this level, you'll learn some basic Chinese greetings and phrases. 👋🇨🇳<br>
            China is a beautiful country with a rich history and culture. It's known for <br>its delicious food 🍜, the Great Wall 🏯, and the cute giant pandas! 🐼🎋<br>
            First, learn how to say hello by pressing the big red button on the right. 🔴👉
            </p>
          </div>
          <div class="study-images">
            <img src="@/assets/ni.gif" alt="Nihao 1" />
            <img src="@/assets/hao.gif" alt="Nihao 2" />
          </div>
          <div class="interactive-greeting">
          <button @click="playHello">Say hello! 😊</button>
          <div class="greeting-display">
            <div class="chinese-characters">{{ greeting }}</div>
          </div>
        </div><br>
        </div>
        <div class="greetings-section">
          <hr class="divider" /><br>
          <h3 style="text-align: left;">
            <span @click="playGreetingSection" style="cursor: pointer;">
            <i class="fas fa-volume-up" style="margin-left: 10px;"></i>
            </span>
            Learn How to Greet at Different Times of the Day! 🌞🌆🌙<br>
          </h3>
          <p style="text-align: left;">
            Explore the magic of greetings! Click on an image to learn how to greet your<br>friends and family at various times of the day. 👋 Spread smiles and joy! 😊🎉
          </p>
          <div class="greeting-buttons">
            <div class="greeting-container" @click="playGoodMorningSound">
              <button>
                <img src="@/assets/good-morning.gif" alt="Morning" />
              </button>
              <div class="chinese-characters" style="color:#e74c3c">- Good morning! -</div>
              <div class="chinese-characters">{{greetingMorning}}</div>
            </div>
            <div class="greeting-container" @click="playGoodAfternoonSound">
              <button>
                <img src="@/assets/good-afternoon.gif" alt="Afternoon" />
              </button>
              <div class="chinese-characters" style="color:#e74c3c">- Good afternoon! -</div>
              <div class="chinese-characters">{{greetingAfternoon}}</div>
            </div>
            <div class="greeting-container" @click="playGoodEveningSound">
              <button>
                <img src="@/assets/good-evening.gif" alt="Evening" />
              </button>
              <div class="chinese-characters" style="color:#e74c3c">- Good evening! -</div>
              <div class="chinese-characters">{{greetingEvening}}</div>
            </div>
          </div><br>
        </div>
        <hr class="divider" /><br>
        <div class="self-introduction-section">
    <h3 style="text-align: left;">
      <span style="cursor: pointer;">
        <i class="fas fa-volume-up" style="margin-left: 10px;"></i>
      </span>
      Let's Learn How to Introduce Ourselves! 👋🎤
    </h3>
    <p style="text-align: left;">
      It's fun to meet new friends! 🎉 Watch the video below 📹 to learn how <br>to introduce yourself in Chinese. Then, practice saying your name! 🗣️<br>
      Ah! Look who's here, our buddy 刘慧心! 👋👀  Click on his name right<br> beside the video to find out what he has to say!
    </p>
    <div class="self-introduction">
      <div class="text-container" style="text-align: left;">
        <img src="@/assets/liu_naslov.png" alt="Liu" style="max-width: 100%; height: auto;" />
      </div>
      <div class="video-container">
        <video controls width="100%">
          <source src="/introduction.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      </div>
      </div>
      <hr class="divider" />
      </div>
    </div>
  </div>
</template>

<script>
import helloSound from "@/assets/sounds/level1/level1-nihao.mp3";
import morningSound from "@/assets/sounds/level1/morning.mp3";
import afternoonSound from "@/assets/sounds/level1/afternoon.mp3";
import eveningSound from "@/assets/sounds/level1/evening.mp3";
import greetingSectionSound from "@/assets/sounds/level1/greeting-section.mp3";

export default {
  name: 'Level1',
  data() {
    return {
      greeting: '',
      greetingMorning: '', 
      greetingAfternoon: '',
      greetingEvening: '',
      helloSound: new Audio(helloSound),
      morningSound: new Audio(morningSound),
      afternoonSound: new Audio(afternoonSound),
      eveningSound: new Audio(eveningSound),
      greetingSectionSound: new Audio(greetingSectionSound),
    };
  },
  methods: {
    playHello() {
      this.greeting = 'nǐ hǎo';
      const helloSound = new Audio(require('@/assets/sounds/level1/level1-nihao.mp3'));
      helloSound.play();
    },
    playGoodMorningSound() {
      this.greetingMorning = 'zǎo shàng hǎo'; 
      this.morningSound.play();
    },
    playGoodAfternoonSound() {
      this.greetingAfternoon = 'xià wǔ hǎo'; 
      this.afternoonSound.play();
    },
    playGoodEveningSound() {
      this.greetingEvening = 'wǎn shàng hǎo'; 
      this.eveningSound.play();
    },
    playGreetingSection() {
      this.greetingSectionSound.play();
    },
  },
  mounted() {
    this.$refs.backgroundMusic.volume = 1;
    this.$refs.backgroundMusic.play();
  },
};
</script>

<style scoped>
.level-1 {
  position: relative;
  height: 100vh;
  background-image: url('~@/assets/levels-background.svg');
  background-size: cover;
  background-position: center;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: black;
}

.frame {
  padding: 20px 50px 50px 50px;
  padding-left: 40px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(225, 225, 225, 0.8) 100%);
  border: 2px solid white;
  border-radius: 10px;
  max-width: 1200px;
  text-align: center;
  max-height: 90%;
  overflow-y: auto; 
}

h2 {
  font-size: 2rem;
  margin-bottom: 50px;
}

.study-part {
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.study-text {
  text-align: left;
  flex: 1;
  padding: 20px;
}

.study-images img {
  max-width: 150px;
  height: auto;
  margin: 0 10px;
}

.interactive-greeting {
  text-align: center;
}

button {
  padding: 10px 20px;
  font-size: 1.2rem;
  background-color: #e74c3c;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.greeting-display {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chinese-characters {
  font-size: 25px;
  margin-right: 10px;
}

.voice-icon {
  font-size: 1.5rem;
  cursor: pointer;
}

.voice-icon:hover {
  color: #e74c3c; 
}

.greetings-section {
  margin-top: 50px;
  text-align: center;
  padding-left: 20px;
}

.greeting-buttons {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

.greeting-buttons button {
  padding: 10px;
  font-size: 1.2rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

button img {
  width: 150px;
  height: 150px;
  background-color: transparent;
}

.divider {
  border: 0;
  border-top: 1px solid #ccc; 
  margin: 20px 0;
}

.self-introduction {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.video-container {
  width: 60%;
  padding-right: 10px;
  height: 100%; 
}

.text-container {
  width: 40%;
  padding-left: 10px;
  height: 100%; 
}
</style>
