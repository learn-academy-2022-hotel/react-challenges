import React from "react";



const Counter = () => {
    const recordArray = []
    return (
        <>
            <div>
                <ul>
                    {recordArray.map(number => {
                        <li>{number}</li>
                    })}

                </ul>
            </div>
        </>
    )
}













export default Counter