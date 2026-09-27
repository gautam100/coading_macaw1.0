let fn = function(){
    let prodList = [
        ["Polo Tshirt",20],
        ["Reebok Sport Shoe", 24],
        ["Park Avenue Formal Shirt", 40]
    ]

    let tbody = document.getElementById("tab_body")
    let html = ""
    let sNo = 1
    let total = 0
    let totalAfterDiscount = 0
    for(let prod of prodList){
        html += "<tr>"
        html += `<td>${sNo}</td>`
        html += "<td>"+prod[0]+"</td>"
        html += "<td align='right'> $"+prod[1]+"</td>"
        html += "</tr>"

        sNo++
        total = total + prod[1]
    }
    tbody.innerHTML = html

    if(total>= 80){
        totalAfterDiscount = total * 5/100
    }
    let tfoot = document.getElementById("tab_foot")
    let footHtml = ""
    
    footHtml += "<tr>"
    footHtml += "<td colspan='3' align='right'><strong>Total: $"+total+"</strong></td>"
    footHtml += "</tr>"

    footHtml += "<tr>"
    footHtml += `<td colspan='3' align='right'><strong>Total After Discount: $${total - totalAfterDiscount}</strong></td>`
    footHtml += "</tr>"
    tfoot.innerHTML = footHtml
} 