const nodemon = require("nodemon");
const fs = require("fs");

const colors = require("colors/safe");
const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("Наше проміжне ПЗ");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact page</h1>");
});

app.get("/contact/:id", (req, res) => {
  res.send(`<h1>Contact</h1> Параметр: ${req.params.id}`);
});

let port = 3001;
app.listen(port, () => {
  console.log(`Сервак їбашить на: http://localhost:${port}`);
});
