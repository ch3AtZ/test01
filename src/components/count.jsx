import { useSelector } from "react-redux";
import React from "react";


const Counter = () => {
    const count = useSelector(state => state.counter); //state of the reducer function 

    return(
        <div>
            <h1>{count}</h1>
        </div>
    )

}


export default Counter; 
