import React, {useState} from 'react'
import './App.css'
import Dice from './components/Dice'
import DiceRolls from './components/DiceRolls'

const App = (props) => {
  const [diceImages, setDiceImages] = useState([0])
  const diceClick = () => {
  setDiceImages(diceImages + 1)
}

  return (
    <>
    
    {/* <p>Dice Counter: {diceImages}</p> */}
    

    <h1>Dice Roller:</h1>
    <div className="box-cards">
    
    <Dice/>
    <Dice/>


    </div>
    </>
  
  )
}

export default App;
