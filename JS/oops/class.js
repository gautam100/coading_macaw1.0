//class: class is a template
//object: object is a instance of class
//Design pattern: Factory, Singleton, MVC, MVT

// Django: MVT
// Express/Laravel/Codeigniter: MVC | Singleton

class MyClass{

    name = "Math" //Class variable
    xyz = {
        a:1,
        b:2
    }

    //method
    doAdd(ar){
        let sum = 0
        for(let a of ar){
            sum = sum + a
        }
        console.log("Addition of all elements is:",sum)
    }

    doMultiply(ar){
       let mul = 1
        for(let a of ar){
            mul = mul * a
        }
        console.log("Multiplication of all elements is:",mul) 
    }

}

let o1 = new MyClass()
o1.doAdd([1,2,3])
o1.doMultiply([2,1,3])
console.log(o1.name)//Math
console.log("Printing xyz object",o1.xyz.b)

console.log("---------------")

let o2 = new MyClass()
o2.doAdd([10,11,12])
o1.doMultiply([3,4,5])
console.log(o2.name)


const obj = {} //Class name: Object
console.log(obj instanceof Object)
console.log(o1 instanceof MyClass)

// console.log(typeof o1)
// console.log(typeof o2)
// console.log(typeof obj)
