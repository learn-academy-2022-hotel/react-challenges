import React, { useState } from 'react'
import './App.css';
import Dice from './components/Dice'
import Rolls from './components/Rolls'

const App = () => {

  const diceNumbers = [1, 2, 3, 4, 5, 6]
  const rollLog = []

  const [currentNumber, setCurrentNumber] = useState(diceNumbers[0])

  const randomNumber = () => {
    let nextNumber = Math.floor(Math.random() * 6)
    setCurrentNumber(diceNumbers[nextNumber])
    // rollLog.push(currentNumber) not working
    // console.log(rollLog);
  }
// Pushing the currentNumber into the rollLog array
// Map rollLog to grow everytime we roll a new number, it will continue to grow with every click
  
  return (
    <>
      <h1>Dice Challenge</h1>
      <div className="appBox">
        <div className="diceBox">
          <Dice currentNumber={currentNumber} randomNumber={randomNumber} />
        </div>
        <div className="rollsBox">
          <Rolls currentNumber={currentNumber} />
        
          
        </div>
      </div>
    

    </>
  );
}

export default App;
