import User from '../models/user';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import populate from '../db/populateUser'
// import { findfunky } from './users';

const testItems = (user) => {
  user.update({
    'inventory': 'oijoij',
  });
};


export const itemsIndex = (req, res, next) => {
  User.getUserFromToken(req.headers.authorization, decode => console.log(decode));
  return res.json({ hello: 'hello' });
};
