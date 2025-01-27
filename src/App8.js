// ARRAY DESTRUCTURING

const address = ['21/9 ' , 'Ashok Nagar' , 'New Delhi' , '110018'] // index starts with 0

const [hnum , locality , city , pin] = address;
//const [, local , cit , ] = address; // spaces left for other values in array to be accessed by other variables.

//const [,  , cit = 'new delhi' ,]  = address // can also put some default value


const item = ['Coffee (item)' , '$2.95' , '$3.55' , '$3.95']

const [itemName , small, medium , large] = item ;

const Output = () =>{
    //console.log(`you are in ${address[1]} ,  ${address[2]}`) // accesing array members through indexes. 
      //console.log(`you are in ${locality} ,  ${city}`)
      //console.log(cit)

      console.log(`${itemName} is priced at ${medium}`)
      console.log(`${itemName} priced at ${large}`)
}

export default Output ; 

