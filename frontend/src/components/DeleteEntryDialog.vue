<template>
  <v-dialog v-model="dialog" persistent max-width="290">
    <template v-slot:activator="{ on, attrs }">
      <v-icon small class="ml-2 mr-2" v-bind="attrs" v-on="on">
        mdi-trash-can-outline
      </v-icon>
    </template>
    <v-card>
      <v-card-title class="text-h5">Are you sure?</v-card-title>
      <v-card-text
        >Do you really want to remove {{ this.entry.description }} entry?</v-card-text
      >
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">Cancel</v-btn>
        <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {
    entry: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    deleteItemConfirm() {
      this.$emit('deleteEntry', this.entry.id);
      this.dialog = false;
    },
  },
};
</script>