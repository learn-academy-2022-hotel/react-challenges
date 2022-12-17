import React, { useState } from "react"
//the 'useState' hook manages the component's state
import "./App.css"

// const InputTextforRobot = () => {
//   const [text, setText] = useState("");
// }

const App = () => {
  return (
    <>
      <h1>Robo Active Listening</h1>
      <div>
          <input type="text onChange={handleChange}"/>
          {/* <p>{`You typed this: ${text}`} <p/> */}
        
      </div>

    </>
  )
}

export default App
