import express from 'express';
import 'dotenv/config';
import db from './db/conn.js';

import { ObjectId } from 'mongodb';

const PORT = process.env.PORT || 5050;
const app = express();

app.use(express.json());

const createValidationRule = async () => {
  await db.command({
    collMod: 'grades',
    // Pass the validator object
    validator: {
      // Use the $jsonSchema operator
      $jsonSchema: {
        bsonType: 'object',
        title: 'Grades Validation',
        // List required fields
        required: ['class_id', 'learner_id'],
        // Properties object contains document fields
        properties: {
          class_id: {
            bsonType: 'int',
            minimum: 0,
            maximum: 300,
            description:
              "'class_id' is required, and must be a int between 0 and 300,inclusive",
          },
          learner_id: {
            bsonType: 'int',
            minimum: 0,
            description:
              "'learner_id' is required, and must be a int greater or equial to 0",
          },
        },
      },
    },
    validationAction: 'warn',
  });
};

// Find invalid documents.
app.get('/', async (req, res) => {
  let collection = db.collection('grades');

  try {
    // Create a single-field index for learner_id
    await collection.createIndex({ learner_id: 1 });
    console.log('Index created for learner_id');

    // Create a single-field index for class_id
    await collection.createIndex({ class_id: 1 });
    console.log('Index created for class_id');

    // Create a compound index on learner_id and class_id, in that order, both ascending
    await collection.createIndex({ learner_id: 1, class_id: 1 });
    console.log('Compound index created for learner_id and class_id');

    res.send('Creating indexes').status(200);
  } catch (err) {
    console.error('Error creating index:', err);
    res.status(500).json({ message: 'Error creating index' });
  }
});
createValidationRule();
// Test the schema validation by inserting an invalid document
app.get('/grades', async (req, res) => {
  let collection = await db.collection('grades');
  let newDocument = {
    learner_id: 2,
    class_id: 200,
  };

  let result = await collection.insertOne(newDocument).catch((e) => {
    return e.errInfo.details.schemaRulesNotSatisfied;
  });
  res.send(result).status(204);
});

app.get('/grades/stats', async (req, res) => {
  let collection = await db.collection('grades');

  let result = await collection
    .aggregate([
      {
        $project: {
          avg: {
            $avg: '$scores.score',
          },
        },
        $match: {
          avg: { $gt: 70 },
        },
        $count: 'numberOfDoc',
      },
    ])
    .toArray();
  res.send(result);
});

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send('Seems like we messed up somewhere...');
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
