<template>
  <v-app id="inspire">
    <v-navigation-drawer
      app
      class="pt-4"
      color="grey lighten-3"
      mini-variant
      permanent
      expand-on-hover
    >
      <v-avatar
        color="secondary darken-1"
        :size="40"
        class="d-block text-center mx-auto mb-5"
      >
        <v-icon color="white">mdi-currency-usd</v-icon>
      </v-avatar>
      <v-divider />
      <v-list nav dense>
        <section v-if="!loggedIn" id="logged-out-options">
          <a
            href="https://github.com/rochajario/Financial-Control"
            target="_blank"
          >
            <v-list-item link>
              <v-list-item-icon>
                <v-icon color="secondary lighten-1">mdi-github</v-icon>
              </v-list-item-icon>
              <v-list-item-title
                class="font-weight-light"
                style="text-align: start"
              >
                See the Project on Github
              </v-list-item-title>
            </v-list-item>
          </a>
          <a
            href="https://linkedin.com/in/rochajario/"
            target="_blank"
          >
            <v-list-item link>
              <v-list-item-icon>
                <v-icon color="secondary lighten-1">mdi-linkedin</v-icon>
              </v-list-item-icon>
              <v-list-item-title
                class="font-weight-light"
                style="text-align: start"
              >
                Find me on Linkedin
              </v-list-item-title>
            </v-list-item>
          </a>

          <button v-if="backendServerReady && !loggedIn" @click="activateSignInDialog">
            <v-list-item link>
              <v-list-item-icon>
                <v-icon color="secondary lighten-1">mdi-login</v-icon>
              </v-list-item-icon>
              <v-list-item-title
                class="font-weight-light"
                style="text-align: start"
              >
                Login
              </v-list-item-title>
            </v-list-item>
          </button>
        </section>

        <section v-else id="logged-in-options">
          <a
            href="https://github.com/rochajario/Financial-Control"
            target="_blank"
          >
            <v-list-item link>
              <v-list-item-icon>
                <v-icon color="secondary lighten-1">mdi-github</v-icon>
              </v-list-item-icon>
              <v-list-item-title
                class="font-weight-light"
                style="text-align: start"
              >
                See the Project on Github
              </v-list-item-title>
            </v-list-item>
          </a>
          <a
            href="https://linkedin.com/in/rochajario/"
            target="_blank"
          >
            <v-list-item link>
              <v-list-item-icon>
                <v-icon color="secondary lighten-1">mdi-linkedin</v-icon>
              </v-list-item-icon>
              <v-list-item-title
                class="font-weight-light"
                style="text-align: start"
              >
                Find me on Linkedin
              </v-list-item-title>
            </v-list-item>
          </a>
          <button name="activator" @click="setEntriesSpaViewTarget">
            <v-list-item link>
              <v-list-item-icon>
                <v-icon color="secondary lighten-1">mdi-currency-usd</v-icon>
              </v-list-item-icon>
              <v-list-item-title
                class="font-weight-light"
                style="text-align: start"
              >
                My Entries
              </v-list-item-title>
            </v-list-item>
          </button>

          <button @click="setReportsSpaViewTarget">
            <v-list-item link>
              <v-list-item-icon>
                <v-icon color="secondary lighten-1"
                  >mdi-chart-timeline-variant</v-icon
                >
              </v-list-item-icon>
              <v-list-item-title
                class="font-weight-light"
                style="text-align: start"
              >
                My Reports
              </v-list-item-title>
            </v-list-item>
          </button>

          <button v-if="backendServerReady" @click="loggedOut">
            <v-list-item link>
              <v-list-item-icon>
                <v-icon color="secondary lighten-1">mdi-logout</v-icon>
              </v-list-item-icon>
              <v-list-item-title
                class="font-weight-light"
                style="text-align: start"
              >
                Logout
              </v-list-item-title>
            </v-list-item>
          </button>
        </section>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <signin-login
        :dialogActivator="signInActivator"
        @loggedIn="loggedinView"
      />
      <home v-if="this.spaViews.home" @backendReady="backendReadyForProcessing" />
      <entries v-if="this.spaViews.entries" />
      <reports v-if="this.spaViews.reports" />
    </v-main>
  </v-app>
</template>

<script>
import Entries from "./components/Entries.vue";
import Reports from "./components/Data-Visualization/Reports.vue";
import Home from "./components/Home.vue";
import SignIn_Login from "./components/Authentication/SignIn_Login.vue";
export default {
  name: "App",
  components: {
    Home,
    "signin-login": SignIn_Login,
    entries: Entries,
    reports: Reports,
  },
  data: function () {
    return {
      backendServerReady: false,
      signInActivator: false,
      loggedIn: false,
      spaViews: {
        home: true,
        entries: false,
        reports: false,
      },
    };
  },
  methods: {
    backendReadyForProcessing(value) {
      if (value) {
        this.backendServerReady = value;
       this.activateSignInDialog();
      }
    },
    activateSignInDialog() {
      this.signInActivator = !this.signInActivator;
    },
    loggedinView(value) {
      this.loggedIn = value;
    },
    loggedOut() {
      this.loggedIn = false;
      localStorage.clear();
      this.setHomeSpaView();
    },
    setEntriesSpaViewTarget() {
      if (this.loggedIn) {
        this.spaViews.entries = true;
        this.spaViews.home = false;
        this.spaViews.reports = false;
      }
    },
    setReportsSpaViewTarget() {
      if (this.loggedIn) {
        this.spaViews.entries = false;
        this.spaViews.home = false;
        this.spaViews.reports = true;
      }
    },
    setHomeSpaView() {
      this.spaViews.entries = false;
      this.spaViews.home = true;
      this.spaViews.reports = false;
    },
  },
};
</script>
<style scoped>
button {
  width: 100%;
}
a {
  text-decoration: none;
}
</style>