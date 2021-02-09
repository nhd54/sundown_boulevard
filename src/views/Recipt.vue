<template>
    <div class="recipt container row">
     <div v-if="spin == 'false'">
        <div class="card" v-for="recipe in currentRecipe" :key="recipe.id">
            <span> Mange Tak {{ recipe.email }} for din bestilling </span>
            <br>
            <span> den {{ recipe.date }}  </span>
            <span> kl:  {{ recipe.time }}  </span>
            <br>
            <div class="order">
                <span v-for="(order, index) in recipe.order" :key="index">
                du har bestilt en:
                   {{ order.meal }}
                <br> 
                <br> 
                samt drikkevarer   
                <ul v-for="(drink, index) in order.drinks" :key="index">
                    <li>
                        {{ drink }}
                    </li>
                </ul>

                </span>
       
            </div>
        </div>
     </div>
     <div v-else>
         <Spinner />
     </div>
   

    </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import Recipts from '../composables/recipt'

// component imports
import Spinner from '../components/Spinner.vue'
export default {
    name: 'Recipt',
    components: { Spinner },
    setup(){
    const spin = ref('true');            
    const { recipts, createRecipt, currentRecipe, error, load } = Recipts()    
    const route = useRoute();
    
    const recipt = ref(route.params.email) 

   
    onMounted(() => {
       setTimeout(function(){

        

       load(recipt.value);
        spin.value = 'false'
        }, 2000);

       
     })


    

     return {currentRecipe, spin}
    },
   
}
</script>
 
<style>

</style>