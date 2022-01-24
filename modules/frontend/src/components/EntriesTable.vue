<template>
  <v-card>
    <v-card-title>
      Financial Entries
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="entries" :search="search">
      <template v-slot:item.type="{ item }">
        <v-chip :color="getColor(item.type)" dark>
          {{ item.type }}
        </v-chip>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
//import getAllEntries from '../assets/js/api';
export default {
  created() {
      this.getFinancialEntries();
  },
  methods: {
    getColor(value) {
      return value == "Receiving" ? "#4caf50" : "#f44336";
    },
    getFormattedDate(value) {
      return new Date(value).toUTCString();
    },
    getFinancialEntries() {
        const customHeaders = new Headers({
            "Access-Control-Allow-Origin": "*"
        })

        const init = {
            headers: customHeaders,
            mode: 'cors',
            cache: 'default'
        }
        fetch("http://localhost:5000/entries/", init)
        .then(res =>{
            this.entries = res.json
        })
    }
  },
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Description",
          align: "start",
          sortable: false,
          value: "description",
        },
        { text: "Value", value: "value" },
        { text: "Operation Type", value: "type" },
        { text: "Operation Date", value: "date" },
      ],
      entries: [],
    };
  },
};
</script>