import { ref } from 'vue'


const Recipts = () => {

  const recipts = ref([
      {
        id: 1720,
        amount: 3,
        date: "Feb 01, 2021",
        email: "nicklasdegnebolig@gmail.com",
        order: {meal: "Garides Saganaki"},
        time: "05:46 PM"
      }
  ])


  const createRecipt =  (recipt) => {
      recipts.value.push(recipt)

      console.log(recipts.value)
  }

 

  return { recipts, createRecipt }
}

export default Recipts