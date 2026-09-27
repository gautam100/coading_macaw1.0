let course1 = {
    name: "JS",
    author: "John",
    age :30
}

// Every property of object there is an attribute called "enumerable" which is 
// set to true (by default)

console.log(Object.keys(course1).length)//2
console.log(course1)

//
console.log(course1.propertyIsEnumerable("name")) //true
console.log(course1.propertyIsEnumerable("author")) //true

Object.defineProperty(course1, "name",{
    enumerable:false
})
console.log(course1)
// Object.defineProperty(course1, "length",{
//     enumerable:true
// })
// console.log(course1)

/*
configurable: if it is set to false then we can not delete that property
*/
Object.defineProperty(course1, "age",{
    configurable:false,
    writable: false
})
delete course1.age //This will not work because of configurable


course1.age = 50 //This will also not work because of writable
console.log(course1)
