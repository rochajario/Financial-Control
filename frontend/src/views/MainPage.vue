<template>
  <v-sheet
    min-height="40vh"
    min-width="40vh"
    width="90vh"
    rounded="lg"
    class="ma-5"
  >
    <v-tabs-items v-model="referenceTab" class="pa-10">
      <v-tab-item>
        <entries />
      </v-tab-item>
      <v-tab-item>
        <statistics />
      </v-tab-item>
    </v-tabs-items>
  </v-sheet>
</template>

<script>
import Entries from "../components/Entries.vue";
import StatisticsPanel from "../components/StatisticsPanel.vue";
export default {
  name: "MainPage",
  components: {
    entries: Entries,
    statistics: StatisticsPanel,
  },
  props: {
    referenceTab: {
      required: true,
    },
  },
};
</script>
