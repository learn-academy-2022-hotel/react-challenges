import React from "react"

// create a function that generates a random number from 1-6
// when clicking anywhere within the box, you will see the generated number
// 

const Dice = (props) => {
    return (
        <>
            <div className="dice-box" onClick={Dice}>
            </div>
        </>
    )
}
export default Dice;