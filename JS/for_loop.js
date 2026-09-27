/*
for
Syntax:
for(initilization; condition; updation){
    .... << this code will execute only when condition is true
}

Flow:
Step 1: Initilization
Step 2: Condition check
Step 3: Execute Loop block if condition is true otherwise loop ends
Step 4: updation
Step 5: Go to Step 2

*/
function forLoop() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  console.log("------------");
  for (let i = 1, j = 10; i <= 10; i++, j--) {
    console.log("i:" + i + " and j is: " + j);
  }
  console.log("------------");
  let i = 101
  for(;i<106;){
    console.log(i)
    i++
  }
  console.log("------------");
//   for(;false;){
//     console.log("Hello...")
//   }
}

forLoop();
