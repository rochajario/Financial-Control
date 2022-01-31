<template>
  <v-container>
    <v-row
        align="start"
        align-content="start"
      >
      <v-col style="width: 300px;">
        <entries-table />
      </v-col>
      <v-col style="width: 300px;">
        <statistics-panel />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import EntriesTable from "../EntriesTable.vue";
import StatisticsPanel from "../StatisticsPanel.vue";

export default {
  components: {
    EntriesTable,
    StatisticsPanel
  }
};
</script>

