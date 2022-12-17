import React from "react"


const OrderItem = (props) => {
    return (
        <> 
            {/* didn't work, maybe have to play around with props. */}
            <h4>{props.totalCost}</h4>
        </>
    
    )
}

export default OrderItem