import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch, useSelector, Provider } from "react-redux";

// Reducer function - [reducers are pure functions]
const Reducer = (state = {count:0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {...state , count:state.count+1}
        case 'DECREMENT':
            return {...state , count:state.count-1};
        default:
            return state;
    }
};

// Redux store configuration
const Store = configureStore({
    reducer: {
        counter: Reducer,
    },
});

// Counter component
const Counter = () => {
    const count = useSelector(state => state.counter.count); // State of the reducer function
    return (
        <div>
            <h1>{count}</h1>
        </div>
    );
};

// Main App component
const App = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
            <Counter />
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
        </div>
    );
};

// Wrapping App with the Provider to pass the store
const CombinedApp = () => (
    <Provider store={Store}>
        <App />
    </Provider>
);

export default CombinedApp;
