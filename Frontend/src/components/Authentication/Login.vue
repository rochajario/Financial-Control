<template>
  <v-card>
    <v-card-title class="d-flex justify-space-between">
      <span class="text-h5">Login</span>
      <span class="group pl-3">
        <tooltip
          text="Your data is safe, we use Cryptography."
        />
      </span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field 
              label="Email" 
              required 
              v-model="formData.email"
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="Password"
              type="password"
              required
              v-model="formData.password"
            />
          </v-col>
          <v-col cols="12">
            <div align="center">
              Doesn't Have an Account?<br />
              <v-btn
                color="secondary darken-1"
                text
                class="mt-2"
                @click="setLoginView"
              >
                Click Here
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="secondary darken-1" text @click="closeDialog">
        Close
      </v-btn>
      <v-btn color="secondary darken-1" text @click="getFormData">
        Proceed
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import Tooltip from "../Tooltip.vue";
export default {
  components: {
    tooltip: Tooltip,
  },
  data: function(){
    return {
      formData: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    closeDialog() {
      this.$emit("activeDialog", false);
    },
    setLoginView() {
      this.$emit("loginView", true);
    },
    getFormData() {
      this.$emit("formDataUpdated", this.formData);
      this.formData.email = '';
      this.formData.password = '';
    },
  },
};
</script>