<script>
import { Pie } from "vue-chartjs";
import { randomColor } from "../assets/js/randomColorGenerator";
export default {
  extends: Pie,
  props: {
    chartData: {
      type: [],
      required: true,
    },
  },
  data: () => ({
    parsedLabels: [],
    parsedBackgroundColor: [],
    parsedData: [],
  }),
  methods: {
    cleanUpData() {
      this.parsedLabels = [];
      this.parsedBackgroundColor = [];
      this.parsedData = [];
    },
    prepareChart() {
      if (this.chartData) {
        this.cleanUpData();
        this.chartData.forEach((i) => {
          this.parsedLabels.push(i.category);
          this.parsedBackgroundColor.push(randomColor());
          this.parsedData.push(i.totalAmount);
        });
      }
    },
    elaborateVisualization() {
      this.renderChart(
        {
          labels: this.parsedLabels,
          datasets: [
            {
              backgroundColor: this.parsedBackgroundColor,
              data: this.parsedData,
            },
          ],
        },
        {
          responsive: true,
          maintainAspectRatio: false,
        }
      );
    },
  },
  mounted() {
    this.prepareChart();
    this.elaborateVisualization();
  },
  watch: {
    chartData: function () {
      this.prepareChart();
      this.elaborateVisualization();
    },
  },
};
</script>