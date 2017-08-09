import User from '../models/user';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import populate from '../db/populateUser'

import { getUserFromToken } from '../db/queries';

export const itemsIndex = (req, res, next) => {
  getUserFromToken(req.headers.authorization, items => res.json(items));
};

// export const itemsPatch = (req, res, next) => (
//
// )
