//prototype inheritence

const Person = {
    name : "Peter",
    greet: function(){
        console.log("Hello ",this.name)
    }
}
Person.greet()

const engineer = Object.create(Person)
engineer.name = "Rohit"
engineer.greet();

/*
class Myclass{
    constructor(name){
        this.name = name
    }
    greet(){
        console.log("Hello ",this.name)    
    }
}

class MyClass2 extends Myclass{
    constructor(name){
        super(name)
        //this.name = "Rohit"
    }
}
const person = new MyClass2("Peter")
person.greet()

*/