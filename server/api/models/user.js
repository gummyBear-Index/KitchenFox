import passport from 'passport';
import jwt from 'jsonwebtoken';
import passportLocalMongoose from 'passport-local-mongoose';

import mongoose from '../db/database';
import { secret } from '../../config';


const Schema = mongoose.Schema;


const User = new Schema({
  inventory: Schema.Types.Mixed,
  first_name: String,
  last_name: String,
});

User.plugin(passportLocalMongoose, {
  usernameUnique: true,
});

User.static('getUserFromToken', (token, callback) => {
  const body = token.split(' ');
  const parsedToken = body.length > 1 ? body[1] : body[0]
  const decoded = jwt.verify(parsedToken, secret);
  callback(decoded);
});

// router.get('/protected', (req, res, next) => {
//   passport.authenticate('jwt', (err, user, info) => {
//     if (err) {
//       return next(err);
//     }
//     if (!user) {
//       return res.status(401).json(String(err));
//     }
//     if (user) {
//       return res
//         .status(200)
//         .json({ secret: '123' });
//     }
//   })(req, res, next);
// });

export default mongoose.model('User', User);
