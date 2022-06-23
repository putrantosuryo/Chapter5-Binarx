const express = require('express');
const { routeUsers } = require("./users/routeUser.service");
const app = express();
const port = 8080;


app.use(routeUsers);

app.get('/' , (req , res)=>{

   res.send('hello from simple server :)')

})


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))