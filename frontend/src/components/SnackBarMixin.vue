<script>
export default {
  data: () => ({
    snackbarColor: null,
    snackbarMessage: null,
    snackbarVisibility: 0,
  }),
  methods: {
    showSuccess(message) {
      this.snackbarColor = "#36b09a";
      this.snackbarMessage = message;
      this.snackbarVisibility++;
    },
    showError(message) {
      this.snackbarColor = "#b0364a";
      this.snackbarMessage = message;
      this.snackbarVisibility++;
    },
  },
};
</script>