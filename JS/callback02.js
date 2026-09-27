let ar = [5,6,12,2,20]
let sum = 0

function doAdd(callback){
    for(let el of ar){
        sum +=el
    }
    console.log("Sum is:",sum)
    callback() //avg()
}

//avg() is a callback
function avg(){
    console.log("Average is: ", sum/ar.length)
}

doAdd(avg)


/*
fetching info about a user - smith, smith@gmail, .... id (101)

fetch financial transactions of smit of last month (depends on id)
----------------------------------
fun 01 --- id

fun 02(id)
 --error
*/