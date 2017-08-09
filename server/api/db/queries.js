import User from '../models/user';
import jwt from 'jsonwebtoken';
import { secret } from '../../config';

export const getUserFromToken = (token, callback) => {
  const body = token.split(' ');
  const parsedToken = body.length > 1 ? body[1] : body[0];
  const decoded = jwt.verify(parsedToken, secret);
  const query = User.where({ _id: decoded.id }).lean();
  query.findOne((err, user) => callback(user));
};
