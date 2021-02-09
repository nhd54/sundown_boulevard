<template>
  <div class="order container row">
        <div class="row col s12">
            <div class="col s12">
                <div class="card-panel  row">  
                    
                        
                    
                    <span class="col s6"> 
                        <h3 class="left">Finish Order</h3>
                       
                        <input type="text" placeholder="Pick a date" v-model.lazy="orderedDate" class="datepicker">
                        <input type="text" placeholder="Pick a time" v-model.lazy="orderedTime" class="timepicker">
                    </span>
                    <span class="col s6">
                        <button class="btn primary-background-color" @click="persons--">Decrease</button>
                          <b> Select amount of people:  {{ persons }} </b> 
                         <button class="btn primary-background-color" @click="persons++">Increase</button>  

                         <label>Enter Email:</label> 
                         <input type="text" v-model="email">
                    </span>

                    <div class="col s12">
                        <button @click="handleClick" class="btn-large primary-background-color right">Order!</button>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>

import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import Recipts from '../composables/recipt'
export default {
    name: 'Order',
     mounted() {
    
     let date = document.querySelectorAll('.timepicker');
     let dateinstances = M.Timepicker.init(date);

     let time = document.querySelectorAll('.datepicker');
     let timeinstances = M.Datepicker.init(time);
  
  },
    setup(){
    const { recipts, createRecipt } = Recipts()
    const route = useRoute();
    const router = useRouter();

    const persons = ref(1)
    const email = ref('')
    const orderedDate = ref()
    const orderedTime = ref()
    

        const handleClick = () => {  
            const recipt = {
            email: email.value,
            date: orderedDate.value,
            time: orderedTime.value,
            amount: persons.value,
            order: route.params
          } 
      createRecipt(recipt); 
      router.push({name: 'Recipt', params: {email: recipt.email}})
       }

     return {persons, orderedDate, orderedTime, email, handleClick}
    }

}
</script>

<style>

 .datepicker-modal {
     width: 1000px;
     height:800px;
 }

</style>