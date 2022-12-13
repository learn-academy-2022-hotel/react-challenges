import React, {useState} from 'react';

const SquareBox = () => {

    const[color, setColor] = useState('white')

    const changeColor = () => {
        const colorArray = ['red', 'blue', 'green', 'yellow', 'purple', 'pink']
        const randomColor = Math.floor(Math.random() * colorArray.length)
        setColor(colorArray[randomColor])
        
    }

    return (
        <>
            <button onClick={changeColor} style={{backgroundColor: color, height: '100px', width: '100px', border: '1px solid black'}}></button>
        </>
    )
}

export default SquareBox;