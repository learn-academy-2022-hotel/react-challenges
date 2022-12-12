import React, { useState } from "react"

const Square = () => {
    const [color, setColor] = () => useState(false)
    const handleClik = () => {
        setColor(!active)
    }
  
    return (
      <>
        <button onClick={handleClick}
            style={{
            height: "100px", 
            width: "100px" , 
            borderColor: "black", 
            backgroundColor: active ? "white" : "black" }}> White </button>
      </>
    )
  }

  export default SquareButton