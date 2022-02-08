<template>
  <v-row :justify="position" class="mr-2 ml-2">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          {{ title }}
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="d-flex justify-space-between">
          <span class="text-h5">New Entry</span>
          <span class="group pl-3">
            <v-chip :color="operationType.color" dark>
              {{ this.operationType.text }}
            </v-chip>
            <tooltip text="To add an expendig use the minus simbol before value amount."/>
          </span>
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
                  label="Description*"
                  :rules="rules.description"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="entry.value"
                  label="Amount*"
                  prefix="$"
                  required
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  v-if="parseFloat(this.entry.value) < 0"
                  :items="[
                    'Food',
                    'Health',
                    'Home',
                    'Transport',
                    'Education',
                    'Leisure',
                    'Unforseen',
                  ]"
                  v-model="entry.category"
                  label="Category"
                ></v-select>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import Tooltip from './Tooltip.vue'
export default {
  components:{
      'tooltip':Tooltip
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    position: {
      type:String,
      default:'center',
      required:true
    }
  },
  data: () => ({
    dialog: false,
    rules: {
      description: [
        (val) => (val || "").length > 0 || "This field is required",
      ],
    },
    entry: {
      description: "",
      value: "0.00",
      category: "",
    },
    operationType: {
      color: "grey",
      text: "Undefined",
    },
  }),
  methods: {
    save() {
      this.dialog = false;
      this.$emit("entryAdded", this.entry);
    },
  },
  watch: {
    "entry.value": function (value) {
      const defaultOperationType = {
        color: "grey",
        text: "Undefined",
      };
      const expenseOperationType = {
        color: "red",
        text: "Expense",
      };
      const earningOperationType = {
        color: "green",
        text: "Earning",
      };

      if (
        value == "0.00" ||
        value == null ||
        value == undefined ||
        value == 0
      ) {
        this.operationType = defaultOperationType;
        return;
      }
      const parsedValue = parseFloat(value);
      return parsedValue > 0
        ? (this.operationType = earningOperationType)
        : (this.operationType = expenseOperationType);
    },
  },
};
</script>