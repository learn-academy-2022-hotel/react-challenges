import React, { useState } from "react"

const GoodRobot = (props) => {

  return (
    <>
    <h3>Good Robot</h3>
    {props.userInput && <h2>{props.userInput}, Type in the input for response</h2>}
    </>
  )
}
export default GoodRobot