import React from "react"



const FoodItems = (props) => {
    console.log("props", props)
    return (

        <>
        <p>Food Name:{props.order.name}</p>
        <button>Order This</button>
    
        </>
    )
}



export default FoodItems 