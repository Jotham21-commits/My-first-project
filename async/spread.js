// const array = [
//     {item: 'Mayonaise', price: 888, quantity: 3},
//     {item: 'Blueband', price: 300, quantity: 2},
//     {item: 'vinegar', price: 800, quantity: 9},
// ]

// let result = array.map((num)=>{
//     let total= num.price * num.quantity;
//     return `
   
//      <li>
//     Product: ${num.item}  Price: ${num.price}Frw quantity: ${num.quantity}
//     Totalprice: ${
//         total
//     }
//      </li>
   
//     `
// })
// document.getElementById('root').innerHTML = result;
const array = [
    {item: "books", qty: 2, price: 2000},
    {item: "pen", qty: 32, price: 20600},
    {item: "laptop", qty: 12, price: 600},
    {item: "computer", qty: 21, price: 9000},          
]
// object for receipt
   let a = [3,3];
   
const promise = new Promise((resolve, reject)=>{
    let e =[]
   let even = a.forEach((num) =>{
    if(num % 2 ===0){
        e.push(num)
    }})
   if(e.length > 0) {
       resolve(e)
   } else {
       reject(a)
   }
})
   
      
  
promise.then((result)=>{
    console.log("Even numbers: ", result)
            }).catch((error)=>{
                console.log("Error: ", error)
                })

