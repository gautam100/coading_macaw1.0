//Lexical Scope
function parent(){
    const name = "Smith"
    function child(){
        console.log("My name is ",name)
    }
    child()
}

parent()
console.log("----------------------------------------")

// closure

function addr(num=0){
    function add(b){
        console.log(num + b)
    }
    return add
}

const addTo5 = addr(5)
//Note: because of Lexical scope addTo5 has access of entire addr()
console.log(addTo5)
addTo5(2) //7
addTo5(10) //15