<template>
  <v-card>
    <v-card-title>
      Entries
      <v-spacer></v-spacer>
      <v-row
        align="center"
      >
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <entry-dialog title="New Entry" @entryAdded="updateAddedEntry"/>
        </v-col>
      </v-row>
    </v-card-title>
    <v-data-table :headers="headers" :items="entries" :search="search">
      <template v-slot:item.value="{ item }">
        {{ getFormattedValue(item.value) }}
      </template>
      <template v-slot:item.type="{ item }">
        <v-chip :color="getColor(item.type)" dark>
          {{ item.type }}
        </v-chip>
      </template>
      <template v-slot:item.date="{ item }">
        {{ getFormattedDate(item.date) }}
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import {api} from "../assets/js/apiService"
import EntryDialog from "../components/EntryDialog.vue"
export default {
  components: {
    EntryDialog
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
  methods: {
    getColor(value) {
      return value == "Receiving" ? "#4caf50" : "#f44336";
    },
    getFilteredEntries() {
      if(!this.search) {
        return this.headers;
      }
      return this.headers.filter(h => h.description.includes(this.search));
    },
    getFormattedDate(value) {
      return new Date(value).toLocaleDateString('en-US');
    },
    getFormattedValue(value) {
      const valueFormat = Intl.NumberFormat('en-US')
      return `$ ${valueFormat.format(value)}`;
    },
    getFinancialEntries() {
      api.getAllEntries()
        .then(res => this.entries = res.data);
    },
    updateAddedEntry(value) {
      api.newEntry(value)
        .then(res => this.entries.push(res.data))
    }
  },
  created() {
      this.getFinancialEntries();
  }
};
</script>