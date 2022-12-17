import React, {useState} from "react"
import './App.css';
import GoodRobot from './component/GoodRobot'

const App = () => {

  const [userInput, setUserInput] = useState("")

  const handleChange = (e) => {
    console.log(e.target.value)
    setUserInput(e.target.value)
  }
  return (
    <>
    
      <h1>Robot Landing Page!</h1>
      <input type="text" value={userInput} onChange={handleChange}/>
      <div>
      <GoodRobot userinput = {userInput}/>
        <p>I hear you saying {userInput}. Is that correct?</p>
      </div>

      <h3>Bad Robot</h3>
      <p></p>

      <h4>Yebot 5000</h4>
      <p>I'm gonna let you finish but Beyonce is {userInput}</p>
    </>
  )
}


export default App;
