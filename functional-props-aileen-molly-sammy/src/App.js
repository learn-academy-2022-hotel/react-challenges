import React, { useState } from 'react'
import MenuItem from './components/MenuItem'
import './App.css';
import OrderItem from './components/OrderItem';

const App = () => {

  const [menu, setMenu] = useState([
    {name: 'taco', price: 2, ordered: false},
    {name: 'burrito', price: 4, ordered: false},
    {name: 'tamales', price: 3, ordered: false}
  ])


  const orderMenuItem = (itemOrdered) => {
    menu[itemOrdered].ordered = true
    setMenu([...menu])
  }
  /* 
  Psuedocode:

  let sumOfItem = menu.map((value) => {
    if(value.ordered === true){
      value.price += value.price
      
      return value.price
    }
    


  })
  */
  const totalCost = (items) => {
    let sumOfItem = items.map((value) => {
      value.price += value.price

      return value.price
    })
    return sumOfItem
  }


  return (
    <>
        <h1>Taco Town</h1>
        <h3>Menu</h3>
        {menu.map((foodItem, ordered) => {
          return (
            <MenuItem foodItem={foodItem} orderMenuItem={orderMenuItem} ordered={ordered} />
          )
        })}
        <h3>Total Cost</h3>
        <OrderItem totalCost={totalCost} />
    </>
  )
}

export default App;
