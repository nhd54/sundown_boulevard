import { ref } from 'vue'
import axios from 'axios'

const getDrinks = () => {

  const drinks = ref([])
  const error = ref(null)

  const load =  () => {

    axios('https://api.punkapi.com/v2/beers').then((response) => {
        return drinks.value = response.data
            
    }).catch((err) => {
        console.log(err);
    })

  }

  console.log(drinks);

  return { drinks, error, load }
}

export default getDrinks