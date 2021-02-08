<template>
  <div class="container dish row">
     <div class="row col s8">
    <div class="col s10">
      <div class="card">
        <div class="card-image">
          <img src="images/logo.svg">
          <span class="card-title">Card Title</span>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
    <button class="btn-large primary-background-color col offset-s7 s3">Generate New</button>
  </div>

      <div class="order col s4">
          <h2> Pick a Order <br> Pick a drink <br> finish </h2>
          <router-link to="/drinks" class="btn-large primary-background-color center">Next!</router-link>
      </div>
  </div>
</template>

<script>
export default {
   name: 'Dish',
   setup() {

       return {}
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
