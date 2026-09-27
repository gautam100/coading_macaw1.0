stud1 = new Object()
stud1.name = "John" //Here name is a data property because name holds a data

/*
Accessor Property: It is used to access data property 

Access Modifier: public | private | protected
*/

var creditCard = {
    _name : "Smith",
    _CVV : 876,

    get creditCardName(){
        return this._name
    },
    set creditCardName(value){
        this._name = value
    }
}

console.log(creditCard.creditCardName)//Smith
creditCard.creditCardName = "John"
console.log(creditCard.creditCardName)//John

/*
----
----
*/