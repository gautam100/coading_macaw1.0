let readlineSync = require('readline-sync');

let channel = readlineSync.question('Enter Channel No:- ');
channel = parseInt(channel)
switch (channel){
    case 100:
        console.log("Wow! it's a sport channel")
        break
    case 150:
        console.log("This is entertainment channel")
        break
    case 200:
        console.log("This is cartoon channel for kids")
        break
    default:
        console.log("This is some another category")
}
