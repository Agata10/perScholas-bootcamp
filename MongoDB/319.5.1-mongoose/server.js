import express from 'express';
import 'dotenv/config';
import connectToDb from './db/conn.js';
import gradesRoutes from './routes/grades.js';

const PORT = process.env.PORT || 5050;
const app = express();
connectToDb();

app.use(express.json());
app.use('/grades', gradesRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to API');
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
