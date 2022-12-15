import React from "react";

const Counter = (props) => {
    return (
        <>
            <div>
                <ul>
                    {props.rollList.map(number => {
                        return <li>{number}</li>
                    })}

                </ul>
            </div>
        </>
    )
}













export default Counter