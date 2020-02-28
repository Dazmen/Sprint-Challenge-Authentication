const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('./authModel.js');
const { jwtSECRET } = require('../utils/secrets.js');

router.post('/register', validateBody, (req, res) => {
  const user = req.body;
  user.password = bcrypt.hashSync(user.password, 8);

  Users.register(user)
    .then(newUser => {
      res.status(201).json({
        msg: 'New account successfully made!',
        newUser,
      })
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({err:'Server could not register this user'})
    })
});

router.post('/login', validateBody, (req, res) => {
  const user = req.body;

  Users.findBy({username: user.username})
    .first()
    .then(login => {
      if(login && bcrypt.compareSync(user.password, login.password)){
        const token = generateToken(login);
        res.status(200).json({
          msg:'Login Success!',
          token,
        })
      } else {
        res.status(400).json({err: 'incorrect username/password'})
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({error:'Server could not login this user'})
  })
});

module.exports = router;

function validateBody(req, res, next){
  const user = req.body;
  if(user.username && user.password){
    next();
  } else {
    res.status(400).json({err:'please provide a valid username/password'})
  }
};
function generateToken(user){
  const payload = {
    username: user.username
  };
  const options = {
    expiresIn: '2h'
  };
  return jwt.sign(payload, jwtSECRET, options)
};