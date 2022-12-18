import './App.css';
import React, {useState} from 'react';
import FoodItem from './Components/FoodItem';

// food ordering app//
  // Give a variable to listed food items
  // give the variable (foodname) food items
  // 
const App = () => {
  const [menu, setMenu] = useState([
    { name: "steak", bought: },
    { name: "cornBrea", bought: },
    { name: "bristket", bought: },
    { name: "potatos", bought: }
  ])
  
  const orderFoodItem =(selectedItem)=> {
    menu[selectedItem].ordered = true
    setMenu([...menu])
  }













  return (
    <>
    <h1>BBQ KINGS</h1>
    <h3>"Menu"</h3>
    {menu.map((menu, index) => {
      return <foodItem menu={menu} key={index} />
    })}
  </>
)
}



// return (
//   <>
//   <h1>BBQ KINGS</h1>
//   <h3>Menu</h3>
//   {menu.map ( (item) => {
//   return(
//   <FoodItem foodItem={item}/>
//   )
// }
// ) }
// </>
//  );
// }

export default App;
