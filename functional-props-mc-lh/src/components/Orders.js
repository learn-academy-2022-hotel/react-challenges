import React from 'react'
import FruitMenu from "./FruitMenu"

const Orders = (props) => {
    //console.log(props.menu[0].name)
    return (
        <>
        <h4>Your Order</h4>
        <div className = "ordersection">
        {props.fruits.ordered && <h4>ordered: {props.menu.name}</h4>} 
        </div> *
        </>
    )
}
export default Orders