

const Order = (props) => {
    return (
        <>
            <p>{props.value.item} Price: ${props.value.price.toFixed(2)}</p>
        </>
    )
}

export default Order