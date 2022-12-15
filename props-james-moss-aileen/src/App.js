import React, {useState} from "react"
import Dice from "./components/Dice"
import "./App.css"

const App = () => {
  
  const [diceNumber, setDiceNumber] = useState ([1, 2, 3, 4, 5, 6])

  const [roll, setRoll] = useState(1)

  const diceRoll = () => {
    let randomValue = Math.floor(Math.random() * diceNumber.length)

    let result = diceNumber[randomValue]

    return diceNumber[result]
  }
  console.log(diceRoll())

  return (
    <>
        <div className="dice-box" onClick={diceRoll}>
        </div>
    </>
  );
}

export default App;
