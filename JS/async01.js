function xyz() {
  console.log("Hello");

  setTimeout(function () {
    console.log("I am inside setTimeout");
  }, 1000);

  console.log("Bye");
}
//xyz()
/*
synchronous

Asynchronous
 - callback
 - promise
 - async await
*/
abc()
function abc(getAvg){
    let a = 5
    let b = 2
    let sum = a+b
    getAvg(){
        console.log("this is callback")
    }
}