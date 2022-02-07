<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  props: {
    chartData: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    monthSummary: {
      earnings: 0,
      expendings: 0,
      balance: 0,
      balanceColor: "",
    },
  }),
  methods: {
    getOperationColor(value) {
      return value >= 0 ? "#44AF69" : "#f87979";
    },
    cleanUp() {
      this.monthSummary = {
        earnings: 0,
        expendings: 0,
        balance: 0,
        balanceColor: "",
      };
    },
    prepareChart() {
      this.chartData.entries.forEach((i) => {
        if (i.type == "Payment") {
          this.monthSummary.earnings = i.totalAmount;
        } else {
          this.monthSummary.expendings = i.totalAmount;
        }

        this.monthSummary.balance = this.chartData.balance;
        this.monthSummary.balanceColor = this.getOperationColor(
          this.chartData.balance
        );
      });
    },
    elaborateVisualization() {
      this.renderChart(
        {
          labels: ["Expendings", "Earnings", "Balance"],
          datasets: [
            {
              label: "Month Summary",
              backgroundColor: [
                "#f87979",
                "#44AF69",
                this.monthSummary.balanceColor,
              ],
              data: [
                this.monthSummary.earnings,
                this.monthSummary.expendings,
                this.monthSummary.balance,
              ],
            },
          ],
        },
        { responsive: true, maintainAspectRatio: false }
      );
    },
  },
  mounted() {
    this.prepareChart();
    this.elaborateVisualization();
  },
};
</script>