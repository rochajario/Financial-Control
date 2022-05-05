<template>
  <div class="text-center">
    <v-snackbar v-model="snackbar" :timeout="timeout" :color="color">
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    visible: {
      type: Number,
      default:0,
      required: true,
    },
    color: {
      required: true,
    },
  },
  data: () => ({
    snackbar: false,
    timeout: 2000,
  }),
  watch:{
      visible: function() {
          this.snackbar = true
      }
  }
};
</script>