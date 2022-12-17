import React from "react"

const MenuItem = (props) => {
    return (
        <>
            <h4>{props.foodItem.name}{': $'}{props.foodItem.price}</h4>
            
            <button onClick={() => {props.orderMenuItem(props.ordered)}}>Add to Cart</button>
            <br/>
            {props.foodItem.ordered && <h5>Added to Cart</h5>}

        </>
    )
}

export default MenuItem