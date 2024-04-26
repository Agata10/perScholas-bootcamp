import express from "express";
import "dotenv/config";
import gradesRoutes from "./routes/grades.mjs";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(express.json());
app.use("/grades", gradesRoutes);
app.get("/", (req, res) => {
  res.send("Welcome to API");
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
