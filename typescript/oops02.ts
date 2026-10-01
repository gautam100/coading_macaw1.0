//Parent class or base class
class Person{
    name: string;
    age: number;
    isAdult: boolean;

    constructor(name:string, age:number, isAdult:boolean){
        this.name = name;
        this.age = age
        this.isAdult = isAdult;
    }

    intro(): void{
        console.log("Name is:",this.name);
        console.log("Age is:",this.age);
        console.log("IsAdult :",this.isAdult);  
    }

}


//child class or derived class
class Engineer extends Person {
    constructor(name:string, age:number, isAdult:boolean){
        super(name, age, isAdult)
    }
}
const john = new Engineer("John M",30, true)
john.intro()

// ------------------------------------------------

class Teacher extends Person{
    constructor(name:string, age:number, isAdult:boolean){
        super(name,age, isAdult)
    }
}
const gautam = new Teacher("Gautam M", 40, true)
gautam.intro()

export {}