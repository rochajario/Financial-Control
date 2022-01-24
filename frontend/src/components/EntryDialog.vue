<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          {{ title }}
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">New Entry</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="entry.description"
                  counter
                  maxlength="25"
                  hint="Give a brief description about the Entry"
                  label="Description"
                  :rules="rules.description"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-text-field
                  v-model="entry.value"
                  label="Amount*"
                  prefix="$"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-autocomplete
                  v-model="entry.categories"
                  :items="['Food', 'Health', 'Home', 'Transport', 'Education', 'Leisure', 'Unforseen', 'Others']"
                  label="Category"
                  multiple
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="save"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      }
    },
    data: () => ({
      dialog: false,
      rules: {
        description: [val => (val || '').length > 0 || 'This field is required'],
      },
      entry: {
        description: '',
        value: '0.00',
        categories: []
      }
    }),
    methods: {
      save() {
        this.dialog = false;
        this.$emit('entryAdded', this.entry);
      }
    }
  }
</script>