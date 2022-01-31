<template>
  <v-app>
    <menu-bar />
    <v-main>
      <home />
    </v-main>
  </v-app>
</template>

<script>
import MenuBar from "../src/components/MenuBar.vue";
import Home from "../src/components/views/Home.vue";

export default {
  name: "App",
  components: {
    MenuBar,
    Home
  },
  data: () => ({
    //
  })
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
</style>
