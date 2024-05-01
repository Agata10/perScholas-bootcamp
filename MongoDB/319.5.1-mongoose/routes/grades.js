import express from 'express';
import { ObjectId } from 'mongodb';
const router = express.Router();
import Grades from '../models/gradeModel.js';

// get all grades
router.route('/').get(async (req, res) => {
  let result = await Grades.find({}).limit(20);
  if (!result) res.send('Not found').status(404);
  res.send(result).status(200);
});

//create a single grade document
router.post('/', async (req, res) => {
  try {
    const grade = await Grades.create(req.body);
    res.status(200).json(grade);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// //////////////////////////////////////////

//get a single grade by id
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    let result = await Grades.findById(id);
    res.send(result).status(200);
  } catch (err) {
    res.send('Invalid Id').status(404);
  }
});

// Add a score to a grade entry
router.patch('/:id/add', async (req, res) => {
  const id = req.params.id;
  let result = await Grades.findByIdAndUpdate(
    id,
    {
      $push: { scores: req.body },
    },
    { new: true }
  );
  console.log(result);
  if (!result) res.send('Not found').status(404);
  else res.json(result).status(200);
});

// Remove a score from a grade entry
router.patch('/:id/remove', async (req, res) => {
  const id = req.params.id;
  try {
    let result = await Grades.findByIdAndUpdate(
      id,
      {
        $pull: { scores: req.body },
      },
      { new: true }
    );
    res.send(result).status(200);
  } catch (err) {
    res.send('Id not found').status(404);
  }
});

// Delete a single grade entry
router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    let result = await Grades.findByIdAndDelete(id);
    res.send(result).status(200);
  } catch (err) {
    res.send('Id not found').status(404);
  }
});

// ////////////////////////////

// Student route for backwards compatibility
router.get('/student/:id', async (req, res) => {
  res.redirect(`../learner/${req.params.id}`);
});

// Get a single student grade data
router.get('/learner/:id', async (req, res) => {
  let query = { learner_id: Number(req.params.id) };

  // Check for class_id parameter
  if (req.query.class) query.class_id = Number(req.query.class);

  let result = await Grades.find(query);

  if (!result) res.send('Not found').status(404);
  res.send(result).status(200);
});

// Delete a learner's grade data
router.delete('/learner/:id', async (req, res) => {
  let query = { learner_id: Number(req.params.id) };

  let result = await Grades.deleteMany(query);

  if (!result) res.send('Not found').status(404);
  else res.send(result).status(200);
});

// ////////////////////////////////////

// Get a single class grade data
router.get('/class/:id', async (req, res) => {
  let query = { class_id: req.params.id };
  let result = await Grades.find(query);
  if (!result) res.send('Not found').status(404);
  res.send(result).status(200);
});

// Update a class id
router.patch('/class/:id', async (req, res) => {
  let query = { class_id: req.params.id };

  let result = await Grades.updateMany(query, {
    $set: { class_id: req.body.class_id },
  });

  if (!result) res.send('Not found').status(404);
  else res.send(result).status(200);
});

// Delete a class
router.delete('/class/:id', async (req, res) => {
  let query = { class_id: Number(req.params.id) };

  let result = await Grades.deleteMany(query);

  if (!result) res.send('Not found').status(404);
  else res.send(result).status(200);
});
export default router;
