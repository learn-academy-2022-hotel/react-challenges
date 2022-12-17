import React from "react";

const FoodItems = (props) => {
    console.log(props);
    return ( 
    <>
        <div className="card">{props.foodItems.name} ${props.foodItems.price}
        </div>
        {/* conditional rendering; if props.foodItems.ordered === true then output You have ordered 1 ${food name} */}
        {props.foodItems.ordered && <h4 className="orderedMsg">You have ordered {props.foodItems.name}</h4>}
        {/* functional props */}
        <button className="orderButton" onClick={() => {props.orderMenuItem(props.index)}}>Order</button>
    </>
    )
}

export default FoodItems