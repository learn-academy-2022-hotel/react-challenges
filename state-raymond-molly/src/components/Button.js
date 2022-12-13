import React, { useState } from 'react'

const Button = () => {
    const colorPallete = ["Red", "Yellow", "Orange", "Blue", "Purple", "Pink", "Green"]
    const [colorsIndex, setColorIndex] = useState(0)


const colorChanger = () => {
   let newIndex = colorsIndex + 1
   if(newIndex >= 7){
        setColorIndex(0)
   } else{
    setColorIndex(newIndex)
   }
}
return (
<>
<button onClick={colorChanger} > {colorPallete[colorsIndex]}</button> 
</>)
}

export default Button;