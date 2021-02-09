<template>
  <div class="container drinks row">
    <div class="row col s6">
        <div class="col s6" v-for="drink in drinks" :key="drink.id" @click="ordered">
            <div class="card-panel  row">
                <div class="card-image col s6">
                    <img :src="drink.image_url">
                </div>     
                <span class="black-text col tick s6">
                    <img src="images/tick.png" alt="">
                </span>
                <span class="col s12 name">{{drink.name}} </span>
            </div>
        </div>
    </div>

        

       <div class="order col offset-s2 s4">
          <h2> {{ meal }} <br> Pick a drink <br> finish </h2>
          <router-link to="/order" class="btn-large primary-background-color center">Next!</router-link>
          <button class="btn-large primary-background-color center" @click="handleClick">Next!</button>
      </div> 

  </div>
</template>

<script>

import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import getDrinks from '../composables/getDrinks'

export default {
    name: 'Drinks',
    
    setup(props) {

        const route = useRoute();
        const router = useRouter();

        const meal = ref(route.params.meal)
        const orderdDrinks = ref([])

        const handleClick = () => {
            router.push({ name: 'Order', params: { meal: meal.value, drinks: orderdDrinks.value } })
        }



        const { drinks, error, load } = getDrinks()
        const ordered = (e) => {
         if(e.path[0].classList.contains('card-panel')){
             if(e.path[0].classList.contains('ordered'))
             {
                e.path[0].classList.remove('ordered')
             }
             else {
                orderdDrinks.value.push(e.target.children[2].textContent)
                e.path[0].classList.add('ordered')
             }
         }

        }

        load()

        return {drinks, ordered, meal, handleClick}
    }

}
</script>

<style>
    .card-panel {
        min-height: 223px;
    }

    .tick {
        display:none;
    }

    .ordered .tick {
        display: block;
    }

   .card-panel img {
        width:40%;
    }

    .row .col {
    padding: 0 1rem;
}
    .name {
        text-align: left;
    }

</style>
  
  