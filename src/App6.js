// OBJECT DESTRUCTURING

// const person = {
//     name :'Andrew',
//     age:18,
//     location:{
//         city:'New Delhi',
//         temp:82
//     }
// }

// const {name , age} = person;

// //const {city , temp} = person.location;

// const {city , temp:temperature} = person.location; // directly access the variable or props like this , and can change the name of the variables to be used also


const book = {
    title:'amimal farm',
    author:'george orwell',
    publisher:{
        name:'Penguin',

    }
}

const {name:publisherName = 'Self-published'} = book.publisher; // can give default value also [Self-published is a default value]

const Output = () =>{
    //console.log(`${person.name} is ${person.age}`)
    //console.log(name , age)
    //console.log(city ,temperature)

    console.log(publisherName)

}   





export default Output;





