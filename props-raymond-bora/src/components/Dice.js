import React from 'react'

const Dice = (props) => {
    return (
        <>
        <div className="box">
        <img src="https://github.com/learn-academy-2022-hotel/Syllabus/blob/main/react/assets/1-dice.png?raw=true" alt="dice-1"/>
        

        <div>
        <button onClick={props.diceClick}>CLICK TO ROLL!</button>
        </div>

        </div>
        </>
    )
} 

export default Dice