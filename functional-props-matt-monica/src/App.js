import React, { useState } from 'react'
import './App.css';
import FoodItem from './components/FoodItem'

const App = () => {
// create a use state 'menu, setMenu' and create an object within the useState with the food item, price, and if it has been ordered or not.
const [menu, setMenu] = useState([
  {item: 'Tacos', price: 4, ordered: false},
  {item: 'Tamales', price: 7, ordered: false},
  {item: 'Beans', price: 3, ordered: false},
  {item: 'Rice', price: 2, ordered: false},
  {item: 'Flan', price: 5, ordered: false}
])

const [currentTotal, setCurrentTotal] = useState(0)

// create a function that will have a value
const orderMenuItem = (selectedItem) => {
  let myOrder = menu[selectedItem]
  myOrder.ordered = true
  console.log(currentTotal + myOrder.price)
  setMenu([...menu])
  setCurrentTotal(currentTotal + myOrder.price)
}

// when an item is ordered we want to push the price so we can add the values together and get a total cost menu[i].price
// menu[selectedItem].price and add them together
// const orderLog = () => {
//   setCurrentOrder
// }

  return (
    <>
      <h1>M&M Taco Shop- You hungry? We can help!</h1>
      <h3>Menu</h3>
      {menu.map((name, item) => {
        return (
          <FoodItem foodItem= {name} orderMenuItem= {orderMenuItem} item={item}/>
        )
      })}
      <h2>Current Total: ${currentTotal}</h2>
    </>
  );
}

export default App;
