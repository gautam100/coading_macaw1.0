class Employee{
    //declare the properties
    name:string
    salary: number

    constructor(n:string, s:number){
        //initilize values in class properties
        this.name = n;
        this.salary = s;
    }


}

const emp1 = new Employee("Smith", 6000)
console.log(emp1.name)
console.log(emp1.salary)

export {};
