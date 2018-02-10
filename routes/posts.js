const express = require('express');

const Post = require('../db/models/Post');

const router = express.Router();

router.route('/')
  .post((req, res) => {
    const{ title, body, author_id} = req.body;

    return new Post({ title, body, author_id })
      .save()
      .then(post => {
        return res.json(post);
      })
      .catch(err => {
        return res.json({ message: err.meesage, code: err.code });
      })
  })
  .get((req, res) => {
    return Post
      .fetchAll()
      .then(posts => {
        return res.json(posts)
      })
      .catch(err=> {
        res.json({ message: err.message, code: err.code });
      })
  });




module.exports = router;