<template>
  <div>
    <div class="d-flex">
      <year-month-picker @dateUpdated="this.getDate" />
    </div>

    <v-expansion-panels
      v-if="this.visible"
      v-model="panel"
      :disabled="disabled"
      multiple
    >
      <v-expansion-panel>
        <v-expansion-panel-header>Expenses Summary</v-expansion-panel-header>
        <v-expansion-panel-content>
          <pie-chart :chartData="this.summaryData.categories" />
        </v-expansion-panel-content>
      </v-expansion-panel>

    <v-expansion-panel>
        <v-expansion-panel-header>Month Balance</v-expansion-panel-header>
        <v-expansion-panel-content>
          <bar-chart :chartData="this.summaryData" />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import YearMonthPicker from "../components/YearMonthPicker.vue";
import PieChart from "./charts/PieChart.vue";
import BarChart from "./charts/BarChart.vue";
import { api } from "../assets/js/apiService";

export default {
  components: {
    "year-month-picker": YearMonthPicker,
    "bar-chart": BarChart,
    "pie-chart": PieChart,
  },
  data: () => ({
    panel: [0, 1],
    disabled: true,
    readonly: false,

    date: {
      year: "",
      month: "",
    },
    visible: false,
    summaryData: undefined,
  }),
  methods: {
    getDate(value) {
      this.date.year = value.split("-")[0];
      this.date.month = value.split("-")[1];
      this.getSummary();
    },
    getSummary() {
      api
        .getSummary(this.date.year, this.date.month)
        .then((res) => {
          this.summaryData = res.data;
          this.visible = true;
        })
        .catch(() => {
            this.visible = false;
        });
    },
  },
};
</script>