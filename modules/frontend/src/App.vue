<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        Financial Control
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/rochajario/Financial-Control"
        target="_blank"
        text
      >
        <span class="mr-2">Github</span>
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
    <v-footer padless>
    <v-col
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>Jario Rocha dos Santos Junior</strong>
    </v-col>
  </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

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
