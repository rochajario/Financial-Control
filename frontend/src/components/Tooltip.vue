<template>
  <v-tooltip v-model="show" top>
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-icon color="grey lighten-1"> mdi-information-outline </v-icon>
      </v-btn>
    </template>
    <span>{{ this.text }}</span>
  </v-tooltip>
</template>

<script>
export default {
  props: {
    text: {
      required: true,
      type: String,
      default: "",
    },
  },
  data() {
    return {
      show: false,
    };
  },
};
</script>