import REACT from 'react'

const MenuItems = (props) => {
    console.log("props: ", props)
    return(
        <>
        <h3>{props.menuItems.name}</h3>
        <h3>{props.menuItems.price}</h3>
{!props.menuItems.orderItem && <h4>notOrdered</h4>}
<button onClick={()=> {props.orderItem(props.index)}}>Press to order </button>
{/* ()=>{} */}




        </>   
    )
}

export default MenuItems