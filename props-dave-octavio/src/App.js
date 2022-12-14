import React, { useState } from 'react';
import './App.css';
import Box from './components/Box'

function App() {
  let diceValues = ["https://github.com/learn-academy-2022-hotel/Syllabus/blob/main/react/assets/1-dice.png?raw=true", 2, 3, 4, 5, 6]

  const [currentDice, setCurrentDice] = useState(diceValues[0])

  const triggerNextDice = () => {
    setCurrentDice(diceValues[Math.floor(Math.random() * diceValues.length)])
  }
  
  
  return (
    <>
      <div className="boxContainer">{currentDice}
      <Box triggerNextDice={triggerNextDice} currentDice={currentDice}/>
      <img className="dice" src={diceValues[0]}></img>
      </div>
    </>
  );
}

export default App;
