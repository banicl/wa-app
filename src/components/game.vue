<template>
    <div class="matching-game">
      <h1>Match the Phrases</h1>
      <div class="phrases">
        <div
          class="phrase"
          v-for="(phrase, index) in phrases"
          :key="index"
          :draggable="!phrase.matched"
          @dragstart="dragStart(index)"
          @dragover.prevent
          @drop="drop(index)"
        >
          {{ phrase.text }}
        </div>
      </div>
      <div class="translations">
        <div
          class="translation"
          v-for="(translation, index) in translations"
          :key="index"
          :draggable="translation.matched"
          @dragstart="dragStart(index)"
          @dragover.prevent
          @drop="drop(index)"
        >
          {{ translation.text }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        phrases: [
          { text: "你好", matched: false, translation: "Hello" },
          { text: "谢谢", matched: false, translation: "Thank you" },
          // Add more phrases here
        ],
        translations: [
          { text: "Hello", matched: false, phrase: "你好" },
          { text: "Thank you", matched: false, phrase: "谢谢" },
          // Add more translations here
        ],
      };
    },
    methods: {
      dragStart(index) {
        event.dataTransfer.setData("index", index);
      },
      drop(targetIndex) {
        const sourceIndex = event.dataTransfer.getData("index");
        const source = this.phrases[sourceIndex] || this.translations[sourceIndex];
        const target = this.phrases[targetIndex] || this.translations[targetIndex];
  
        if (source && target && !source.matched && !target.matched) {
          if (source.text === target.phrase || source.phrase === target.text) {
            source.matched = true;
            target.matched = true;
          }
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .matching-game {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  
  .phrases,
  .translations {
    display: flex;
    gap: 1rem;
  }
  
  .phrase,
  .translation {
    padding: 1rem;
    border: 1px solid #ccc;
    background-color: white;
    cursor: pointer;
  }
  
  .phrase[draggable="false"],
  .translation[draggable="false"] {
    cursor: default;
    opacity: 0.5;
  }
  
  .phrase[draggable="true"],
  .translation[draggable="true"] {
    border: 2px dashed #3498db;
  }
  
  h1 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  </style>
  