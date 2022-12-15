import React, {useState} from 'react';
import './App.css';
import FoodItem from './Components/FoodItem.js'

// Create an array of objects containing item name and price.
const App = () => {

  const [list, setList] = useState([
    {name: 'Hamburger', price: 4.99, ordered: false },
    {name: 'Cheeseburger', price: 5.99, ordered: false},
    {name: 'Bacon Cheeseburger', price: 6.99, ordered: false },
    {name: 'Western Bacon CheeseBurger', price: 7.99, ordered: false}
  ]) 

      const orderMenuItem = (selectedItem) => {
        list[selectedItem].ordered = true
        setList([...list])
      }

  return (
    <>
    <h1>Food List</h1>
    {list.map((item, index, price) => {
      return ( 
        <FoodItem 
          foodItem={item}
          key={index}
          orderMenuItem={orderMenuItem}
          index ={index}
          price={price}
        />

      )
    }
    )}
    </>
  )
}


export default App;
