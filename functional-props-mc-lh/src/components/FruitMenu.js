import React from 'react';
import Orders from "./Orders";

const FruitMenu = (props) => {
    console.log("props", props)
    return(
        <>
        <h4>{props.fruits.name}</h4>
        <h5>{props.fruits.price}</h5>
        <button onClick = {
            ()=>{
                props.orderMenuItem(props.index)
            }
        }>order</button>
        </>
    )
}

export default FruitMenu