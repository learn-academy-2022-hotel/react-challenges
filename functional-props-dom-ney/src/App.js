import React, {useState} from "react"
import './Components/FoodItems'
import FoodItems from "./Components/FoodItems"


const App = () => {
  
  const [order, setOrder] = useState([
   {name: "lamb", price: " $15"},
   {name: "chicken", price: " $12"},
   {name: "rice", price: " $5"},
   {name: "potatoes", price: " $6 "}

  ])
    const orderMenuItem =(selectedItem)=> {
      return (order[selectedItem].price )
      setOrder([order])
      
    }
  
  return (
    <>
    <h1>Menu</h1>
    {order.map((value,index) => {
      return (
        <FoodItems
        foodItem = {value}
        foodPrice = {index}
        />
      )
      })}
    </>
  )



}

export default App












// psuedo C0de: 
//  we want to create a setstate for our food items and their prices.
// create new file in components named "FoodItems"
// create what we want to return from "FoodItems"
// 