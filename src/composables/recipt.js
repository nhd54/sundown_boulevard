import { ref } from 'vue'
import  axios from 'axios'
const Recipts = () => {

  const recipts = ref([])
  const currentRecipe = ref([])
  const error = ref(null)
  
  const createRecipt =  (recipt) => {
      axios.post('http://localhost:3000/recipts', recipt).then((response) => {
         console.log(response);
      }).catch((err) => {
          console.log(err)
      })

  }


  const load =  (emails) => {
    axios('http://localhost:3000/recipts').then((response) => {   
      let res = response.data
       return currentRecipe.value = res.filter((r) => {
          return r.email.includes(emails)
       })     
    }).catch((err) => {
        console.log(err);
    })
   
  }

 

  return { recipts, createRecipt, currentRecipe, error, load }
}

export default Recipts