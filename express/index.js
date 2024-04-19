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
// app.get("/users/:userID/profile/:data", (req, res) => {
//   console.log(req.params);
//   //res.send("Recieved  GET request at /users");
//   res.send(
//     `Hello, got to route /express/userId/profile/data with user ID: ${req.params.userID} and data: ${req.params.data}`
//   );
// });

app.get("/user/:userID", (req, res) => {
  res.send(`Navigated to the user page for: ${req.params.userID}.`);
});

app.get("/user/:userID/profile", (req, res) => {
  res.send(`Navigated to the user profile page for: ${req.params.userID}.`);
});

app.get("/user/:userID/profile/:data", (req, res) => {
  res.send(
    `Navigated to the user profile page for: ${req.params.userID}, with the data: ${req.params.data}.`
  );
});

app.post("/users", (req, res) => {
  res.send("Recieved  POST request at /users");
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}.`);
});
