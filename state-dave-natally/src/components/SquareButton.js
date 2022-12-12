import React, { useState } from "react"

const Square = () => {
    const [color, setColor] = () => useState(false)
    const handleClick = () => {
        setColor(!color)
    }
  
    return (
      <>
        <button onClick={handleClick}
            className = {`px-20 py-10 text-3x1 capitalized font-bold text-white rounded-lg ${(color === true)? 'bg-green-700' : 'bg-blue-700'}`}
            > white </button>

            {/* // height: "100px", 
            // width: "100px" , 
            // borderColor: "black", 
            // backgroundColor: active ? "white" : "black" }}> White </button> */}
      </>
    )
  }

  export default SquareButton