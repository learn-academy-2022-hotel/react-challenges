import React from "react"

const FriendlyRobot = (props) => {
    return (
        <>
            Did you say {props.userInput && <h3>{props.userInput}</h3>}
        </>
    )
}

export default FriendlyRobot