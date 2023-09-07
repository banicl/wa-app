<template>
    <div>
      <h1>This is a Test Component</h1>
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script>

  import { mapGetters } from 'vuex';

  export default {
    data() {
      return {
        message: "Hello from Test Component!",
      };
    },
    computed: {
    ...mapGetters(['isAuthenticated']),
  },
  created() {
    console.log('Is authenticated:', this.isAuthenticated);
  },
  };
  </script>
  

  