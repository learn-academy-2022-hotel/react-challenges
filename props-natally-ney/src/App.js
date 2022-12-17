import React from "react"
import DiceRoll from './Components/DiceRoller'


const App = () => {
  const [roller, setRoller ]
    const newRoll = () => {
      let roll = (Math.floor(Math.random()* 6 + 1))
      return (roll)
    } 
  return (
      <>

        <h1> Dice Roll Game </h1>
        {/* <button onClick={DiceRoll}> Press me
        </button> */}
        <DiceRoll newRoll = {newRoll}/>

       </>

  )
}

export default App





//psuedo code