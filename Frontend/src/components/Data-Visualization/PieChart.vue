<script>
import { Pie } from "vue-chartjs";
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
    backgroundColors: ['#050a30','#000c66','#0000ff','#7ec8e3', '#60a3d9', '#0074b7', '#75e6da'],
    parsedData: [],
  }),
  methods: {
    cleanUpData() {
      this.parsedLabels = [];
      this.parsedData = [];
    },
    prepareChart() {
      if (this.chartData) {
        this.cleanUpData();
        this.chartData.forEach((i) => {
          this.parsedLabels.push(i.category);
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
              backgroundColor: this.backgroundColors,
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