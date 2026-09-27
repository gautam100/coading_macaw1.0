let readlineSync = require('readline-sync');

let channel = readlineSync.question('Enter Channel No:- ');
channel = parseInt(channel)

if(channel === 100){
    console.log("This is a sport channel!")
}else if(channel === 150){
    console.log("This is a music channel!")
}else if(channel === 200){
    console.log("This is a cartton channel!")
}else{
    console.log("This channel has some another category")
}