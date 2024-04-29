import { MongoClient } from 'mongodb';

const connectionString = process.env.ATLAS_URI || '';
console.log(connectionString);
const client = new MongoClient(connectionString);

let conn;
try {
  console.log(connectionString);
  conn = await client.connect();
  console.log('Connected to MongoDB');
} catch (err) {
  console.log(err);
}

let db = conn.db('sample_training');
export default db;
