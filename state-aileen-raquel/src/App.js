import React from "react"
import "./App.css"
const App = () => {
  return (
  //declare a new state variable(miles) and a method that will update ("set" + Variable name)
    <>
    function colorChange ({color}) = {
      document.body.style.background = color;
    }
    <input type = "button" onclick = "colorChange("blue")">
    <h2>Color Box</h2>

    <div class onclick="box">White</div>
    </>
  )
}

export default App
