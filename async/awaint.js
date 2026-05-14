const array = [1, 2, 3, 4, 5];
function data(){
    let evenNumbers =[];
    return new Promise ((resolve,reject)=>{
        array.filter((num)=>{
            if(num % 2 ==0){
                 evenNumbers.push(num)
            }})
        if(evenNumbers.length > 0){
            resolve(evenNumbers);}
            else{reject(array)}
    })
}
async function result(){
    try{
        const even = await data();
        console.log("Even numbers: ", even)
    }
    catch(error){
        console.log("No even numbers found: ", error)
    }
}
result();
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Map Method Example</title>
</head>
<body>

  <h1>Products List</h1>

  <!-- place where products will appear -->
  <ul id="list"></ul>

  <script>

    // array of products
    const products = [
      { name: "Phone", price: 200 },
      { name: "Laptop", price: 500 },
      { name: "Mouse", price: 50 }
    ];

    // use map to create HTML
    const productHTML = products.map(product => {
      return `
        <li>
          Product: ${product.name} - Price: $${product.price}
        </li>
      `;
    }).join("");

    // insert HTML into webpage
    document.getElementById("list").innerHTML = productHTML;
console.log("u")
  </script>

</body>
</html>v