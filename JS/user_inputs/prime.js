let readlineSync = require("readline-sync");

function chkPrimeNo() {
  let num = readlineSync.question("Enter number:- ");
  let primeFlag = true;

  let i = 2;
  while (i < num) {
    if (num % i === 0) {
      primeFlag = false;
      break;
    }
    i++;
  } //while loop

  if (primeFlag === true) {
    console.log(num, " is a prime number");
  } else {
    console.log(num, " is not a prime number");
  }
}

chkPrimeNo()
