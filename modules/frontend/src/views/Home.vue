<template>
  <div>
    <carousel />
    <div class="card-container">
      <card v-for="card in cards" :key="card.title" :cardInfo="card"/>
    </div>
  </div>
</template>

<script>
import Carousel from '../components/Carousel.vue'
import Card from '../components/Card.vue'
  export default {
    name: 'Home',
    components: {
      Carousel,
      Card
    },
    data (){
      return {
        cards: [
          {
            title:'Project Information',
            subtitle:'Learn about the project',
            callForAction:'The easy way to track your outcomes',
            compliment:'',
            image:'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            route:'/'
          },
          {
            title:'Api Documentation',
            subtitle:'View the most recent changes on Api',
            callForAction:'How to consume the Api',
            compliment:'',
            image:'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            route:'/'
          },
          {
            title:'Demonstration App',
            subtitle:'A Taste of Api Functions',
            callForAction:'Validate Api usage',
            compliment:'',
            image:'https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            route:'/calculator'
          },
        ]
      }
    }
  }
</script>
<style scoped>
.card-container {
  display: flex;
  flex-direction: row;
  padding:15px;
}
</style>