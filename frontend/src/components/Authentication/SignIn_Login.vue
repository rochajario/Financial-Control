<template>
  <div>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="400px">
        <login-form
          v-if="login == false"
          @activeDialog="setDialogVisibility"
          @loginView="setLoginView"
          @formDataUpdated="authenticateUser"
        />
        <signin-form
          v-else
          @activeDialog="setDialogVisibility"
          @loginView="setLoginView"
          @formDataUpdated="createNewUser"
        />
      </v-dialog>
    </v-row>
    <snackbar
      :color="snackbarColor"
      :text="snackbarMessage"
      :visible="snackbarVisibility"
    />
  </div>
</template>

<script>
import { service } from "../../services/api.js";
import SnackBarMixin from "../SnackBarMixin.vue";
import SnackBar from "../SnackBar.vue";
import Login from "./Login.vue";
import Signin from "./Signin.vue";
export default {
  extends: SnackBarMixin,
  props: {
    dialogActivator: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  components: {
    snackbar: SnackBar,
    "login-form": Login,
    "signin-form": Signin,
  },
  data: () => ({
    dialog: false,
    login: true,
    userData: undefined,
  }),
  methods: {
    setDialogVisibility(value) {
      this.dialog = value;
    },
    setLoginView(value) {
      this.login = value;
    },
    createNewUser(userData) {
      this.setDialogVisibility(false);
      service
        .signUp(userData)
        .then(() => {
          this.showSuccess("New User Created Successfully");
        })
        .catch((err) => {
          if (err.response.status == 422) {
            this.showError("This E-mail is Already Registred");
            return;
          }
          this.showError("Failed to Create new User");
        });
    },
    authenticateUser(userData) {
      this.setDialogVisibility(false);
      service
        .login(userData)
        .then((res) => {
          localStorage.setItem(
            "financial-control-access",
            JSON.stringify(res.data)
          );
          this.showSuccess("Successfully Loged in");
          this.$emit("loggedIn", true);
        })
        .catch(() => {
          localStorage.clear();
          this.showError("Could not Login With Provided Credentials");
        });
    },
  },
  watch: {
    dialogActivator() {
      this.login = false;
      this.dialog = !this.dialog;
    },
  },
};
</script>