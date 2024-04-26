import express from "express";
import "dotenv/config";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(express.json());
app.get("/", (req, res) => {});
