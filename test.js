console.log('testing script')
class Person {
    constructor(name = 'Anonymous'){
        //console.log('test')
        this.name = name
    }

    getGreetings = () =>{
        console.log(this.name+'hi')
    }

}
const me = new Person('Dhruv')
const other = new Person();

console.log(other)
console.log(me)
console.log(other.getGreetings())
