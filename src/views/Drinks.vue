<template>
  <div class="container drinks row">
        <div class="row col s6">
         
            <div class="col s6" @click="ordered = !ordered">
                    <div class="card-panel  row">
                        <div class="card-image col s6">
                            <img src="https://images.punkapi.com/v2/2.png">
                        </div>     
                        <span class="black-text col s6">
                            <img src="images/tick.png" alt="">
                        </span>
                        <span class="col s12 name">{{ordered}}</span>
                    </div>
                </div>

            <div class="col s6"  @click="ordered = !ordered">
                    <div class="card-panel  row">
                        <div class="card-image col s6">
                            <img src="https://images.punkapi.com/v2/2.png">
                        </div>     
                        <span class="black-text col s6">
                            <img src="images/tick.png" alt="">
                        </span>
                        <span class="col s12 name">{{ordered}}</span>
                    </div>
                </div>

            <div class="col s6">
                    <div class="card-panel  row">
                        <div class="card-image col s6">
                            <img src="https://images.punkapi.com/v2/2.png">
                        </div>     
                        <span class="black-text col s6">
                            <img src="images/tick.png" alt="">
                        </span>
                        <span class="col s12 name">test</span>
                    </div>
                </div>

            <div class="col s6">
                    <div class="card-panel  row">
                        <div class="card-image col s6">
                            <img src="https://images.punkapi.com/v2/2.png">
                        </div>     
                        <span class="black-text col s6">
                            <img src="images/tick.png" alt="">
                        </span>
                        <span class="col s12 name">test</span>
                    </div>
                </div>
            </div>

        

       <div class="order col offset-s2 s4">
          <h2> Pick a Order <br> Pick a drink <br> finish </h2>
          <router-link to="/drinks" class="btn-large primary-background-color center">Next!</router-link>
      </div> 

  </div>
</template>

<script>

import { ref } from 'vue'
export default {
    name: 'Drinks',
    setup() {

        const ordered = ref([])

        return {ordered}
    }

}
</script>

<style>

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
  
  