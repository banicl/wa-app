<template>
  <div class="level-1">
    <div class="overlay">
      <div class="frame">
        <h1>你好！ 你叫什么名字？👋</h1>
        <h2>Hello! What's your name?</h2>
        <div class="study-part">
          <div class="study-text">
            <p>
              Welcome to Level 1! In this level, you'll learn some basic Chinese greetings and phrases.
            </p>
            <p>
              China is a beautiful country with a rich history and culture. It's known for its delicious food, the Great Wall, and the cute giant pandas!
            </p>
          </div>
          <div class="study-images">
            <img src="@/assets/background.jpg" alt="China Image 1" />
            <img src="@/assets/background.jpg" alt="China Image 2" />
            <img src="@/assets/background.jpg" alt="China Image 3" />
          </div>
        </div>
        <div class="video-container">
          <iframe width="560" height="315" src="https://www.youtube.com/watch?v=m_rDIzj6DRE" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="more-content">
          <h2>Practice What You've Learned</h2>
          <p>
            Now that you've learned how to say "Nihao," try practicing with your friends and family! It's a fun way to greet each other and learn more about different cultures.
          </p>
          <p>
            Keep exploring the rest of the levels to learn even more exciting things about China and the Chinese language. 加油! (Jiā yóu!) Keep up the good work!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Level1',
};
</script>

<style scoped>
.level-1 {
  position: relative;
  height: 100vh;
  background-image: url('~@/assets/colors.gif');
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

.frame {
  padding: 40px;
  background-color: rgba(255, 255, 255, 0.3);
  border: 2px solid white;
  border-radius: 10px;
  max-width: 1200px;
  text-align: center;
  overflow-y: scroll;
  max-height: 80%;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.study-part {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.study-text {
  flex: 1;
  padding: 20px;
}

.study-images img {
  max-width: 100px;
  height: auto;
  margin: 0 10px;
}

.video-container {
  position: relative;
  padding-bottom: 56.25%;
  overflow: hidden;
  max-width: 100%;
  height: 0;
  margin: 20px 0;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.more-content {
  margin-top: 20px;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}
</style>
