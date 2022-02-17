<template>
  <v-container style="max-width: 1000px" class="mt-10">
    <v-row>
      <v-col sm="12">
        <v-row no-gutters>
          <template v-if="visibility" id="report-controls">
            <v-col cols="3" />
            <v-col cols="6" align-self="center">
              <year-month-picker @dateUpdated="getDate" />
            </v-col>
            <v-col cols="3" />
          </template>

          <template v-if="!visibility" id="no-report-view" align-self="center">
            <v-col cols="4" sm="6" align-self="center">
              <v-img
                :src="require('../../assets/finance_professional.svg')"
                contain
                height="380"
              />
            </v-col>
            <v-col cols="8" sm="6" align-self="center">
              <h3 class="headline mb-5" style="color: #4d61fc">
                Seek for reports on months that you're sure you have registred
                Financial Transactions
              </h3>
              <p class="font-weight-regular">There's Nothing Here</p>
              <p class="font-weight-thin">
                Add some Entries and See the Magic!
              </p>
              <year-month-picker @dateUpdated="getDate" />
            </v-col>
          </template>

          <template v-else id="report-view">
            <v-col cols="6" align-self="center" class="pa-5">
              <report-header
                title="Month Expendings"
                :subtitle="date.formattedName"
                @updateRequired="getExpendings"
              />
              <pie-chart :chartData="this.expendingsData" />
            </v-col>
            <v-col cols="6" align-self="center" class="pa-5">
              <report-header
                title="Month Balance"
                :subtitle="date.formattedName"
                @updateRequired="getOnlySummary"
              />
              <bar-chart :chartData="this.summaryData" />
            </v-col>
          </template>
        </v-row>
      </v-col>
    </v-row>
    <snackbar
      :color="snackbarColor"
      :text="snackbarMessage"
      :visible="snackbarVisibility"
    />
  </v-container>
</template>
<script>
import { service, getToken } from "../../services/api.js";
import YearMonthPicker from "../YearMonthPicker.vue";
import ReportHeader from "./ReportHeader.vue";
import SnackBarMixin from '../SnackBarMixin.vue';
import SnackBar from "../SnackBar.vue";
import PieChart from "./PieChart.vue";
import BarChart from "./BarChart.vue";

export default {
  extends: SnackBarMixin,
  components: {
    "report-header": ReportHeader,
    "year-month-picker": YearMonthPicker,
    "pie-chart": PieChart,
    "bar-chart": BarChart,
    "snackbar": SnackBar,
  },
  data: () => ({
    date: {
      year: null,
      month: null,
      monthName: null,
    },
    summaryData: undefined,
    expendingsData: undefined,
    visibility: false,
  }),
  watch: {
    "date.month": async function () {
      this.getSummary();
    },
  },
  methods: {
    getDate(value) {
      this.date.year = value.split("-")[0];
      this.date.month = value.split("-")[1];
      this.date.formattedName = this.getMonthName(
        this.date.month,
        this.date.year
      );
    },
    getMonthName(month, year) {
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      return `${monthNames[month - 1]} of ${year}`;
    },
    getExpendings() {
      const token = getToken();
      service
        .getExpenses(token, this.date.year, this.date.month)
        .then((res) => {
          this.expendingsData = res.data;
          this.visibility = true;
        })
        .catch(() => {
          this.visibility = false;
          this.showError('This Month has no Associated Categorized Expenses');
        });
    },
    getOnlySummary() {
      const token = getToken();
      service.getSummary(token, this.date.year, this.date.month).then((res) => {
        this.summaryData = res.data;
      });
    },
    getSummary() {
      const token = getToken();
      service
        .getSummary(token, this.date.year, this.date.month)
        .then((res) => {
          this.summaryData = res.data;
          this.visibility = true;
        })
        .then(() => {
          service
            .getExpenses(token, this.date.year, this.date.month)
            .then((res) => {
              this.expendingsData = res.data;
              this.visibility = true;
            });
        })
        .catch(() => {
          this.visibility = false;
          this.showError('This Month has no Associated Summary');
        });
    }
  },
};
</script>
