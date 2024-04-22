const express = require('express');
const app = express();
const PORT = 3000;
const postRoutes = require('./routes/postsRoutes');
const userRoutes = require('./routes/userRoutes');
app.use(express.json());
app.use(postRoutes);
app.use(userRoutes);

app.get('/', (req, res) => {
  res.send('Got it');
});

//error handling
app.use((req, res) => {
  res.status(404);
  res.json({ error: 'Resource not found' });
});

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
