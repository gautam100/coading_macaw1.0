console.log("Start");

function waitAndPrint(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message); //step __
      resolve(); //success
    }, delay);
  });
}

//chain of promise
waitAndPrint("Step 1", 1000)
  .then(() => waitAndPrint("Step 2", 1000))
  .then(() => waitAndPrint("Step 3", 1000))
  .then(() => waitAndPrint("Step 4", 1000))
  .then(() => waitAndPrint("Step 5", 1000));
