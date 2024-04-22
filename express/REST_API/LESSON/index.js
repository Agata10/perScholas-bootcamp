const express = require("express");
const app = express();
const PORT = 3000;

const users = require("./data/users");
const posts = require("./data/posts");

app.get("/", (req, res) => {
  res.send("Got it");
});

app.listen(PORT, () => {
  console.log("Hello");
});
