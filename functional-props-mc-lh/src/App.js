import './App.css';
import React, {useState} from 'react';
import FruitMenu from "./components/FruitMenu";
import Orders from "./components/Orders";

const App = () => {
  const [menu, setMenu] = useState([
      {name: "peach", price: "500 bells", ordered: false},
      {name: "orange", price: "500 bells", ordered: false},
      {name: "apple", price: "500 bells", ordered: false},
      {name: "pear", price: "500 bells", ordered: false},
      {name: "cherry", price: "500 bells", ordered: false},
      {name: "coconut", price: "250 bells", ordered: false},
  ])

  const orderMenuItem = (selectedItem) => {
    menu[selectedItem].ordered= true
    setMenu([...menu])
  }

  return (
    <>
    <h1>Animal Crossing Fruit Stand</h1>
    <h3>Menu</h3>
    <div>
    {menu.map((value, index)=>{
      return(
        <FruitMenu 
        fruits={value}
        orderMenuItem={orderMenuItem}
        index = {index}
        />
        )
      }
      )}
    </div>

    {menu.map((value) => {
      return(
        <Orders 
        menu={menu}
        orderMenuItem={orderMenuItem}
        />
        )
      }
      )}

    </>
  );
}

export default App;
