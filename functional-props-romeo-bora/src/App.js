import React, { useState} from "react"
import './App.css';
import FoodItem from "./components/FoodItem"

// As a user, I can see an application that has a list of food items and the price of each item.
// Hint: Take some time to think about the data structure that will allow you to effectively store the required information.
// As a user, I can click a button to select an item I wish to order.
// As a user, I can see the items I have selected to order displayed on the page.

// pseudo code: input: array of objects [{foodItem: pizza}] 
// output: return a new array with selected food items along with pricing
// process: 

const App = () => {
  const [menuItems, setMenuItems] = useState([
    {foodItem: "pizza", ordered: false},
    {foodItem: "cheeseburger", ordered: false},
    {foodItem: "fries", ordered: false},
    {foodItem: "milkshake", ordered: false },
    {foodItem: "soda", ordered: false}
  ])
  const orderedItems = (selectedItems) => {
    menuItems[selectedItems].ordered = true
    setMenuItems([...menuItems])
  }
  return (
<>
 <h1>Food List</h1>
 <FoodItem
//  foodItem={foodItem}
/>
</>
  )
}

export default App;
