const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());
const users = require('./data/users');
const posts = require('./data/posts');

app.get('/', (req, res) => {
  res.send('Got it');
});

app
  .route('/api/users')
  .get((req, res) => {
    res.json(users);
  })
  .post((req, res) => {
    // console.log('req.body: ', req.body);
    // res.json('Post /api/users');
    // Within the POST request route, we create a new
    // user with the data given by the client.
    // We should also do some more robust validation here,
    // but this is just an example for now.
    if (req.body.name && req.body.username && req.body.email) {
      const foundUser = users.find((u) => u.username == req.body.username);
      if (foundUser) {
        res.json({ error: 'Username Already Taken' });
        return;
      }
      const user = {
        id: users[users.length - 1].id + 1,
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
      };
      users.push(user);
      res.json(users[users.length - 1]);
    } else res.json({ error: 'Insufficient Data' });
  });

app
  .route('/api/posts')
  .get((req, res) => {
    res.json(posts);
  })
  .post((req, res) => {
    if (req.body.userId && req.body.title && req.body.content) {
      const post = {
        id: posts[posts.length - 1].id + 1,
        userId: req.body.userId,
        title: req.body.title,
        content: req.body.content,
      };

      posts.push(post);
      res.json(posts[posts.length - 1]);
    } else res.json({ error: 'Insufficient Data' });
  });

app
  .route('/api/users/:id')
  .get((req, res, next) => {
    const user = users.find((u) => u.id == req.params.id);
    if (user) res.json(user);
    next();
  })
  .patch((req, res, next) => {
    // Within the PATCH request route, we allow the client
    // to make changes to an existing user in the database.
    const user = users.find((u, i) => {
      if (u.id == req.params.id) {
        for (const key in req.body) {
          users[i][key] = req.body[key];
        }
        return true;
      }
    });

    if (user) res.json(user);
    else next();
  })
  .delete((req, res, next) => {
    // The DELETE request route simply removes a resource.
    const user = users.find((u, i) => {
      if (u.id == req.params.id) {
        users.splice(i, 1);
        return true;
      }
    });

    if (user) res.json(user);
    else next();
  });

app
  .route('/api/posts/:id')
  .get((req, res, next) => {
    const post = posts.find((post) => post.id == req.params.id);
    if (post) res.json(post);
    next();
  })
  .patch((req, res, next) => {
    const post = posts.find((p, i) => {
      if (p.id == req.params.id) {
        for (const key in req.body) {
          posts[i][key] = req.body[key];
        }
        return true;
      }
    });

    if (post) res.json(post);
    else next();
  })
  .delete((req, res, next) => {
    // The DELETE request route simply removes a resource.
    const post = posts.find((p, i) => {
      if (p.id == req.params.id) {
        posts.splice(i, 1);
        return true;
      }
    });

    if (post) res.json(post);
    else next();
  });

//error handling
app.use((req, res) => {
  res.status(404);
  res.json({ error: 'Resource not found' });
});

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
