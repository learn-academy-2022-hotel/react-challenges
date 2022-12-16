import React from "react"
import GoodRobot from "./Components/GoodRobot"
import BadRobot from "./Components/BadRobot"
import KanyeBot from "./Components/KanyeBot"
import {useState} from "react"
const App = () => {

const [text, setText] = useState("") 
const handleChange = (e) => {

  setText(e.target.value)

console.log(e)
}


return (

<>

<h1><u>Robo Active Listening</u></h1>
 <p>Say something</p><input type="text" value={text} onChange={handleChange} />
<GoodRobot text={text}/>
<BadRobot/>
<KanyeBot text={text}/>
</>

)








}

export default App