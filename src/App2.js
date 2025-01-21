import React, { useState } from "react";
import './Counter.css'

const Counter = () =>{
    const [count , setcount] = useState(0);

    const increment = () => {
        setcount(count+1);
    };

    const decrement =  () => {
        setcount(count-1);
    }

    const reset = () =>{
        setcount(0)
    }

    return(
        <div className="buttonContainer">
            <button className="incrementButton" onClick={increment}>+</button>
            <p1 className = "countText">{count}</p1>
            <button className="decrementButton" onClick={decrement}>-</button>
            <button className="incrementButton" onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter;


