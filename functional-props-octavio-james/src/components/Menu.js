

const Menu = (props) => {
    // console.log(props.value.item);
    return (
        <>
        <p>{props.value.item} Price: ${props.value.price.toFixed(2)}</p> <button onClick={() => props.itemOrder(props.value)}>Order</button>
        </>
    )
}

export default Menu