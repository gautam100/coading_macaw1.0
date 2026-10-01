class Testclass {
  #salary;
  constructor() {
    this.#salary = 5000;
  }
  prnSalary() {
    console.log("salary is ", this.#salary);
  }
}

const obj = new Testclass();
obj.prnSalary();

// console.log(obj.#salary)//Error
