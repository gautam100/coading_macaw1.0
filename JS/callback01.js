function greet(user){
    console.log("Good morning!",user.name)
}

function todos(){
    console.log("This is todo list:")
    console.log("1) Working in client1 project \n 2) Meeting with client2")
}

setTimeout(greet,2000, {name:'john'})
todos()//This is executing first

/*
This code is executing asyncronously
*/