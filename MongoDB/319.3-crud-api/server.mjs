import express from "express";
import "dotenv/config";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Welcome to API");
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
