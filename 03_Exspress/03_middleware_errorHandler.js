const express = require('express')
const app = express()
require('dotenv').config()
const port = 9800


app.get('/error', (req,res) => {
    throw new Error ('Error');
});



app.get('/' , (req , res)=>{
    throw new Error ('Error');
//    res.send('hello from simple server :)')

})

app.use((err,req,res,next ) => {
    return res.status('500').json({
        message : err.message
    })
});


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))