let ar1 = [1,2,3]
let ar2 = [...ar1] // ... rest operator

console.log(ar1)

ar1[0] = 100

console.log(ar1) //[100,2,3]
console.log(ar2) //[100,2,3]

// spread operator
function abc([...arr2]){
    
}

let arr1 = [1,2,30]
abc(arr1)