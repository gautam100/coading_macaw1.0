function greet(user, callback) {
  console.log("Good morning!", user);
  callback(user);
}

function todos(name) {
  console.log(`Hi!  ${name}  Below is your todo list:`);
  console.log("1) Working in client1 project \n 2) Meeting with client2");
}

function eveningPlan() {
  console.log("There is dinner with friends");
}
setTimeout(greet, 1000, "john", todos);

greet("Smith", eveningPlan);
