const express = require("express");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

///GREETINGS
app.get("/gretting", (req, res) => {
  res.send("Hello, stranger");
});

app.get("/gretting/:name", (req, res) => {
  res.send(`Hello there, ${req.params.name}`);
});

//TIP CALCULATOR
app.get("/tip/:total/:tipPercentage", (req, res) => {
  res.send(
    `Tip amount: ${(req.params.tipPercentage * req.params.total) / 100}`
  );
});

//MAGIC 8 BALL
app.get("/magic/:question", (req, res) => {
  const responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
  ];
  const randomNum = Math.floor(Math.random() * responses.length - 1);
  const response = responses[randomNum];
  const question = req.params.question;
  res.send(`<h3>Your question: ${question}?</h3>
  <h1>${response}</h1>`);
});

//Beer on the wall
app.get("/", (req, res) => {
  res.render("beer", { number: 99 });
});

app.get("/:number", (req, res) => {
  res.render("number", { number: req.params.number });
});

// app.get("/", (req, res) => {
//   res.send(`
//       <h1>99 Bottles of beer on the wall</h1>
//       <a href="/98">take one down, pass it around</a>
//     `);
// });

// app.get("/:number_of_bottles", (req, res) => {
//   const numberOfBottles = parseInt(req.params.number_of_bottles);

//   if (numberOfBottles === 0) {
//     res.send(`
//         <h1>No more bottles of beer on the wall</h1>
//         <a href="/">Start over</a>
//       `);
//   } else {
//     res.send(`
//         <h1>${numberOfBottles} Bottles of beer on the wall</h1>
//         <a href="/${numberOfBottles - 1}">take one down, pass it around</a>
//         <br/>
//         <a href="/">Start over</a>
//       `);
//   }
// });

//Fibonacci
app.get("/fibonacci/:n", (req, res) => {
  if (isFibonacci(Number(req.params.n)) === true) {
    res.send("Very good. It is Fibonacci.");
  } else {
    res.send("I can tell this is not a fibonacci number.");
  }
});

app.listen(PORT, () => {
  console.log(`Server working on the port: ${PORT}`);
});

function isFibonacci(num, a = 0, b = 1) {
  if (num === 0 || num === 1) {
    return true;
  }

  let nextNumber = a + b;

  if (nextNumber === num) {
    return true;
  } else if (nextNumber > num) {
    return false;
  }

  return isFibonacci(num, b, nextNumber);
}
