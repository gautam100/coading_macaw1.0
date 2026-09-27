let readlineSync = require("readline-sync");

let gender = readlineSync.question("Enter Gender:-");
gender = gender.toLowerCase();
let age = readlineSync.question("Enter age:- ");
age = parseInt(age);

if (Number.isInteger(age)) {
  if (gender === "male") {
    if (age >= 18) {
      console.log("Enjoy your wine!");
    } else {
      console.log("Enjoy your coke!");
    }
  } else if (gender === "female") {
    if (age >= 18) {
      console.log("Enjoy your Leamonade!");
    } else {
      console.log("Enjoy your Pepsi!");
    }
  } else {
    console.log("Enjoy your coke!!");
  }
} else {
  console.log("Age need to enter as number");
}
