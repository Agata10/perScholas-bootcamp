const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require('body-parser')

app.set("view engine", "ejs");
app.use(bodyParser.json());
// app.use(forms.array()); 
app.use(bodyParser.urlencoded({ extended: true }));


//index.ejs template
app.get("/", (req, res) => {
  const user = { firstName: "Agata", age: 25 };
  res.render("pages/index", { user: user });
  console.log(user);
});

// //about.ejs template
app.get("/about", (req, res) => {
  const menu = [
    { title: "Home", href: "http://localhost:3000/" },
    { title: "Login", href: "http://localhost:3000/login" },
    { title: "About", href: "http://localhost:3000/about" },
  ];

  res.render("pages/about", { links: menu });
});

app.get("/login", (req, res) => {
  res.render("pages/login");
})

app.post("/login", (req, res) => {
  console.log(req.body)
  console.log('success')
});

app.get("/image", (req, res) => {
  res.download('./image/dog.jpeg')
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}.`);
});
