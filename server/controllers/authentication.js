const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

tokenForUser = user => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
};

exports.signup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: email }, (err, existingUser) => {
    if (!email || !password) {
      return res
        .status(422)
        .send({ error: 'You must provide email and password' });
    }

    if (err) {
      return next(err);
    }

    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use' });
    }

    const user = new User({
      email: email,
      password: password
    });

    user.save(err => {
      if (err) {
        return next(err);
      }

      res.json({ token: tokenForUser(user) });
    });
  });
};
