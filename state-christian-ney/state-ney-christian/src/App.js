import logo from './logo.svg';
import './App.css';
import React, { useState } from "react"

const App = () => {
  const [defaultBox, randomColor] = useState(0)
  const handleClick = () => {
    randomColor = 
  }
  

  return (
  <div className='box'>
    <button onClick={handleClick}>White</button>
    </div>
  )
}

export default App
