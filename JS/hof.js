/*
A Higher order function is simply a function that either takes another function as an argument
or it returns a function (or both)
*/

function greetUser(name, formatter){
    return formatter(name)
}

function caps(name){
    return name.toUpperCase()
}

console.log(greetUser("John",caps))

console.log("--------------------------")

let ar = [1,2,3,4]
let x = ar.map(function(num){
    return num*2
})
console.log(x)