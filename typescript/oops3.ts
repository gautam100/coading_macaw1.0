/*
Access Modifier: public(default) | private | 

protected: Accessible inside class and inside child class 
*/

class Employee{
    protected salary:number;

    constructor(sal:number){
        this.salary = sal
    }
    getSalary():number{
        return this.salary
    }
}

class Manager extends Employee{

    constructor(sal:number){
        super(sal)
    }
    taxCalculation():number{
        let tax:number = this.salary * 10/100
        return tax;
    }  
}



const emp1 = new Manager(6000)
console.log(emp1.getSalary());//6000
console.log(emp1.taxCalculation());//600



export {}