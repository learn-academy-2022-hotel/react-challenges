import React, {useState} from "react"
import './Components/FoodItems'
import FoodItems from "./Components/FoodItems"


const App = () => {
  
  const [order, setOrder] = useState([
   {name: "lamb"},
   {name: "chicken"},
   {name: "rice"},
   { name: "potatoes"}

  ])
    
  
  return (
    <>
    <h1>Menu</h1>
    {order.map((value) => {
      return (
        <FoodItems
        item = {value}
        />
      )
      })}
    </>
  )



}

export default App
