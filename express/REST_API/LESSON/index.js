const express = require('express');
const app = express();
const PORT = 3000;

const users = require('./data/users');
const posts = require('./data/posts');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Got it');
});

app
  .route('/api/users')
  .get((req, res) => {
    res.json(users);
  })
  .post((req, res) => {
    console.log('req.body ' + req.body);
    res.json('Post /api/users');
  });

app.get('/api/users/:id', (req, res, next) => {
  const user = users.find((u) => u.id == req.params.id);
  if (user) res.json(user);
  next();
});

app.get('/api/posts', (req, res) => {
  res.json(posts);
});

app.get('/api/posts/:id', (req, res, next) => {
  const post = posts.find((post) => post.id == req.params.id);
  if (post) res.json(post);
  next();
});

//error handling
app.use((req, res) => {
  res.status(404);
  res.json({ error: 'Resource not found' });
});

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
