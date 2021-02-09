import { ref } from 'vue'
import axios from 'axios'

const getDish = () => {

  const dish = ref([])
  const error = ref(null)

  const load =  () => {

    axios('https://www.themealdb.com/api/json/v1/1/random.php').then((response) => {
        return dish.value = response.data
            
    }).catch((err) => {
        console.log(err);
    })

  }

  

  return { dish, error, load }
}

export default getDish