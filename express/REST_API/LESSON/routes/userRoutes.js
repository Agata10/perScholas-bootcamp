const express = require('express');
const router = express.Router();

const users = require('../data/users');

router
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

router
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
module.exports = router;
