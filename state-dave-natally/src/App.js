import React, { useState } from "react"
import Square from './components/Square'

const App = () => { 
  return (
    <>
      <h2> Color Box</h2>
      <button style={{
          height: "100px", 
          width: "100px" , 
          borderColor: "black", 
          backgroundColor: "white", }}></button>
          <br></br><br></br>

      <button style={{
          height: "100px", 
          width: "100px", 
          borderColor: "black", 
          backgroundColor: "white"}}> White </button>
          <br></br><br></br>
      <Square />
    </>
  )
}
<br></br>


export default App;