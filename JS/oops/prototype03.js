//let ar = new Array()

let ar1 = [2, 4, 6]
let ar2 = [12, 14, 16]
Array.prototype.doAdd = function () {
  let sum = 0
  for(let el of this){
  //for (let i = 0; i < this.length; i++) {
    //sum = sum + this[i]
    sum += el
  }
  return sum
}

console.log(ar1.doAdd())
console.log(ar2.doAdd())
