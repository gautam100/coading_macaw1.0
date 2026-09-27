function Person(name, age) {
    this.name = name; // Unique property per instance
    this.age = age;   // Unique property per instance

}

// Adding a shared method to the prototype
Person.prototype.greet = function() {
     console.log(`Hello, my name is ${this.name}.`);
};

let p1 = new Person("John", 30)
let p2 = new Person("John", 30)
let p3 = new Person("John", 30)

console.log(p1.age)
console.log(p1.name)
p1.greet()




