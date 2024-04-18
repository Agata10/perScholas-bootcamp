const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  //console.log(res);
  //res.end("Hello World!\n");
  switch (req.url) {
    case "/":
      res.setHeader("Content-type", "text/html");
      res.write('<h1 style="color: red">Hello World!</h1>');
      res.write("<p>I wonder what else we can send...</p>");
      break;
    case "/menu":
      res.setHeader("Content-type", "text/plain");
      res.write("MENU");
      break;
    default:
      res.statusCode = 404;
      res.write("Error: 404 Not Found");
      break;
  }
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server runniing at http://${hostname}:${port}/`);
});
