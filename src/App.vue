<template>
  <v-app>
    <v-main>
      <router-view /> <!-- This is where the active route's component will be displayed -->
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
