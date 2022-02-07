
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
          <pie-chart :chartData="this.expendingsData" />
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
import PieChart from "../charts/PieChart.vue";
import BarChart from "../charts/BarChart.vue";
import { service, getToken } from "../assets/js/api";

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
    expendingsData: undefined,
  }),
  mounted: function () {
    const currentDate = new Date();
    this.getDate(currentDate.toISOString());
  },
  watch: {
    "date.month": async function () {
      this.getSummary();
    },
  },
  methods: {
    getDate(value) {
      this.date.year = value.split("-")[0];
      this.date.month = value.split("-")[1];
    },
    getExpendings() {
      const token = getToken();
      service
        .getExpenses(token, this.date.year, this.date.month)
        .then((res) => {
          this.expendingsData = res.data;
          this.visible = true;
        })
        .catch(() => {
          this.visible = false;
        });
    },
    getSummary() {
      const token = getToken();
      service
        .getSummary(token, this.date.year, this.date.month)
        .then((res) => {
          this.summaryData = res.data;
          this.visible = true;
        })
        .then(() => {
          service
            .getExpenses(token, this.date.year, this.date.month)
            .then((res) => {
              this.expendingsData = res.data;
              this.visible = true;
            });
        })
        .catch(() => {
          this.visible = false;
        });
    },
  },
};
</script>