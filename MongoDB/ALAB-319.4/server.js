import express from 'express';
import 'dotenv/config';
import db from './db/conn.js';

import { ObjectId } from 'mongodb';

const PORT = process.env.PORT || 5050;
const app = express();

app.use(express.json());

// The schema
const learnerSchema = {
  // Use the $jsonSchema operator
  $jsonSchema: {
    bsonType: 'object',
    title: 'Learner Validation',
    // List required fields
    required: ['name', 'enrolled', 'year', 'campus'],
    // Properties object contains document fields
    properties: {
      name: {
        // Each document field is given validation criteria
        bsonType: 'string',
        // and a description that is shown when a document fails validation
        description: "'name' is required, and must be a string",
      },
      enrolled: {
        bsonType: 'bool',
        description: "'enrolled' status is required and must be a boolean",
      },
      year: {
        bsonType: 'int',
        minimum: 1995,
        description:
          "'year' is required and must be an integer greater than 1995",
      },
      avg: {
        bsonType: 'double',
        description: "'avg' must be a double",
      },
      campus: {
        enum: [
          'Remote',
          'Boston',
          'New York',
          'Denver',
          'Los Angeles',
          'Seattle',
          'Dallas',
        ],
        description: 'Invalid campus location',
      },
    },
  },
};

// Find invalid documents.
app.route('/').get(async (req, res) => {
  let collection = db.collection('grades');
  let result = await collection.find().limit(4).toArray();
  res.send(result).status(200);
});

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send('Seems like we messed up somewhere...');
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
