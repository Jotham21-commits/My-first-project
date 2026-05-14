
const array = [{name: "John", age: 30, price: 30000},
               {name: "Jane", age: 25, price: 25000},
               {name: "Doe", age: 40, price: 40000}]

 const names = array.map(person=>{
    return {...person,
        name: person.name + " Smith",
        age: person.age *3 ,
        price: person.age * 1000
    }
   
 })
 console.log(names)