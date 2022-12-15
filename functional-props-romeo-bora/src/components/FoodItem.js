import React from "react"

const FoodItem = (props) => {
    return(
        <>
        <p>Ordered Item: {props.menuItem.foodItem}</p>
        <button> Order Food </button>
        </>
    )
}

export default FoodItem