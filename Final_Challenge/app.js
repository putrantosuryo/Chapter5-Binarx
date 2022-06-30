const express = require("express");
const { routeUsers } = require("./Users/user.router");
const app = express();
const port = 8001;

// // Parsing Body Json 
const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.set("view engine", "html");
app.engine("html", require("ejs").renderFile);

//Load style 
app.use(express.static(__dirname + "/public/chapter3"));
app.use(express.static(__dirname + "/public/chapter4"));


//API for chapter 3 
app.get("/HomePage", (req, res) => {
  return res.render("Chapter3-Binar/index");
});

//API for chapter 4
app.get("/GamePage", (req, res) => {
  return res.render("RockPaperScissorGame/index");
});

//Login
app.use(routeUsers);



app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
