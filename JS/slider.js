let arr = ["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg"]
let index = 0

function showImg(){
    document.getElementById("pict_container").innerHTML = `<img src="./img/${arr[index]}" width="640" height="420" />`
}

function changeImg(action){
    if(action === "next"){
        index ++

        if(index === arr.length){
            index = 0 
        }
    }else if(action === "prev"){
        if(index === 0){
            index = arr.length 
        }
        index --

    }
    //document.getElementById("imgNo").innerHTML = index
    //document.getElementById("pict_container").innerHTML = `<img src="./img/${arr[index]}" width="640" height="420" />`
    showImg()
}