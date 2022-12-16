import React, { useState } from 'react'
import Menu from "./components/Menu"
import Order from "./components/Order"
import pizza from "./photos/pizza.jpg" 
import cookie from "./photos/cookie.jpg" 
import milk from "./photos/milk.jpg" 
import soda from "./photos/soda.jpg" 
import "./App.css"

function App() {
  const [menu, setMenu] = useState([
    {item: "Pizza", price: 10.00, image: pizza},
    {item: "Soda", price: 1.50, image: soda}, 
    {item: "Milk", price: 1.95, image: milk},
    {item: "Cookies", price: 2.50, image: cookie},
  ])

  const [cartItem, setCartItem] = useState([])
  const [total, setTotal] = useState([0])

  const itemOrder = (orderedItem) => {
    setCartItem([...cartItem, orderedItem])
    setTotal ([...total, orderedItem.price])
  }

  const runningTotal = total.reduce((acc, currVal) => {
    return acc + currVal
  })

  return (
    <>
      <h1>Our Menu:</h1>

      {menu.map((value, index) => {
        return (
          <Menu value={value} key={index} itemOrder={itemOrder} />
        )
      })}

      <h3>Your Order:</h3>
      {cartItem.map((value, index) => {
        return (
          <Order value={value} key={index}/> 
        )

      })}
      
      <h3>Total:</h3>
      ${runningTotal.toFixed(2)}
      <h3>Total with Tax:</h3>
      ${(runningTotal * 1.07).toFixed(2)}
      {/* {
      // let total = 0
      cartItem.forEach((value) => {
        // total+=value.price
        console.log("price", value.price)
      })
      } */}
    </>
  );
}

export default App;
