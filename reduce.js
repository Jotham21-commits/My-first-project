// using reduce method
// const array =[
//     {item: 'pen', qty: 6, price: 5488},
//     {item: 'book', qty: 63, price: 3388},
//     {item: 'bag', qty: 26, price: 488}
// ]
// const result = array.reduce((acc, curr)=>{
//     acc[curr.item]={
//         quantinty: curr.qty,
//         Tatolrprice: curr.qty * curr.price
//     }
//     return acc;
// }, {})
// console.log(result)
// create the receipt using reduce method
const arrayitem = [
  { item: "Mayonaise", price: 7000, quantity: 2 },
  { item: "Cornflour", price: 45000, quantity: 32 },
  { item: "Mustard", price: 2100, quantity: 12 },
  { item: "Vinegar", price: 26900, quantity: 5 }
];

// object to store the receipt
const receipt = arrayitem.reduce((acc,curr)=>{
  acc[curr.item]={
    price: curr.price,
    Tatolprice: curr.price*curr.quantity
  }
  return acc;
},{})
const tatolprice = arrayitem.reduce((acc, curr)=>{
  return acc + (curr.price * curr.quantity)
}, 0)
const tatolquantity = arrayitem.reduce((acc, curr)=>{
  return acc + curr.quantity
}, 0)
console.log(receipt)
console.log("Total price: ", tatolprice)
console.log("Total quantity: ", tatolquantity)