import React, { useState } from "react"
import goodRobot from "./components/Good Robot"
import badRobot from "./components/Bad Robot"

const App = () => {
  const [userInput, setUserInput] = useState("")
  const [badInput, setBadInput] = useState("")

  const handleChange = (e) => {
    console.log(e.target.value)
    setUserInput(e.target.value)
  }

  const badChange = (e) => {
    console.log(e.target.value)
    setBadInput(e.target.value)
  }

  return (
    <>
    <h1>Robo Active Listening</h1>
    <p>Say something {userInput}</p>
      <input type="text" value={userInput} onChange={handleChange} />
     <br></br>
     <h3>Good Robot</h3>
     <p>I hear you saying {userInput}. Is that correct?</p>
    
     <h3> Bad Robot</h3>
     <badRobot type="text" value={userInput} onChange={badChange} />
     <p>I hear you saying {badInput}. Is that correct?</p>
    </>

  )
}
export default App