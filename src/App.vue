<template>
  <v-app>
    <v-main>
      <transition name="slide-fade" mode="out-in">
      <router-view />
    </transition>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    //
  }),
};
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1.0, 0.5, 0.8, 1.0); /* Use a playful cubic-bezier function */
}
.slide-fade-enter, .slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-100%); /* Slide from the left */
}
</style>