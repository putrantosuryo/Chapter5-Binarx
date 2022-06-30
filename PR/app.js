// Backlog
// - saya membutuhkan api untuk mengatur daftar pengguna
// - data pengguna terdiri dari 3 field : id, nama, dan pasword
// - api ini terdiri dari 5 api
// - 1. api untuk mendapatkan semua list users
// - 2. api untuk mendapatkan 1 user saja
// - 3. api untuk membuat user
// - 4. api untuk mengupdate nama dan password user
// - 5. api untuk mendelete user

// Step

// 1. Buat project baru dengan nodejs (npm init)
// 2. install express
// 3. Buat struktur basic express
// 4. buat CRUD (create read update delete) untuk users
// 5. tidak memerlukan database

const express = require('express')
const { routeUsers } = require('./users/users.route.js')
const app = express()
const port = 8080

// Parsing Body Json 
const bodyParser = require('body-parser');
app.use(bodyParser.json());


// using middleware routing
app.use(routeUsers);
app.get('/' , (req , res)=>{
   res.send('hello from simple server :)')
})


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))