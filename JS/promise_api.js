function getUserData(){
    return new Promise((resolve,reject)=> {
        const apiURL = "https://jsonplaceholder.typicode.com/users/2"

        // API call using fetch
        fetch(apiURL).then((response)=>{
            return response.json() //converting reponse into json
        }).then((data)=>{
            resolve(data) //resolve() will move control to the line no. 17 in then block
        }).catch((error)=>{
            reject("Fetch Error!"+error)//reject will move the control in catch/error handeling block.
        })
    })
}
getUserData()
    .then((userData)=>{
        console.log("Name:",userData.name)
        console.log("Email:",userData.email)
        console.log("Phone:",userData.phone)
    })
    .catch((error) => {
        console.error("Error:",error)
    })