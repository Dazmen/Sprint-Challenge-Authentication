/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/
const jwt = require('jsonwebtoken');
const { jwtSECRET } = require('../utils/secrets.js');

const restricted = (req, res, next) => {
  const { authorization } = req.headers;

  if(authorization){
    jwt.verify(authorization, jwtSECRET, (err, dcToken) => {
      if(err){
        res.status(401).json({msg: 'invalid credentials'})
      } else {
        // req.decodedToken = dcToken;
        next();
      }
    })
  } else {
    res.status(400).json({err:'no credentials found'})
  }
};

module.exports = restricted
