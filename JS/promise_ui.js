const promiseResolve = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Task Completed!");
  }, 2000);
});
promiseResolve.then((res) => {
  console.log(res); // Task Completed!
  document.querySelector("#promise1_container").innerHTML =
    "<h1 class='success'>" + res + "</h1>";
});

// -----------------------------------------------------

const promiseReject = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Task failed!");
  }, 2000);
});
promiseReject.catch((res) => {
  console.log(res); // Task failed!
  document.querySelector("#promise2_container").innerHTML =
    "<h1 class='danger'>" + res + "</h1>";
});

// -----------------------------------------------------

const promiseObj = new Promise((resolve, reject) => {
  let randomBool = Math.random() < 0.5;
  setTimeout(function () {
    if (randomBool) {
      resolve("Task successfully completed!");
    } else {
      reject("Error during execution!");
    }
  }, 2000);
});
promiseObj
  .then((result) => {
    document.querySelector("#promise3_container").innerHTML =
      "<h1 class='success'>" + result + "</h1>";
  })
  .catch((result) => {
    document.querySelector("#promise3_container").innerHTML =
      "<h1 class='danger'>" + result + "</h1>";
  })
  .finally(() => {
    document.querySelector("#finally_container").innerHTML =
      "Finally Block: This block will execte every time. Doesnot matter promise is successful or fail!";
  });
