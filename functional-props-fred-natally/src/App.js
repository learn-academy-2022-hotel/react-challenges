import REACT, {useState} from 'react'
import './App.css'
import './components/MenuItems.js';
import MenuItems from './components/MenuItems.js';

// Challenge: Food Ordering App

// As a developer, you are tasked with creating a food ordering application in React. This is the first iteration of an application that is going to be much larger in the future so it is important to create a solid foundation from which the code base can grow.

// The menu UI will be in its own component as will the order UI. App.js controls of all the data in state, renders the other components, and passes data to the menu and the order component.
// 📚 User Stories

//     As a user, I can see an application that has a list of food items and the price of each item.
//         Hint: Take some time to think about the data structure that will allow you to effectively store the required information.
//     As a user, I can click a button to select an item I wish to order.
//     As a user, I can see the items I have selected to order displayed on the page.

// 🏔 Stretch Goals

//     As a user, I can see the total cost of my current order.
//     As a user, I can see both the base total cost of my food selections and the total that includes sales tax.
//     As a user, I can see the total that includes sales tax rounded to two decimals.
//     As a user, I can see an image of my food selection on the menu.


const App = () => {

  const [menuItems, setMenuItems] = useState([
    {name: "Steak" ,orderItem: true, price: 18.99 },
    {name: "Chicken",orderItem: false, price: 13.99 },
    {name: "Soup",orderItem: true, price: 6.00 },
    {name: "Pasta",orderItem: false, price: 10.00 },
    {name: 'Veggies',orderItem: true, price: 5.00},
  ])
  const orderItem =(selectedItem)=> {
    menuItems[selectedItem].orderItem = true
    setMenuItems([...menuItems])
  }


  return (
   <>
   <h1> Havana Rest </h1>
   <h2>Menu</h2>
   {menuItems.map((name, index, price)=> {
    return(
      <MenuItems
      menuItems={name}
      orderItem={orderItem}
      index={index}
      price={price}
   /> 
   )
   }
   )}
  
   
   
   </>
  )
  }
export default App;
