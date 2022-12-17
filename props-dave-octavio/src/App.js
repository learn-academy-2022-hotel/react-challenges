import React, { useState } from 'react';
import './App.css';
import Box from './components/Box'
import Counter from './components/Counter'

function App() {
  // let diceValues = [1, 2, 3, 4, 5, 6]
  const [currentDice, setCurrentDice] = useState(1)
  const [rollList, setRollList] = useState([])


  const triggerNextDice = () => {
    // setCurrentDice(diceValues[Math.floor(Math.random() * diceValues.length)])
    setCurrentDice(Math.floor(Math.random() * 6))
    setRollList([...rollList, currentDice])
    // console.log("rollList", rollList);
  }
  
  
  return (
    <>
      <div className="boxContainer">
      <Box triggerNextDice={triggerNextDice} currentDice={currentDice}/>
      {/* <img className="dice" src={diceValues[0]}></img> */}
      <Counter rollList={rollList}/>
      </div>
    </>
  );
}

export default App;
