function myFunc(){
    console.log(a) // Error
    var a = 10
}
myFunc()//call the function


let fn = function(){
    console.log("Hey I am testing Hoisting concept")
}
fn()
