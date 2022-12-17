import React, {useState} from 'react';
import './App.css';
import Robot from "./components/Robot";

const App = () => {
  const [userInput, setUserInput] = useState("")
  const handleChange = (e) => {
    setUserInput(e.target.value)
  }

  return(
    <>
    <h1>Robo Active Listening</h1>
    <input
    type= "text"
    onChange ={handleChange}
    />
    <Robot 
    userInput = {userInput}
    />
    </>
  )
}

export default App;
