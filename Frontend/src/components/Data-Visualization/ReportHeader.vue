<template class="d-flex justify-space-between">
  <v-row no-gutters>
    <v-col cols="6" class="mb-3">
      <h3 class="headline" align-self="center" style="color: #3663b0">
        {{ this.title }}
      </h3>
      <small>{{ this.subtitle }}</small>
    </v-col>
    <v-col cols="6" align-self="center" class="d-flex justify-end">
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <a @click="updateRequired">
            <v-icon
              align-self="center"
              class="pr-2"
              color="secondary"
              ligth
              v-bind="attrs"
              v-on="on"
            >
              mdi-refresh
            </v-icon>
          </a>
        </template>
        <span>Refresh this Report</span>
      </v-tooltip>
    </v-col>
  </v-row>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
  },
  methods:{
    updateRequired(){
      this.$emit('updateRequired',true)
    }
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
}
</style>