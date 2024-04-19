const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, from server");
  console.log("got here");
});

app.get("/express", (req, res) => {
  res.send("Hello, got to route /express");
});

//route parameters
app.get("/users/:userID/profile/:data", (req, res) => {
  console.log(req.params);
  res.send("Recieved  GET request at /users");
});

app.post("/users", (req, res) => {
  res.send("Recieved  POST request at /users");
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}.`);
});
