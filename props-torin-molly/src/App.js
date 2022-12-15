import React from 'react'
import './App.css'
import Dice from './components/Dice'

const App = () => {
  const randonNum = Math.floor(Math.random()*6)
  return (
    <>
    <h1>Hi!!!!!</h1>
    <button onClick> Click to Roll</button>
    <Dice/>
    </>
  )
}
export default App;
