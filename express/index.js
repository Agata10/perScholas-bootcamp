const express = require("express");
const app = express();
const port = 3000;

//COOKIES
// const cookieParser = require("cookie-parser");

// async function validateCookies(req, res, next) {
//   await cookieValidator(req.cookies);
//   next();
// }

// async function cookieValidator(cookies) {
//   console.log(cookies);
//   // We don't have any cookies to validate, so we'll just return true for now.
//   return true;
// }

// app.use(cookieParser());

// app.use(validateCookies);

// // error handler
// app.use((err, req, res, next) => {
//   res.status(400).send(err.message);
// });

const userRoutes = require("./routes/user");
app.use("/user", userRoutes);

//MIDDLEWARE
// const logReq = (req, res, next) => {
//   const check = true;
//   if (check) {
//     console.log("Request recieved(middleware)");
//     // res.send("Yay");
//     next();
//   } else {
//     res.send("something went wrong");
//     console.log("Something went wrong in middleware");
//   }
// };

// app.use(logReq);

app.get("/", (req, res) => {
  res.send("Keeping it simple.");
});

// app.get("/", (req, res) => {
//   res.send("Hello, from server");
//   console.log("got here");
// });

// app.get("/express", (req, res) => {
//   res.send("Hello, got to route /express");
// });

// //route parameters
// // app.get("/users/:userID/profile/:data", (req, res) => {
// //   console.log(req.params);
// //   //res.send("Recieved  GET request at /users");
// //   res.send(
// //     `Hello, got to route /express/userId/profile/data with user ID: ${req.params.userID} and data: ${req.params.data}`
// //   );
// // });

//it now is in user.js
// app
//   .route("/users")
//   .get((req, res) => {
//     res.send("Recieved  GET request at /users");
//   })
//   .post((req, res) => {
//     res.send("Recieved  POST request at /users");
//   });

app.listen(port, () => {
  console.log(`Server listening on port: ${port}.`);
});
