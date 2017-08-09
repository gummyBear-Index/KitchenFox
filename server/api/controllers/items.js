import User from '../models/user';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import populate from '../db/populateUser'

import { getUserFromToken, getInventoryFromToken } from '../db/queries';
// import { findfunky } from './users';

const testItems = (user) => {
  user.update({
    'inventory': 'oijoij',
  });
};


export const itemsIndex = (req, res, next) => {
  // populate();
  getInventoryFromToken(req.headers.authorization, user => res.json(user));
  // return res.json(user);
};
