import React, { useState } from 'react';
import './App.css';
import Box from './components/Box'
import Counter from './components/Counter'

function App() {
  let diceValues = [1, 2, 3, 4, 5, 6]
  let rolls = []
  const [currentDice, setCurrentDice] = useState(diceValues[0])
  const [rollList, setRollList] = useState([])


  const triggerNextDice = () => {
    setCurrentDice(diceValues[Math.floor(Math.random() * diceValues.length)])
    // rolls.push(currentDice)
    // setRollList(current => [...current, currentDice])
    // rollList.push(currentDice)
    console.log(rollList);
    console.log(rolls);
  }
  
  
  return (
    <>
      <div className="boxContainer">
      <Box triggerNextDice={triggerNextDice} currentDice={currentDice}/>
      {/* <img className="dice" src={diceValues[0]}></img> */}
      <Counter />
      </div>
    </>
  );
}

export default App;
