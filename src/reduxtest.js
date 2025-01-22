import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import Counter from "./components/count";


import { useDispatch } from "react-redux";

export default function App () {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={e =>dispatch({type:'INCREMENT'})}>Increment</button>
            <Counter/>
            <button onClick={e =>dispatch({type:'DECREMENT'})} > Decrement</button>
        </div>
    )
}

