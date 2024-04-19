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

// serve static files from the styles directory
app.use(express.static("./styles"));

// require the filesystem module
const fs = require("fs");
// define the template engine
app.engine("perscholas", (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err);

    // Here, we take the content of the template file,
    // convert it to a string, and replace sections of
    // it with the values being passed to the engine.
    const rendered = content
      .toString()
      .replaceAll("#title#", `${options.title}`)
      .replace("#content#", `${options.content}`);
    return callback(null, rendered);
  });
});

app.set("views", "./views"); // specify the views directory
app.set("view engine", "perscholas"); // register the template engine

app.get("/", (req, res) => {
  const options = {
    title: "Rendering Views with Express",
    content:
      "Here, we've created a basic template engine using <code>app.engine()</code> \
      and the <code>fs</code> module, then used <code>res.render</code> to \
      render this page using custom content within the template.<br><br> \
      Generally, you won't want to create your own view engines, \
      but it important to understand how they work behind the scenes. \
      For a look at some popular view engines, check out the documentation for \
      <a href='https://pugjs.org/api/getting-started.html'>Pug</a>, \
      <a href='https://www.npmjs.com/package/mustache'>Mustache</a>, or \
      <a href='https://www.npmjs.com/package/ejs'>EJS</a>. \
      More complete front-end libraries like React, Angular, and Vue \
      also have Express integrations.",
  };

  res.render("index", options);
});

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

// app.get("/", (req, res) => {
//     res.send("Keeping it simple.");
//   });

app.listen(port, () => {
  console.log(`Server listening on port: ${port}.`);
});
