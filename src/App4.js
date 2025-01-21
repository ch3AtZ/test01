// stateless functional component 
import React, { isValidElement } from "react"
//import  sub ,  { square , add } from "./App5" //can also import subtract , just that the default exports can be imported as any keyword
import { canDrink , isAdult } from "./person"
import validator from 'validator'

 
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


//console.log(isAdult(28))
//console.log(canDrink(29))
//console.log(sub(10,4)) //can also use subtract keyword


console.log(validator.isEmail('test@gmail.com'))


export default App;

