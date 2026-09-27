const p1 = Promise.resolve("Pizza 🍕");
const p2 = Promise.resolve("Burger 🍔");
const p3 = Promise.reject("Fries 🍟");

// Promise.all() - if any one fails, .catch() will trigger & all result will be discard
Promise.all([p1, p2, p3])
  .then((result) => {
    console.log("Promise.all: Resolve Block:", result);
  })
  .catch((error) => {
    console.log("Promise.all: Reject Block:", error);
  });

//Promise.allSettled() - wait for all promises to complete, whether they resolve or reject
//USecase: Display result of all files uploads even if some failed.
Promise.allSettled([p1, p2, p3]).then((res) => {
  console.log(res);
});
//Promise.any() - resolves as soon as one promise is fullfilled, ignoring all rejections
// if fails only when if all promise rejects
Promise.any([p1, p2, p3])
  .then((res) => console.log("Promise.any:",res))
  .catch((error) => console.log("Promise.any:",error));


const api1 = new Promise((res) => setTimeout(() => res("API 1 wins"), 500))
const api2 = new Promise((res) => setTimeout(() => res("API 2 wins"), 1000))
Promise.race([api1, api2]).then((res)=> console.log(res))