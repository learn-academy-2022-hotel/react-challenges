import './App.css';
import React, {useState} from 'react';
// import RandomDice from './components/RandomDice';
import Box from './components/Box';

const App = () => {

  const diceRolls = [1, 2, 3, 4, 5, 6]

  const [currentRoll, setCurrentRoll] = useState()
  const [rollLog, setRollLog] = useState([])
  
  let nextRoll = diceRolls[Math.floor(Math.random() * 6)]
  const randomDice = () => {
    setCurrentRoll(nextRoll)
    setRollLog([...rollLog, nextRoll])
  }

  let rollStorage = []
  console.log(rollStorage)
  let rollHistory = rollStorage.push(nextRoll)
  console.log(rollStorage);

  return (
    <>
      <h3>Click the box to roll the die</h3>
      <button onClick={randomDice} style={{margin: 30, height:"150px", width:"150px", backgroundColor:"white"}}>{currentRoll}</button>
      <h3>Roll History</h3>
      <Box rollDisplay={rollLog}/>
    </>
  )
}

export default App;
