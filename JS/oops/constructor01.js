class MyClass{
    //Here name and age is class property
    //Objective of constructor is to initilize values to class property
    //this refers to current object inside class
    constructor(n,a){
        this.name = n
        this.age = a
    }
    prnData(){
        console.log("Name is:",this.name)
        console.log("Age is:",this.age)
    }
}
const obj1  = new MyClass("John",30)
obj1.prnData()

const obj2  = new MyClass("Smith",28)
obj2.prnData()