<template>
  <div class="container home row">
      <div class="galleri col s9">

         <div class="carousel">
    <a class="carousel-item" href="#one!"><img src="images/logo.svg"></a>
    <a class="carousel-item" href="#two!"><img src="images/logo.svg"></a>
    <a class="carousel-item" href="#three!"><img src="images/logo.svg"></a>
    <a class="carousel-item" href="#four!"><img src="images/logo.svg"></a>
    <a class="carousel-item" href="#five!"><img src="images/logo.svg"></a>
  </div>

      </div>
      <div class="order col s3">
          <h2> Taste our exellent food, book a order and have food prepered for your arrivel! </h2>
          <router-link to="/dish" class="btn-large primary-background-color center">Order Now</router-link>
      </div>
      <div class="email col s6">
          <h3>Find your order right here!</h3>

          <label class="left">Enter Email:</label>
          <input type="text" v-model="email">
          <button class="btn-large primary-background-color right" @click="handleClick">Find</button>
          
      </div>
      <div class="content col s6">Content</div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'Home',
  mounted() {
        let elems = document.querySelectorAll('.carousel');
        let instances = M.Carousel.init(elems);

  },
  setup() {
    const router = useRouter();
    const email = ref('')

    const handleClick = () => {
      
      router.push({name: 'Recipt', params:{email: email.value}})

    }

    return {email, handleClick}
  }
}
</script>

<style scoped>
  
  .home {
    margin-top:50px;
  }
</style>
