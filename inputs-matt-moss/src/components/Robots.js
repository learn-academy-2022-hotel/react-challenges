import React from "react"

const Robots = (props) => {
    return (
        <>
            <h3>Good Robot</h3>
            <h4>I hear you saying {`${props.userInput}`}!</h4>
            <h3>Bad Robot</h3>
            <h4>Sounds like {`${props.badRobot}`} to me.</h4>
            <h3>Other Robot</h3>
            <h4>{`${props.userInput}`}</h4>
        </>
    )
}

export default Robots