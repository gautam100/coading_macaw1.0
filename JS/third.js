/*
 - conditional statement
  - simple if
  - if - else **
  - multiple if *
  - nested if
  - switch case *
  - ternary operator **
*/

/*
if(condition){
 // if condition is true then whatever we write inside if block
 // theat executes
}
*/

function abc() {
  let num = 4;
  if (num % 2 === 0) {
    console.log(`${num} is even number`);
  } else {
    console.log(`${num} is odd number`);
  }
  console.log("---------------");
  let a = 5;
  let b = "5";
  console.log("Data type of a is:" + typeof a);
  console.log("Data type of b is:" + typeof b);
  if (a === b) {
    console.log("== checks value only");
  } else {
    console.log("=== checks value and datatype both");
  }
}
abc();

function xyz() {
  let a = 50;
  let b = 10;
  a > b ? console.log("A is greater") : console.log("B is greater");
}
xyz()