const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/products", (req, res) => {
  const products = [
    {
      name: "product 1",
      price: 2000,
    },
    {
      name: "product 2",
      price: 4000,
    },
  ];
  res.json(products);
});

app.get("/products/:productIdlalal", (req, res) => {
  console.log(req.params);
  return res.send(req.params);
});

app.listen(port, () =>
  console.log(`Server started and listening on port ${port}`)
);
