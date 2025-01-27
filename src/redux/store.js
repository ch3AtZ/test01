import { configureStore } from "@reduxjs/toolkit";
const Reducer = (state= 0 , action) =>{
    switch(action.type){
        case 'INCREMENT':return state+1
        case 'DECREMENT':return state-1
        default:return state
    }

}

export const Store = configureStore({
    reducer:{
        counter:Reducer,
    }
}); 

