// stateless functional component 
import React from "react"
import { square , add } from "./App5"
import { canDrink , isAdult } from "./person"
 
const Person = {
    name : 'Dhruv',
    age : 20

}
localStorage.setItem('name','dhruv') // storing a key at local levevl only


const User = (props) => {
    return(
        <div>
            <p>Name: {props.name} </p>
            <p>Age:{props.age} </p>
            <p>{localStorage.getItem('name')}</p>
        </div>
    )
}


const App = () =>{
    return(
    <User name = {Person.name} age = {Person.age}/>
  
    )
}

//console.log(square(5))
//console.log(add(12,4))


console.log(isAdult(28))
console.log(canDrink(29))


export default App;

