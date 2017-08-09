import passport from 'passport';
import jwt from 'jsonwebtoken';
import passportLocalMongoose from 'passport-local-mongoose';

import mongoose from '../db/database';


const Schema = mongoose.Schema;


const User = new Schema({
  inventory: Schema.Types.Mixed,
  first_name: String,
  last_name: String,
});

User.plugin(passportLocalMongoose, {
  usernameUnique: true,
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
