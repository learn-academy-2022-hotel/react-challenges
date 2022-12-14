import React from "react";

const Box = (props) => {
    return (
        <>
        <button onClick={props.triggerNextDice} className="box">{props.currentDice}</button>
    </>
    )
}

export default Box