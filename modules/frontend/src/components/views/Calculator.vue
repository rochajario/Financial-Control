<template>
  <div id="calculator" class="flex-container">
    <v-card>
      <entries-table/>
    </v-card>
  </div>
</template>
<script>
import EntriesTable from '../EntriesTable.vue'
export default {
  components:{
    EntriesTable
  }
}
</script>

<style scoped>
.flex-container {
  padding: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>
