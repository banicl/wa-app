<template>
    <div class="levels-menu">
    <audio ref="backgroundMusic" src="@/assets/sounds/choose-level.mp3" autoplay></audio>
      <div class="overlay">
        <h1>✨ 选择要玩的级别! ✨</h1>
        <h2>Choose a level to play!</h2>
        <div class="level-buttons">
          <router-link to="/Level1" class="level-button" v-on:mouseenter.native="playLevel1Sound">
            等级 / Level 1
          </router-link>
          <router-link to="/Level2" class="level-button" v-on:mouseenter.native="playLevel2Sound">
            等级 / Level 2
          </router-link>
          <router-link to="/Level3" class="level-button" v-on:mouseenter.native="playLevel3Sound">
            等级 / Level 3
          </router-link>
          <router-link to="/Level4" class="level-button" v-on:mouseenter.native="playLevel4Sound">
            等级 / Level 4
          </router-link>
          <router-link to="/Level5" class="level-button" v-on:mouseenter.native="playLevel5Sound">
            等级 / Level 5
          </router-link>
          <router-link to="/Level6" class="level-button" v-on:mouseenter.native="playLevel6Sound">
            等级 / Level 6
          </router-link>
          <router-link to="/Level7" class="level-button" v-on:mouseenter.native="playLevel7Sound">
            等级 / Level 7
          </router-link>
          <router-link to="/Level8" class="level-button" v-on:mouseenter.native="playLevel8Sound">
            等级 / Level 8
          </router-link>
          <router-link to="/Level9" class="level-button" v-on:mouseenter.native="playLevel9Sound">
            等级 / Level 9
          </router-link>
          <router-link to="/Level10" class="level-button" v-on:mouseenter.native="playLevel10Sound">
            等级 / Level 10
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
<script>
import Level1Sound from "@/assets/sounds/level1.mp3";
import Level2Sound from "@/assets/sounds/level2.mp3";
import Level3Sound from "@/assets/sounds/level3.mp3";
import Level4Sound from "@/assets/sounds/level4.mp3";
import Level5Sound from "@/assets/sounds/level5.mp3";
import Level6Sound from "@/assets/sounds/level6.mp3";
import Level7Sound from "@/assets/sounds/level7.mp3";
import Level8Sound from "@/assets/sounds/level8.mp3";
import Level9Sound from "@/assets/sounds/level9.mp3";
import Level10Sound from "@/assets/sounds/level10.mp3";

export default {
  name: 'LevelsMenu',
  data() {
    return {
        Level1Sound: new Audio(Level1Sound),
        Level2Sound: new Audio(Level2Sound),
        Level3Sound: new Audio(Level3Sound),
        Level4Sound: new Audio(Level4Sound),
        Level5Sound: new Audio(Level5Sound),
        Level6Sound: new Audio(Level6Sound),
        Level7Sound: new Audio(Level7Sound),
        Level8Sound: new Audio(Level8Sound),
        Level9Sound: new Audio(Level9Sound),
        Level10Sound: new Audio(Level10Sound),
    };
  },
  methods: {
    playLevel1Sound() {
      this.Level1Sound.play();
    },
    playLevel2Sound() {
      this.Level2Sound.play();
    },
    playLevel3Sound() {
      this.Level3Sound.play();
    },
    playLevel4Sound() {
      this.Level4Sound.play();
    },
    playLevel5Sound() {
      this.Level5Sound.play();
    },
    playLevel6Sound() {
      this.Level6Sound.play();
    },
    playLevel7Sound() {
      this.Level7Sound.play();
    },
    playLevel8Sound() {
      this.Level8Sound.play();
    },
    playLevel9Sound() {
      this.Level9Sound.play();
    },
    playLevel10Sound() {
      this.Level10Sound.play();
    },
  },
  mounted() {
    this.$refs.backgroundMusic.volume = 1;
    this.$refs.backgroundMusic.play();
  },
};
</script>
  
  <style scoped>
  .levels-menu {
    position: relative;
    height: 100vh;
    background-image: url('~@/assets/levels-gif4.gif');
    background-size: cover;
    background-position: center;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
  }
  
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .level-buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .level-button {
    padding: 1rem 2rem;
    background-color: rgba(255, 255, 255, 0.3);
    border: 1px solid white;
    color: white;
    text-decoration: none;
    text-align: center;
    font-size: 1.5rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    width:300px;
  }
  
  .level-button:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
  </style>
  