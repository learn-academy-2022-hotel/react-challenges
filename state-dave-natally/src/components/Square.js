import React, { useState } from "react"

const Square = () => {
  const array1 = ["red", "orange", "yellow", "green", "blue", "purple", "pink"]  
  const [buttonText, setButtonText] = useState(array1[0])
    const handleClick = () => {
        setButtonText(array1[1])
    }
  
    return (
      <>
        <button 
          onClick={handleClick}
          style ={{height: "100px", width: "100px", borderColor: "black", backgroundColor: "white"}} 
          > {buttonText} </button>

            {/* //  height: "100px", 
            // width: "100px" , 
            // borderColor: "black",
            // backgroundColor: active ? "white" : "black" }}> White </button> */}
      </>
    )
  }

  export default Square