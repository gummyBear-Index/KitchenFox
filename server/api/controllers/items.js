import User from '../models/user';
import passport from 'passport';
import jwt from 'jsonwebtoken';
// import { findfunky } from './users';

const testItems = (user) => {
  console.log(user);
  user.update({
    inventory: 'oijoij',
  })
}


export const itemsIndex = (req, res, next) => {
  passport.authenticate('jwt', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json(String(err));
    }
    if (user) {
      testItems(user);
      return res
        .status(200)
        .json({ secret: '123' });
    }
  })(req, res, next);
};
