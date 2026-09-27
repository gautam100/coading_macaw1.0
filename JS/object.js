myObject();

function myObject() {
  let ar = ["john", 30, { fruit: "Mango", flower: "rose" }];
  console.log(ar[0]); // john

  console.log("----------------------");
  let obj = {
    name: "John",
    age: 30,
    isStudent: false,
    salary: function () {
      return 2000;
    },
    hobby: ["Cooking", "Gardening"],
    qualification: {
      grad: "BE",
      masters: "Mtech",
    },
  };
  console.log(obj.name); //John
  console.log(obj.age); //30
  console.log(obj.isStudent); //false
  console.log(obj.salary()); //2000
  console.log(obj.hobby[0]); //Cooking
  console.log(obj.hobby[1]); //Gardening
  console.log(obj.qualification.grad); //BE
  console.log(obj.qualification.masters); //Mtech

  console.log("For Loop Begins: ---");

  for (let key in obj) {
    if (typeof obj[key] === "function") {
      console.log(
        `Datatype: ${typeof obj[key]} -- key: ${key} and value: ${obj[key]()}`,
      );
    } else if (typeof obj[key] === "object" && key === "qualification") {
      console.log(obj[key].grad + " & " + obj[key].masters); 
    } else {
      console.log(
        `Datatype: ${typeof obj[key]} -- key: ${key} and value: ${obj[key]}`,
      );
    }
  }
}
