const express = require ("express");
const { getProduct } = require("./products/product.service");
const { getUsers } = require("./users/users.service");
const app = express();
const port = 8080;

//get users
app.get("/users", getUsers);

//get products
app.get("/products", getProduct);


app.listen (port, ()=> {
    console.log ("server started on port : "+ port)
});