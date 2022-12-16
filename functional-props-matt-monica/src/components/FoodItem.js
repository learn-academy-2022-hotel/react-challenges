import React from 'react'


const FoodItem = (props) => {
    // console.log("props: ", props)
    return (
        <>
            <h4>{props.foodItem.item}: ${props.foodItem.price}</h4>
            {props.foodItem.ordered && <h4>Ordered!</h4>}
            <button onClick={() => {props.orderMenuItem(props.item)}} >Order</button>
        </>
    )
}
export default FoodItem;