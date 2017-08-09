import passport from 'passport';
import jwt from 'jsonwebtoken';

import { secret } from '../../config';
import User from '../models/user';

// lean gives json instead of mongo docobject
export const getToken = (user) => {
  const token = jwt.sign({ id: user._id, username: user.username }, secret);
  return { token };
};

export const userIndex = (req, res, next) => (
  User.find().lean().exec((err, users) => {
    return (
      res.json({ users })
    );
  })
);

export const register = (req, res, next) => {
  User.register(new User({
    username: req.body.username,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
  }), req.body.password, (err, user) => {
    if (err) {
      return res.status(401).json({ error: 'Email address in use' });
    }
    return res
      .status(200)
      .json(getToken(user));
  });
};

// export const login = (req, res, next) => {
//   passport.authenticate('local', (err, user, info) => {
//     if (err) {
//       return next(err);
//     }
//     if (!user) {
//       return res.status(401).json({ error: 'Invalid credentials' });
//     }
//     if (user) {
//       const token = jwt.sign({ id: user._id, username: user.username }, secret);
//       return res
//         .status(200)
//         .json({ token });
//     }
//   })(req, res, next);
// };

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
        .json(getToken(user));
    }
  })(req, res, next);
};
