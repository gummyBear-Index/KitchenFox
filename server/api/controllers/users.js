import passport from 'passport';
import jwt from 'jsonwebtoken';

import { secret } from '../../config';
import User from '../models/user';

export const getToken = (user) => {
  const token = jwt.sign({ id: user._id, username: user.username }, secret);
  return token;
};

export const showUser = (req, res, next) => {
  passport.authenticate('jwt', (err, user) => {
    if (user) {
      return res
        .status(200)
        .json({
          username: user.username,
          first_name: user.first_name,
          last_name: user.last_name,
        });
    } return res.status(401).json({ error: 'Invalid token' });
  })(req, res, next);
};

export const register = (req, res, next) => {
  User.register(new User({
    username: req.body.username,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    inventory: {},
  }), req.body.password, (err, user) => {
    if (err) {
      return res.status(401).json({ error: 'Email address in use' });
    }
    return res
      .status(200)
      .json({
        first_name: user.first_name,
        last_name: user.last_name,
        token: getToken(user),
        username: user.username,
      });
  });
};


export const login = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    if (user) {
      return res
        .status(200)
        .json({
          first_name: user.first_name,
          last_name: user.last_name,
          token:getToken(user),
          username: user.username
        });
    }
  })(req, res, next);
};
