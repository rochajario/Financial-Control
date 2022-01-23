<template>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="cardInfo.image"
    >
      <v-card-title>{{cardInfo.title}}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
      {{cardInfo.subtitle}}
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{cardInfo.callForAction}}</div>

      <div>{{cardInfo.compliment}}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="blue"
        text
      >
        <router-link class="custom-router-link" :to="cardInfo.route">See More</router-link>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
  export default {
      props:{
          cardInfo: {
              type: Object,
              required: true
          }
      }
  }
</script>
<style scoped>
.custom-router-link{
    text-decoration: none;
}
</style>