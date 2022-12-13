import React, { useState } from "react"


const Box = () => {
    // const [color, setColor] = useState("white")
    const [text, setText] = useState("white")
    const [count, setCount] = useState(0)
    const colorsArray = ["red", "orange", "yellow", "green", "blue", "purple", "pink"]
    
    const handleClick = () => {
        setCount(count + 1)
        setText(colorsArray[count])
    }
    return (
        <>
        <div style={{height: 200, width: 200, border: "5px solid", backgroundColor: text}} onClick={handleClick}>{text}
           
            </div>
        </>
    )
}
export default Box