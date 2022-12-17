import './App.css';
import React, {useState} from 'react';
import FoodItems from './components/FoodItems';

const App = () => {

  const [menu, setMenu] = useState([
    {name: 'RicChicken', price: 1, ordered: false},
    {name: 'RicMac', price: 3, ordered: false},
    {name: 'RicFries', price: 2, ordered: false},
    {name: '10 pc RicNuggets', price: 8, ordered: false}
  ])

  const orderMenuItem = (selectedItem) => {
    menu[selectedItem].ordered = true
    setMenu([...menu])
    setOrderHistory([...orderHistory, menu[selectedItem].price])
  }

  // const [totalPrice, setTotalPrice] = useState(0)
  const [orderHistory, setOrderHistory] = useState([])
  console.log(orderHistory)

  // const addPrices = (selectedItem) => {
  //   setTotalPrice()
  // }

  const basePrice = orderHistory.reduce((a, b) => a + b, 0)
  console.log(basePrice);
  let taxAmount = Number((basePrice * .06).toFixed(2))
  let totalAmount = basePrice+taxAmount
  console.log(taxAmount);

  return (
    <>
      <h1 className='header'>Welcome to McRonalds!</h1>
      <h2>Menu</h2>
      {menu.map((value, index) => {
        return (
          <div className='box'>
          <FoodItems 
            foodItems={value}
            orderMenuItem={orderMenuItem}
            index={index}
          />
          </div>
          )
        })}
          <div>
          <img className='mcchicken' src="https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-McChicken-1:product-header-desktop" />
          </div>
      <h2>Your total:</h2>
      <h4>Base: ${basePrice}</h4>
      <h4>Tax: ${taxAmount}</h4>
      <h4>Total: ${totalAmount}</h4>
    </>
  );
}

export default App;
