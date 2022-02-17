<template>
  <section>
    <v-data-table
      :headers="headers"
      :items="entries"
      sort-by="value"
      class="mt-10"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title class="font-weight-light"
            >My Entries</v-toolbar-title
          >
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
          <edit-entry-dialog
            :entryId="item.id"
            :entryDescription="item.description"
            @entryUpdated="editAddedEntry"
          />
          <delete-entry-dialog :entry="item" @deleteEntry="removeEntry" />
        </span>
      </template>
    </v-data-table>
    <snackbar
      :color="snackbarColor"
      :text="snackbarMessage"
      :visible="snackbarVisibility"
    />
  </section>
</template>

<script>
import { getToken, service } from "../services/api";
import EntryDialog from "./EntryDialog.vue";
import DeleteEntryDialog from "./DeleteEntryDialog.vue";
import EditEntryDialog from "./EditEntryDialog.vue";
import SnackBar from "./SnackBar.vue";
import SnackBarMixin from "./SnackBarMixin.vue";

export default {
  extends: SnackBarMixin,
  components: {
    snackbar: SnackBar,
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
      return value == "Receiving" ? "#36b09a" : "#b0364a";
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
      service
        .newEntry(token, value)
        .then((res) => {
          this.showSuccess("Entry Successfully Added");
          this.entries.push(res.data);
        })
        .catch(() => {
          this.showError("Failed Adding Entry");
        });
    },
    editAddedEntry(value) {
      const token = getToken();
      service
        .editEntry(token, value)
        .then((res) => {
          const index = this.entries.indexOf(
            this.entries.filter((e) => e.id == value.id)[0]
          );
          this.entries.splice(index, 1, res.data);
          this.showSuccess("Entry Successfully Updated");
        })
        .catch(() => {
          this.showError("Failed Updating Entry");
        });
    },
    removeEntry(value) {
      const token = getToken();
      service
        .removeEntry(token, value)
        .then(() => {
          this.showSuccess("Entry Successfully Removed");
          service.getAllEntries(token).then((res) => (this.entries = res.data));
        })
        .catch(() => {
          this.showError("Failed Removing Entry");
        });
    },
  },
  created() {
    this.getFinancialEntries();
  },
};
</script>