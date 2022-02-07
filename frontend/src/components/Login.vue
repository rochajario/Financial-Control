<template>
  <form>
    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="E-mail"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="password"
      class="mb-3"
      :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[rules.required]"
      :type="passwordShow ? 'text' : 'password'"
      name="input-10-1"
      label="Password"
      @click:append="passwordShow = !passwordShow"
    ></v-text-field>

    <v-btn v-if="password!=''&&email!=''" class="mr-6" @click="submit"> submit </v-btn>
    <v-btn v-else class="mr-6" disabled> submit </v-btn>
    <v-btn @click="clear"> clear </v-btn>
  </form>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
    select: { required },
    checkbox: {
      checked(val) {
        return val;
      },
    },
  },

  data: () => ({
    email: "",
    password: "",
    passwordShow: false,
    rules: {
      required: (value) => !!value || "Required."
    },
  }),

  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
  },

  methods: {
    submit() {
      this.$v.$touch();
      const userData = {
        email: this.email,
        password: this.password,
      };
      this.$emit("userLogin",userData);
    },
    clear() {
      this.$v.$reset();
      this.email = "";
      this.password = "";
    },
  },
};
</script>