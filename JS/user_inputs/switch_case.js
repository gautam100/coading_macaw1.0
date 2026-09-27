let readlineSync = require('readline-sync');

let num = readlineSync.question('Enter number:- ');
let res 
num > 10? res = true: res = false

switch(res){
    case true:
        console.log(num," is greater than 10")
        break
    case false:
        console.log(num," is smaller than 10")
        break
    default:
        console.log(num," is nither true nor false")

}
