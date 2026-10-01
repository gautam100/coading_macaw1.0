function doAdd(a: number, b: number): number {
  let sum: number = a + b;
  return sum;
}

console.log(doAdd(2, 5));

//optional parameter: ?
function doMultiply(a: number, b?: number): number {
    if(b === undefined)
        b=1
  return a * b;
}

console.log(doMultiply(2, 3));
console.log(doMultiply(20));
