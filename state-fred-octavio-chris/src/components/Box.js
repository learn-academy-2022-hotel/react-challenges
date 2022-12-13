import React, {useState} from 'react'

const Box = () => {

    const [boxName, setBoxName] = useState('white')

    const changeColor = () => {
        let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink']
        let randomIndex = Math.floor(Math.random() * 7)
        setBoxName(colors[randomIndex])
    }

    return(
        <button onClick={changeColor} style={{backgroundColor:boxName, height:"300px", width:"300px"}}>{boxName}</button>
    )
}

export default Box