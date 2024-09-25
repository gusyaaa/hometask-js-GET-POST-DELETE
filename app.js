let transaction = {
    from: "Farhad",
    to: "Huseyn",
    amount:"20"
}

fetch('https://acb-api.algoritmika.org/api/transaction',{
    method: "POST",
    headers:{
        'Content-type':'application/json'
    },
    body:JSON.stringify(transaction)
})
fetch('https://acb-api.algoritmika.org/api/transaction')
.then(res => res.json())
.then(data => {
    console.log(data);
})
let update ={
    from:"Ruslan",
    to:"Huseyn",
    amount:"30"
}
fetch('https://acb-api.algoritmika.org/api/transaction/19547',{
    method: "PUT",
    headers:{
        'Content-type':'application/json'
    },
    body:JSON.stringify(update)
})

fetch('https://acb-api.algoritmika.org/api/transaction/19547',{
    method:"DELETE"
})