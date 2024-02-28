const nodemon = require("nodemon");
const fs = require("fs");
const ejs = require("ejs");

const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "templates");
app.use(express.static("public"));

app.use((req, res, next) => {
  console.log("Наше проміжне ПЗ");
  next();
});

app.get("/", (req, res) => {
  res.render("index", {
    name: "Alex",
    id: 4,
  });
});

app.get("/contact", (req, res) => {
  res.render("contacts");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact/:id", (req, res) => {
  res.send(`<h1>Contact</h1> Параметр: ${req.params.id}`);
});

let port = 3001;
app.listen(port, () => {
  console.log(`Сервак їбашить на: http://localhost:${port}`);
});
