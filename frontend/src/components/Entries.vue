<template>
  <v-data-table
    :headers="headers"
    :items="entries"
    sort-by="value"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>All Entries</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <entry-dialog
          position="end"
          title="New Entry"
          @entryAdded="updateAddedEntry"
        />
      </v-toolbar>
    </template>
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
    <template v-slot:item.actions="{ item }">
      <span>
        <edit-entry-dialog :entryId="item.id" :entryDescription="item.description" @entryUpdated="editAddedEntry" />
        <delete-entry-dialog :entry="item" @deleteEntry="removeEntry" />
      </span>
    </template>
  </v-data-table>
</template>

<script>
import { getToken, service } from "../assets/js/api";
import EntryDialog from "./EntryDialog.vue";
import DeleteEntryDialog from "./DeleteEntryDialog.vue";
import EditEntryDialog from "./EditEntryDialog.vue";

export default {
  components: {
    "edit-entry-dialog": EditEntryDialog,
    "delete-entry-dialog": DeleteEntryDialog,
    "entry-dialog": EntryDialog,
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
        { text: "Actions", value: "actions", sortable: false },
      ],
      entries: [],
    };
  },
  methods: {
    getColor(value) {
      return value == "Receiving" ? "#4caf50" : "#f44336";
    },
    getFilteredEntries() {
      if (!this.search) {
        return this.headers;
      }
      return this.headers.filter((h) => h.description.includes(this.search));
    },
    getFormattedDate(value) {
      return new Date(value).toLocaleDateString("en-US");
    },
    getFormattedValue(value) {
      const valueFormat = Intl.NumberFormat("en-US");
      return `$ ${valueFormat.format(value)}`;
    },
    getFinancialEntries() {
      const token = getToken();
      service.getAllEntries(token).then((res) => (this.entries = res.data));
    },
    updateAddedEntry(value) {
      const token = getToken();
      service.newEntry(token, value).then((res) => this.entries.push(res.data));
    },
    editAddedEntry(value) {
      const token = getToken();
      service.editEntry(token, value).then((res) => {
        const index = this.entries.indexOf(this.entries.filter(e => e.id == value.id)[0]);
        this.entries.splice(index, 1, res.data);
      });
    },
    removeEntry(value){
      const token = getToken();
      service.removeEntry(token, value).then(() => {
        const index = this.entries.indexOf(this.entries.filter(e => e.id == value.id)[0]);
        this.entries.splice(index, 1);
      });
    }
  },
  created() {
    this.getFinancialEntries();
  },
};
</script>