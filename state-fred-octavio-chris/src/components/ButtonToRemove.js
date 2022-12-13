import React, {useState} from "react";
import Box from "./Box";
import ButtonToAdd from "./ButtonToAdd";

const ButtonToRemove = () => {
    const [components1, setComponents1] = useState([])
// console.lo
    const removeBoxFxn = () => {
        components1.pop()
        setComponents1(components1)
    }

    return (
        <>
            <button onClick={removeBoxFxn}>Remove a Box</button>
            {components1.map((item, i) => (
                <Box key={i}/>
            ))}
        </>
    )
}

export default ButtonToRemove