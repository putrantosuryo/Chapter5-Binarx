const express = require('express');
const routeUsers = express();

routeUsers.get("/users",(req,res) => {
    return res.send("dariRouting url");
})

module.exports = {routeUsers}