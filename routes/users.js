const express = require('express');

const User = require('../db/models/User');

const router = express.Router();
//below is route style, where route is defined, then subsequent branched below
router.route('/')
  .post((req, res) => {
    // let { name, email, password } = req.body;
    // email = email.toLowerCase();

    // return new User({ name, email, password }) //create instance new class of User, 
    //   .save() //this is promise
    //   .then(user => {
    //     res.json(user);
    //   })
    //   .catch(err => {
    //     res.json({ message: err.message });
    //   });

  })
  .get((req, res) => {
    return User // asking for instance, vs instantiating instance above at post
      .fetchAll()
      .then(users => {
        return res.json(users);
      })
      .catch(err => {
        return res.json({
          message: err.message
        });
      })
  })

router.route('/:id')
  .get((req, res) => {
    return new User() //jesse things this is cleaner than below comments
      .where({ id: req.params.id })
      .fetch({ withRelated: ['posts'] })
      .then(user => {
        if (!user) {
          throw new Error('User not found!');
        }
        return res.json(user);
      })
    // return new User ({ id: req.params.id })
    //     .fetch() //promise! fyi fetchAll returns array
    //     .then(user => {
    //       if (!user) {
    //         throw new Error('User not found!');
    //       }
    //       return res.json(user);
    .catch(err => {
      return res.json({
        message: err.message
      })
    })
  })




module.exports = router;