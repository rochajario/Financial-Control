<template>
  <v-carousel
    cycle
    height="350"
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
      <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="text-h2 banner-text">
            {{ item.text }} 
          </div>
        </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://images.unsplash.com/photo-1534951009808-766178b47a4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            text: "Easy Track Your Outcomes"
          },
          {
            src: 'https://images.unsplash.com/photo-1621280336935-ed7cae618aac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            text: "Learn About your Consumig Habits"
          },
          {
            src: 'https://images.unsplash.com/photo-1565374391015-af899382f2a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            text: "Plan your Personal Finances"
          }
        ],
      }
    },
  }
</script>
<style scoped>
.banner-text{
    font-weight: bolder;
    color: rgb(247, 245, 245);
    text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.699);
}
</style>