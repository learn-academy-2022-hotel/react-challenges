const FoodItem = (props) => {
    return (
    <>
         {/* <p>Food name: {props.foodItem.name}</p> */}
        
        <p>Food name: {props.foodItem.name}</p>
        <p>Price: {props.foodItem.price}</p>
        {/* conditional rendering */}
        {props.foodItem.ordered && <p>Ordered!</p>}
        <button onClick={() => {props.orderMenuItem(props.index)}}>Order</button>
    </>
  
  )
      
}

export default FoodItem