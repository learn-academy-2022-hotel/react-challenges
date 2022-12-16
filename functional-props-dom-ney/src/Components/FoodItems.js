import React from "react"



const FoodItems = (props) => {
    // console.log("props", props)
    
    return (

        <>
        <p> {props.foodItem.name}
       {props.foodItem.price} </p>
        {/* {props.name.price <p> } */}
        <button onClick={()=> {props.orderMenuItem(props.index)}}>Press to Order </button>
    
        </>
    )
}



export default FoodItems 