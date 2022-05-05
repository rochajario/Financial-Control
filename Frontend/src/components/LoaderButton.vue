<template>
  <section>
    <div class="text-center">
      <v-btn
        :disabled="dialog"
        :loading="dialog"
        class="white--text"
        color="primary darken-2"
        @click="dialog = true"
      >
        Let's Get Started
      </v-btn>
      <v-dialog v-model="dialog" hide-overlay persistent width="300">
        <v-card color="primary" dark>
          <v-card-text align="center">
            Waking up Backend Server
            <v-progress-linear
              indeterminate
              color="white"
              class="mb-0"
            ></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
    <snack-bar
      :color="snackbarColor"
      :text="snackbarMessage"
      :visible="snackbarVisibility"
    />
  </section>
</template>
<script>
import { service } from "../services/api.js";
import SnackBar from "./SnackBar.vue";
import SnackBarMixin from "./SnackBarMixin.vue";
export default {
  extends: SnackBarMixin,
  components: {
    "snack-bar": SnackBar,
  },
  data() {
    return {
      dialog: false,
    };
  },
  watch: {
    dialog(val) {
      if (!val) return;
      this.wakeupBackendServer();
    },
  },
  methods: {
    emitBackendReady() {
      this.dialog = false;
      this.showSuccess("Backend Server Successfully Loaded");
      this.$emit("backendReady", true);
    },
    wakeupBackendServer() {
      service.wakeup().finally(() => {
        this.emitBackendReady();
      });
    },
  },
};
</script>