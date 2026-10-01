/*
Access Modifier: public(default) | private |

protected: Accessible inside class and inside child class
*/
class Employee {
    salary;
    constructor(sal) {
        this.salary = sal;
    }
    getSalary() {
        return this.salary;
    }
}
class Manager extends Employee {
    constructor(sal) {
        super(sal);
    }
    taxCalculation() {
        let tax = this.salary * 10 / 100;
        return tax;
    }
}
const emp1 = new Manager(6000);
console.log(emp1.getSalary()); //6000
console.log(emp1.taxCalculation()); //600
export {};
