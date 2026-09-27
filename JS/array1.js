function myArray() {
  let ar = [10, "John", 50.5, false];
  //let ar1 = new Array()

  console.log(ar[0]); // 10
  console.log(ar[1]); // John
  console.log(ar[2]); // 50.5
  console.log(ar[3]); // false

  ar.push("Mango");
  ar.push("Rose");
  ar.push("Onion");
  console.log(ar[ar.length - 1]);
  console.log("-----------------");
  
  for (let i = 0; i < ar.length; i++) {
    console.log(ar[i]);
  }
  
  console.log("-----------------");

  for(let temp of ar){
    console.log(temp) // 10 john 50.5 ...
  }


}

myArray();
