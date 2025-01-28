import { configureStore  } from "@reduxjs/toolkit";
import { act } from "react";

const cartDefaultState = []

const itemDispatchDefault = {
    orderDate:'',
    deliveryDate:''
}

const addItem = ({itemName = '' , itemPrice = '' , itemQuantiy= ''} = {}) =>(
    {
        type:'ADD_ITEM',
        item:{
            itemName,
            itemPrice,
            itemQuantiy
        }
    }
)

const removeItem = ({itemName} = {})=>(
    {
        type:'REMOVE_ITEM',
        itemName
    }
)

const addItemDate = ({orderDate='',deliveryDate=''}={}) =>(
    {
        type:'ADD_ITEM_DATE',
        date:{
            orderDate,
            deliveryDate
        }
    }
)

const itemReducer =  (state=cartDefaultState , action)=>{
    switch(action.type){
        case 'ADD_ITEM':
            return [...state,action.item] // item property in addItem 
        case 'REMOVE_ITEM':
            return state.filter((item)=>item.itemName !== action.itemName) // return the state filtered out with passed ItemName
        default:
            return state  

    }
}

const itemDispatchReducer = (state = itemDispatchDefault , action)=>{
    switch(action.type){
        case 'ADD_ITEM_DATE':
            return{ // return type for an object [not an array]
                ...state,
                ...action.date  // merge the new dates with the current state
            }

        default:
            return state
    }
}

const store = configureStore({
    reducer:{
        add:itemReducer,
        addDate:itemDispatchReducer
    }
})

store.subscribe(()=>{
    console.log(store.getState()) // logs the state onto the console
})

//store.dispatch(addItem({itemName:'HP laptop 15',itemPrice:1200,itemQuantiy:1}))
store.dispatch(addItem({itemName:'PS5' , itemPrice:450 , itemQuantiy:2}))
store.dispatch(addItemDate({orderDate:new Date().toLocaleDateString(),deliveryDate:undefined}))
store.dispatch(removeItem({itemName:'PS5'}))