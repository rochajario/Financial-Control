<template>
  <div>
    <carousel />
    <calculator v-if="this.visibility.calculator"/>
  </div>
</template>

<script>
import Carousel from '../Carousel.vue'
import Calculator from '../views/Calculator.vue'
  export default {
    name: 'Home',
    components: {
      Carousel,
      Calculator
    },
    data (){
      return {
        visibility: {
          calculator:true
        }
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