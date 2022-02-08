<template>
  <div>
    <v-sheet min-height="25vh" width="50vh" rounded="lg" class="ma-5">
      <v-tabs-items v-model="referenceTab" class="pa-10">
        <v-tab-item>
          <v-card flat>
            <sign-up @newUser="this.createNewUser" />
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <log-in @userLogin="this.userAuthentication" />
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-sheet>
    <snackbar :color="snackbarColor" :text="snackbarMessage" :visible="snackbarVisibility"/>
  </div>
</template>

<script>
import Signup from "../components/Signup.vue";
import Login from "../components/Login.vue";
import { service } from "../assets/js/api";
import SnackBar from "../components/SnackBar.vue";

export default {
  name: "LoginPage",
  props: {
    referenceTab: {
      required: true,
    },
  },
  components: {
    "sign-up": Signup,
    "log-in": Login,
    snackbar: SnackBar,
  },
  data() {
    return {
      tab: null,
      snackbarColor:'',
      snackbarMessage:'',
      snackbarVisibility: 0
    };
  },
  methods: {
    createNewUser(userData) {
      service.signUp(userData)
      .then(() => {
          this.snackbarColor= 'success',
          this.snackbarMessage= 'New User Created Successfully',
          this.snackbarVisibility++
      })
      .catch(()=>{
          this.snackbarColor= 'red accent-2',
          this.snackbarMessage= 'Failed to Create new User',
          this.snackbarVisibility++
      });
    },
    userAuthentication(userData) {
      service
        .login(userData)
        .then((res) => {
          localStorage.setItem(
            "financial-control-access",
            JSON.stringify(res.data)
          );
          this.$emit("userAuthenticated", true);
        })
        .catch((err) => {
          localStorage.clear();
          this.snackbarColor= 'red accent-2',
          this.snackbarMessage= err.message,
          this.snackbarVisibility++
        });
    },
  },
};
</script>