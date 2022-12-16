

const Menu = (props) => {
    // console.log(props.value.item);
    return (
        <>
        <img className="photo" src={props.value.image} alt="pizza image"/>
        <p>{props.value.item} Price: ${props.value.price.toFixed(2)}</p> 
    <button onClick={() => props.itemOrder(props.value)}>Order</button>
    <br/>
    <br/>
        </>
    )
}

export default Menu