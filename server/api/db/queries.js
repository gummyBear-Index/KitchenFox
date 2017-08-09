import jwt from 'jsonwebtoken';

import User from '../models/user';
import { secret } from '../../config';

export const getIdFromToken = (token) => {
  const body = token.split(' ');
  const parsedToken = body.length > 1 ? body[1] : body[0];
  const decoded = jwt.verify(parsedToken, secret);
  return decoded.id;
};

export const getUserFromToken = (token) => {
  const id = getIdFromToken(token);
  const user = User.findById(id).lean().exec();
  // user is a promise. Use by doing below. Error isn't strictly necessary.
  // getUserFromToken(token)
  //  .then(user => coolFunction(user))
  //  .error(error => coolErrorFunction(error));
  return user;
};

export const updateItems = (user, items, callback) => {

};
