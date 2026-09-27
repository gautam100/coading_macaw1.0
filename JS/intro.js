//Definition of function/method
//1. Named function
function intro() {
  console.log("Hello World!");
}

intro(); //Here we are calling the function

//2. Anonymous function
//here fn is called function expression
let fn = function () {
  let a = 10;
  let b = 20;
  console.log("Sum:", a + b);
  console.log(`Sum: ${a + b}`);
  console.log("Sum:" + (a + b));
};
fn();

function doSub() {
  var a = true;
  const pi = 3.121;
  a = false;
  //pi = 4.0; // Error

  console.log(a) // false
  console.log(pi)
}
doSub()
