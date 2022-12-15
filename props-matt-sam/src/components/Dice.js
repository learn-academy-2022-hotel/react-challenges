import React from 'react'


const Dice = (props) => {

    return (
        <>
            <h3>{props.currentNumber}</h3>
            <button onClick={props.randomNumber} >Click Box to Roll</button>



        </>
    )
}

export default Dice;