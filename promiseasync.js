// const promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//     resolve("Promise resolved after 2 seconds");
//     reject("Promise rejected after 2 seconds");
//     }, 1000)
// })
// promise.then((message)=>{
//     console.log(message)
// }).catch((error)=>{
//     console.log(error)
// })


// function fetchDatafromdatabase(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             const user = {
//                 id:1,
//                 name: "joseph",
//                 age: 29
//             }
//             resolve(user)
//         }, 2000)
//     })
// }
// fetchDatafromdatabase().then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(error);
// })





// function data(){
//     return new Promise((resolve, reject)=>{
//         console.log("connecting to the database....")
//         setTimeout(()=>{
//             const user = {
//                 id: 1,
//                 name: "Joseph",
//                 email: "ddjkjk"
//             }
//             resolve(user)
//         },1000)
//     })
// }
// async function datafetch(){
//     try{
//         const userorder = await data()
//         console.log("user received:", userorder)
//     }
// catch(error){
//     console.log("error:", error)
// }
// }
// datafetch();

// function datafetchingfromdatabase(){
//     return new Promise((resolve, reject)=>{
//         setInterval(() => {
//             resolve({id:1,name:'john', age:10})
            
//         }, 1000);
//     })
// }
// async function database(){
//     try{
//         const user = await datafetchingfromdatabase();
//         console.log("user received:", user)
//     }
// catch(error){
//     console.log("error: ", error)
// }
// }
// database();
// function add(a,b,callback){
//     const sum = a + b;
//     callback(sum);
// }
// add(8,3,r=>console.log(r))  

// function name(name, callback){
//     console.log("hi", name)
//     callback()
// }
// function a(){
//     console.log("Godd Bye!")
// }
// name("jotm", a)
// function calculationsum(a,b){
//     return new Promise((resolve, reject)=>{
//         if(typeof a ==='number' || typeof b ==='number'){
//            return reject("only numbers are allowed")
//         }
//         resolve(a + b)
//     })
// }
// calculationsum('5', '10').then(result=>console.log(result)).catch(error=>console.log(error))
// function calculationsum(a,b){
//     return new Promise((resolve, reject)=>{
//         resolve(a+b)
//     })
// }
// async function sum(){
//     try{
//         let result = await calculationsum(2,5)
//         console.log(result)
//     }
//     catch(error){
//         console.log(error)
//     }
// }
// sum();

// function congratulate(a,b,callback){
//     const sum = a + b;
//     callback(sum);
// }
// function display(result){
// console.log("congratulations! the sum is:", result)
// }
// congratulate(2,9, display)
 
// function congratulate(a,b){
//     return new Promise((resolve, reject)=>{
//         if(typeof a !== 'number' || typeof b !== 'number'){
//             return reject("Input must be a number")
//         }
//         resolve(a+b)
//     }
// )}
// congratulate(9,9).then(result=>console.log("congratulations! the sum is: ", result)).catch
// (error=>console.log(error))
// function congratulate(a, b){
//     return new Promise((resolve, reject)=>{
//         if(typeof a !=='number' || typeof b!== 'number'){
//             reject("Input must be a number")
//         }
//         resolve(a+b)
//     })
// }
// async function display(){
//     try{
//         const result = await congratulate(2,4)
//         console.log("congratulations! the sum is: ", result)
//     }
//     catch(error){
//         console.log("error: ", error)
//     }
    
    
// }
// display()

// const array = []
// function addtoarray(name,age){
//     array.push({name,age})

// }
// addtoarray("jotham", 29)
// addtoarray("joseph", 30)

// array.push({
//     age: 29,
//     name: 'Jotham'
// })
// console.log(array)

// const arrayf= [];
// let ar = [12,3,4,5,6,7,8,9]
// ar.forEach((num)=>{
//     if(num %2 === 0){
//         arrayf.push(num)
//     }
// })
// console.log(arrayf)

// let arr = [12,3,4,5,6,7,8,9]
// let even = arr.filter(num => num%2 ===0)
// console.log(even)
  

//callback() function

function takeorder(customer,callback){
    console.log(customer +" " + "is ordered pizza")
    callback()
}
function cookfood(){
    console.log('chef is cooking.....')
}
takeorder("Jor", cookfood)

//promises() function
const array = [1,5,3,5]
const promise = new Promise((resolve, reject)=>{
 
    let evensNumber = array.filter(num => num % 2 === 0)
    
        


    if(evensNumber.length > 0){
        resolve(evensNumber)
    }
    else{
        reject(array);
    }
})
 promise.then((re)=> console.log("The even is:", re))
 .catch((error)=>console.log("Not even number found??", error))

//async/awaint function style


