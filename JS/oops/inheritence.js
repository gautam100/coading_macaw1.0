// Inheritence

class Parent{
    constructor(){
        this.land = 5000
        this.cash = 5000
    }
    parentProperty(){
        const total = this.land + this.cash
        return total
    }

}

class Child1 extends Parent{
    constructor(){
        //super is used to call the constructor of parent
        //super() must be the first line in constructor
        super() 
        this.a = 1000
        this.b = 2000
    }
    add(){
        return this.a + this.b
    }
}

class GrandSon extends Child1{
    constructor(){
        super()
    }
}

let c1 = new Child1()
console.log(c1.parentProperty()) //10000
console.log(c1.add()) //3000
console.log("-----------------")
let gs1 = new GrandSon()
console.log(gs1.add())
console.log(gs1.parentProperty())


function className(){


    function method1(){
        
    }
    function method2(){
        
    }


}

