import React, {useState} from "react"
import './App.css';
import FriendlyRobot from "./components/FriendlyRobot";

// User Stories:
// As a user, I can see a landing page with heading and a text input.
// As a user, I see titles of three robots waiting for my text.
// As a user, I see my "Good Robot" repeating exactly what I type in real time.
// As a user, I see my "Bad Robot" saying "BLABLA....." One character for every character I type in real time.
// As a user, I see a third robot that modifies the input as per the developer's choice in real time.


const App = () => {
  
  const [userInput, setUserInput] = useState("")

  const handleChange = (e) => {
    setUserInput(e.value.target)
    
  }

  return (
    <>
    <h1>Talking Robot</h1>

    <h3>Talk to me, I'm lonely!</h3>
    <input 
      type="text"
      onChange={handleChange}
      // value={userInput}
    />

    <h3>Friendly Robot:</h3>
    <FriendlyRobot
      userInput={userInput}
      handleChange={handleChange}
    />

    <h3>Evil Robot:</h3>

    <h3>Conscience Robot:</h3>

    </>
  )
}

export default App;
