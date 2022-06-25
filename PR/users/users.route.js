const express = require("express");
const utilUsers = require("./users.service")
const routeUsers = express();

// API get All User
routeUsers.get("/users", (req, res) => {
  utilUsers.getAllUser(req,res);
});

// API get specific user
routeUsers.get("/users/:idUser", (req, res) => {
  utilUsers.getUser(req,res);
});

// API insert User 
routeUsers.post("/users/", (req,res) =>{
    utilUsers.inputUser(req,res);
})

// API Update User
routeUsers.put("/users/:idUser", (req, res) => {
    utilUsers.updateUser(req,res);
  });

// API Delete user
routeUsers.delete("/users/:idUser", (req,res) =>{
    utilUsers.deleteUser(req,res);
})
module.exports = { routeUsers };