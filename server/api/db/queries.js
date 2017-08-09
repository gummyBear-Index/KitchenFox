import jwt from 'jsonwebtoken';
import merge from 'lodash/merge';

import populate from '../db/populateUser'
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
  return User.findById(id).lean().exec();
  // Return value is a promise. Use by doing below. Error isn't strictly necessary.
  // getUserFromToken(token)
  //  .then(user => coolFunction(user))
  //  .error(error => coolErrorFunction(error));
};

export const getItemsByUserId = id => (
  User.findById(id).select('inventory').exec()
);

export const setInventory = (id, mergedItems) => (
  User.findByIdAndUpdate(id, { inventory: mergedItems })
    .select('inventory').exec()
);

export const updateItems = (id, update) => {
  const newItems = typeof update === 'string' ? JSON.parse(update) : update;
  return getItemsByUserId(id)
    .then(oldItems => setInventory(id, merge(newItems, oldItems)));
};
