import React, {useState} from "react"
import './App.css';
import Robots from "./components/Robots"

const App = () => {

  const [userInput, setUserInput] = useState("")

  const handleChange = (e) => {
    setUserInput(e.target.value)
  }

  const badRobot = () => {
    setUserInput.replace(userInput, "BLA")
  }

  return (
    <>
      <h1>Robo Active Listening</h1>
      <input type="text" onChange={handleChange} value={userInput} />
      <Robots userInput={userInput} handleChange={handleChange} badRobot={badRobot}/>
    </>
  )
}

export default App;
