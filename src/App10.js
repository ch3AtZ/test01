import { configureStore , combineReducers } from "@reduxjs/toolkit";
import { act } from "react";
import {v4 as uuid} from 'uuid';

const addExpense = (
    {description ='', note='',amount='',createdAt= '' } = {}) => 
    ({
    type:'ADD_EXPENSE',
    expense:{
        id:uuid(),
        description,
        note,
        amount,
        createdAt
        
    }
})

const removeExpense = ({id}= {}) =>({
    type:'REMOVE_EXPENSE',
    id
})

const expensesReducerDefaultState = [];

const filterReducerDefaultState = {
    text: ' ',
    sortBy: 'date',
    startDate: undefined,
    endDate:undefined
}

const expensesReducer = (state = expensesReducerDefaultState , action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [...state , action.expense]

        case 'REMOVE_EXPENSE':
            return state.filter(({id})=> id !== action.id);
               
        default:
            return state
        
    } 
}

const filterReducer = (state = filterReducerDefaultState , action) => {
    switch(action.type){
        default:
            return state
    }

}

const store = configureStore({
    reducer:{
        expenses:expensesReducer,
        filter:filterReducer
    }
});

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(addExpense({description:'Rent', amount:100 , note:`Amount for month of ${new Date().toLocaleString("default",{month:'long'})}`, createdAt:new Date().toLocaleDateString()})) // dispatches through -> expenses and filter reducers 

store.dispatch(addExpense({description:'Grocery',note:`Amount for month of ${new Date().toLocaleString("default",{month:'long'})}` , amount:200 , createdAt:new Date().toLocaleDateString()}))

const expenseOne = store.dispatch(addExpense({description:'Medical',note:`Amount for month of ${new Date().toLocaleString("default",{month:'long'})}` , amount:50 , createdAt:new Date().toLocaleDateString()})) // pass a constant

store.dispatch(removeExpense({id : expenseOne.expense.id}))

const demoState = { // just to set an example of how the output can look like 
    expenses: [{
    id: 'poijasdfhwer',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0,
    }],
    filters:{
        text:'rent',
        sortBy:'amount', //date or amount
        startDate:'undefined',
        endDate:'undefined'
    }
};




