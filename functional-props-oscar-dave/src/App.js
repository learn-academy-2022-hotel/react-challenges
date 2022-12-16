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
      <div>{list.map((item, index) => {
      return ( 
        <FoodItem 
          foodItem={item}
          key={index}
          orderMenuItem={orderMenuItem}
          index={index}/>)})}
        </div> 
          {/* list (which is the array of all of the info) is being filtered by whether or not the item has been ordered  */}
          {/*  the new list of filtered items is displayed with it's name */}
          {/* THIS IS HOW YOU MAKE A PERSISTANT LIST */}
          {list.filter(item => item.ordered === true).map((burger, index) => {
        return (
        <h3 key={index}>{burger.name}</h3>
        )})}
    </>
  )
}


export default App;
