import REACT, { useState } from 'react';
import './App.css';
import RollDice from './components/RollDice.js'

const App = () => {

  const [rolling, setRolling] = useState(1)
  
  const diceResults = () => {
    let rolled = (Math.floor(Math.random() * 6))
    setRolling(rolled)
  }
  //console.log(rolled)
  return (
   <>
    <h1>Challenge: Dice Roller</h1>
    <div className = "square-box">
    <div className = "left-box">
      <button onClick = {diceResults}>Roll the Dice</button>
      <h2>{diceResults}</h2>
    </div>
    <div className = "right-box"></div>
    </div>
    <RollDice number={rolling}/>
   </>
  );
}

export default App;
