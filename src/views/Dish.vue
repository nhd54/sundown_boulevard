<template>
  <div class="container dish row">
     <div class="row col s8">
    <div class="col s10" >
      <div class="card" v-for="dish in dish.meals" :key="dish.idMeal">
        <div class="card-image">
          <img src="images/logo.svg">
          <br>
          <span class="card-title black-text">{{ dish.strMeal }} </span>
        </div>
        <div class="card-content">
          <p>{{ dish.strInstructions }}</p>
        </div>
   
      </div>
    </div>
    <button @click="load" class="btn-large primary-background-color col offset-s7 s3">Generate New</button>
  </div>

      <div class="order col s4">
          <h2> Pick a Order <br> Pick a drink <br> finish </h2>
        <!--  <router-link to="/drinks" class="btn-large primary-background-color center">Next!</router-link> -->
        <button class="btn-large primary-background-color center" @click="handleClick">Next!</button>
      </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import getDish from '../composables/getDish'

export default {
   name: 'Dish',
   setup() {
        const { dish, error, load } = getDish()
        const router = useRouter()
        console.log(router)
        load()

        const handleClick = () => {
            router.push({ name: 'Drinks', params: { meal: dish.value.meals[0].strMeal } })
        }

        console.log(dish)
       return {dish, load, handleClick}
   }
}
</script>

<style scoped>

    .card .card-image img {
    width: 50%;
    margin: 0 auto;
}    

.row .col.offset-s7 {
    margin-left: 57.1%;
}

</style>
