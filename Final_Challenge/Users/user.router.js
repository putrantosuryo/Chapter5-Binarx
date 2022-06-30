const express = require("express");
const utilUsers = require("../Users/user.service");
const routeUsers = express.Router();

//API Login
routeUsers.post("/login", (req, res) => {
  try {
    return utilUsers.login(req, res);
  } catch (error) {
    return res.send("ERROR");
  }
  // utilUsers.login(req,res);
});

module.exports = { routeUsers };
