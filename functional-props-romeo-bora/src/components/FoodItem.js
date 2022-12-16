import React from "react"

const FoodItem = (props) => {
    return(
        <>
        <p>Ordered Item: {props.menuItems.dinerFood}</p>
        {props.menuItems.price}
        {props.menuItems.ordered && <p>Ordered it!</p>}
        <button onClick={props.orderedItems}>Order Food</button>
        </>
    )
}

export default FoodItem