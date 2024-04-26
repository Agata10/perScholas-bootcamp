import express from "express";
import db from "../db/conn.js";
import { ObjectId } from "mongodb";
const router = express.Router();

router.route("/").get(async (req, res) => {
  let collection = db.collection("grades");
  let result = await collection.find().limit(4).toArray();
  res.send(result).status(200);
});

//get a single grade by id
router.get("/:id", async (req, res) => {
  let collection = await db.collection("grades");
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  res.send(result).status(200);
});

// Get a single student grade data
router.get("/learner/:id", async (req, res) => {
  let collection = await db.collection("grades");
  let query = { learner_id: Number(req.params.id) };
  let result = await collection.find(query).toArray();

  if (!result) res.send("Not found").status(404);
  res.send(result).status(200);
});

// Get a single class grade data
router.get("/class/:id", async (req, res) => {
  let collection = await db.collection("grades");
  let query = { class_id: Number(req.params.id) };
  let result = await collection.find(query).toArray();

  if (!result) res.send("Not found").status(404);
  res.send(result).status(200);
});
export default router;
