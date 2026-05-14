const {Client} = require('pg');
const client = new Client({
    user: 'postgres',
    database: 'Rukara',
    host:'localhost',
    part: 5432, 
    password: 'jotham',

}
)
client.connect()
.then(()=>{
    console.log("connected")

}).catch((err)=>{
    console.log("fail", err)
})
client.query('SELECT * FROM students', (err,res)=>{
    if(!err){
        console.log(res.rows)
    }
    else{
        console.log(err.message)
    }
})
client.end;