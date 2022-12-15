import React, { useState } from 'react'
import Menu from "./components/Menu"
import Order from "./components/Order"
function App() {

  const [menu, setMenu] = useState([
    {item: "Pizza", price: 10.00},
    {item: "Sandwich", price: 5.00},
    {item: "Cookies", price: 2.50},
    {item: "Milk", price: 1.95},
    {item: "Soda", price: 1.50}, 
  ])

  const [cartItem, setCartItem] = useState([])

  const itemOrder = (orderedItem) => {
    setCartItem([...cartItem, orderedItem])
  }

  return (
    <>
      <h1>Our Menu:</h1>
      {menu.map((value, index) => {
        return (
          <Menu value={value} key={index} itemOrder={itemOrder} />
        )
      })}
      <Order /> 
    </>
  );
}

export default App;
