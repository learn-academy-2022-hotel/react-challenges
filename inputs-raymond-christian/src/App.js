import React, { useState } from 'react'
import './App.css';
import Robot from './components/Robot.js'

const App = () => {
  const [userInput, setUserInput] = useState("")
  //Psuedocode
  //create a text input 
  // incorporate a useState 
  // 
  const handleChange = (e) => {
    setUserInput(e.target.value)
    console.log(handleChange);
  }
  return (
   <>
   
   <h1>Robot Active Listening</h1>
   <h3>Say Something</h3>
    <input 
    type = "text" 
    onChange={handleChange}
    value = {userInput}
    />
   <h3>R2D2</h3>
   
  <h3>T-1000</h3>
   <h3>Bender</h3>
    
   </>
  )
}

export default App;
