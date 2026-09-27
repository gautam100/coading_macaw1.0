function productList(){
    let products = [
        {
            "id":1,
            "title": "Men Printed Gym T-Shirt",
            "description": "Peach-coloured Tshirt for Men Brand Logo Solid Regular length Round Neck Short, Raglan Sleeves Polyester fabric",
            "price": 10,
            "image": "./img/tshirt01.jpg"
        },
        {
            "id":2,
            "title": "Men Sport shoe",
            "description": "Peach-coloured Tshirt for Men Brand Logo Solid Regular length Round Neck Short, Raglan Sleeves Polyester fabric",
            "price": 8,
            "image": "./img/shoe02.jpg"
        },
        {
            "id":1,
            "title": "Denim jeans",
            "description": "Peach-coloured Tshirt for Men Brand Logo Solid Regular length Round Neck Short, Raglan Sleeves Polyester fabric",
            "price": 9,
            "image": "./img/jeans03.jpg"
        }
    ]
    
    let container = document.getElementById("card_container")
    let card_html = ""
    for(let prod of products){
        card_html += "<div class='card'>"
        card_html += `<div><img src="${prod.image}" width='200' height='200' ></div>`
        card_html += `<div class='h-center'><h4>${prod.title}</h4></div>`
        card_html += `<div class='card-desc'>${prod.description  }</div>`
        card_html += `<button class='h-center card-price'>Add to cart $${prod.price }</button></div>`
        card_html += "</div>"
    }//for

    container.innerHTML = card_html

}