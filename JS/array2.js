function myArray() {
  let ar1 = [
    10,
    "John",
    function () {
      return 10;
    },
    [1, 2, 3],
    null
  ];
  console.log(ar1[0]); // 10
  console.log(ar1[1]); // John
  console.log(ar1[2]()); //
  console.log(ar1[3][0]); // 1
  console.log(ar1[3][1]); // 2
  console.log(ar1[3][2]); // 3
  console.log(typeof ar1[4]); // null

  console.log("---------------");
//   for (let el of ar1) {
//     if (typeof el === "function") {
//       console.log(el());
//     }else if(typeof el === "object"){
//         for(let e of el){
//             console.log(e)
//         }
//     } 
//     else {
//       console.log(el);
//     }
//   }
}

myArray();
