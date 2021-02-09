<template>
  <div class="order container row">
        <div class="row col s12">
            <div class="col s12">
                <div class="card-panel  row">  
                    
                        
                    
                    <span class="col s6"> 
                        <h3 class="left">Finish Order</h3>
                        <input type="text" placeholder="Pick a date" class="datepicker">
                        <input type="text" placeholder="Pick a time" class="timepicker">
                    </span>
                    <span class="col s6">
                        <button class="btn primary-background-color" @click="persons--">Decrease</button>
                          <b> Select amount of people:  {{ persons }} </b> 
                         <button class="btn primary-background-color" @click="persons++">Increase</button>  

                         <label>Enter Email:</label> 
                         <input type="text">
                    </span>

                    <div class="col s12">
                        <button class="btn-large primary-background-color right">Order!</button>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>

import { ref } from 'vue'

export default {
    name: 'Order',
     mounted() {
    
     let date = document.querySelectorAll('.timepicker');
     let dateinstances = M.Timepicker.init(date);

     let time = document.querySelectorAll('.datepicker');
     let timeinstances = M.Datepicker.init(time);
  
  },
    setup(){
     const persons = ref(0)
    
    
     return {persons}
    }

}
</script>

<style>

 .datepicker-modal {
     width: 1000px;
     height:800px;
 }

</style>