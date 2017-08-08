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
  populate();
  User.getUserFromToken(req.headers.authorization, user => res.json(user.inventory));
  // return res.json(user);
};
