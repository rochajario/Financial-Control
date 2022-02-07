<template>
  <v-app id="inspire">
    <v-app-bar app color="white" flat>
      <v-tabs v-model="tab" centered class="ml-n9" color="grey darken-1">
        <template v-if="!loggedIn" id="not-logged-in-tabs">
          <v-tab v-for="i in notAuthenticatedUserItems" :key="i">
            {{ i }}
          </v-tab>
        </template>
        <template v-else id="logged-in-tabs">
          <v-tab v-for="i in authenticatedUserItems" :key="i"> {{ i }} </v-tab>
        </template>
      </v-tabs>
      <!--Logout button here-->
      <logout-dialog v-if="loggedIn" @userLogedOut="toggleTabs"/>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row justify="center">
          <template v-if="!loggedIn" id="not-logged-in-content">
            <login-page :referenceTab="tab" @userAuthenticated="toggleTabs" />
          </template>
          <template v-else id="logged-in-content">
            <main-page :referenceTab="tab" />
          </template>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import LogoutDialog from './components/LogoutDialog.vue';
import LoginPage from "./views/LoginPage.vue";
import MainPage from "./views/MainPage.vue";

export default {
  name: "App",
  components: {
    "logout-dialog":LogoutDialog,
    "login-page": LoginPage,
    "main-page": MainPage,
  },
  data() {
    return {
      tab: 0,
      loggedIn: false,
      notAuthenticatedUserItems: ["Sign-in", "Login"],
      authenticatedUserItems: ["Entries", "Summary"],
    };
  },
  methods: {
    toggleTabs(value) {
      if(!value){
        localStorage.clear();
      }
      this.loggedIn = value;
    },
  },
};
</script>