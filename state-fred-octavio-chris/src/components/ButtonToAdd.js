import React, {useState} from "react";
import Box from "./Box";
import ButtonToRemove from "./ButtonToRemove";

const ButtonToAdd = () => {
    const [components, setComponents] = useState([])

    const addBoxFxn = () => {
        setComponents([...components, Box])
        console.log(components)
    }

    const removeBoxFxn = () => {
        setComponents(components.slice(0, components.length - 1))
        console.log(components)
    }

    return (
        <>
            <button onClick={addBoxFxn} components={components}>Add a Box</button>
            <button onClick={removeBoxFxn}>Rm Box</button>
            {components.map((item, i) => (
                <Box key={i}/>
            ))}
        </>
    )
}

export default ButtonToAdd