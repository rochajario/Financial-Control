<template>
  <v-app>
    <menu-bar/>
    <v-main>
      <home />
    </v-main>
    <app-footer/>
  </v-app>
</template>

<script>
import MenuBar from "../src/components/MenuBar.vue"
import Home from "../src/components/views/Home.vue"
import Footer from "../src/components/Footer.vue"

export default {
  name: 'App',
  components:{
    MenuBar,
    Home,
    'app-footer':Footer
  },
  data: () => ({
    //
  }),
};
</script>

<style scoped>
body {
  margin: 0;
  padding:0;
}
</style>
