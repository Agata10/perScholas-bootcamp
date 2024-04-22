const express = require('express');
const router = express.Router();

const comments = require('../data/comments');
const users = require('../data/users');
const posts = require('../data/posts');
router
  .route('/')
  .get((req, res) => {
    if (req.query.userId) {
      const comms = comments.filter((c) => c.userId == req.query.userId);
      if (comms.length !== 0) return res.json(comms);
      else return res.json('Not such id');
    } else if (req.query.postId) {
      const comms = comments.filter((c) => c.postId == req.query.postId);
      if (comms.length !== 0) return res.json(comms);
      else return res.json('Not such id');
    }

    if (comments.length === 0) {
      res.json('No comments');
    }
    res.json(comments);
  })
  .post((req, res) => {
    if (req.body.userId && req.body.postId && req.body.body) {
      const foundUser = users.find((u) => u.id == req.body.userId);
      if (!foundUser) {
        res.json({ error: 'Not user with such id found' });
        return;
      }
      const foundPost = posts.find((p) => p.id == req.body.postId);
      if (!foundPost) {
        res.json({ error: 'No post with such id found' });
        return;
      }
      const comment = {
        id: comments.length === 0 ? 0 : comments[comments.length - 1].id + 1,
        userId: req.body.userId,
        postId: req.body.postId,
        body: req.body.body,
      };
      comments.push(comment);
      res.json(comments[comment.length - 1]);
    } else res.json({ error: 'Insufficient Data' });
  });

router
  .route('/:id')
  .get((req, res, next) => {
    const comm = comments.find((c) => c.id == req.params.id);
    if (comm) return res.json(comm);
    next();
  })
  .patch((req, res, next) => {
    const comm = comments.find((c, i) => {
      if (c.id == req.params.id) {
        for (const key in req.body) {
          comments[i][key] = req.body[key];
        }
        return true;
      }
    });

    if (comm) res.json(comm);
    else next();
  })
  .delete((req, res, next) => {
    // The DELETE request route simply removes a resource.
    const comm = comments.find((c, i) => {
      if (c.id == req.params.id) {
        comments.splice(i, 1);
        return true;
      }
    });
    if (comm) res.json(comm);
    else next();
  });

module.exports = router;
