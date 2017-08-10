import jwt from 'jsonwebtoken';

import populate from '../db/populateUser';
import User from '../models/user';
import { secret } from '../../config';

export const getIdFromToken = (token = '') => {
  try {
    const body = token.split(' ');
    const parsedToken = body.length > 1 ? body[1] : body[0];
    const decoded = jwt.verify(parsedToken, secret);
    return decoded.id;
  } catch (err) {
    return err;
  }
};

export const getDocFromToken = token => (
  User.findById(getIdFromToken(token)).lean().exec()
  // Return value is a promise. Use by doing below. Error isn't strictly necessary.
  // getDocFromToken(token)
  //  .then(user => coolFunction(user))
  //  .error(error => coolErrorFunction(error));
);

export const getUserFromToken = (token) => {
  return User.findById(id).select('username first_name last_name').lean().exec();
};

export const getItemsByUserId = id => (
  User.findById(id).select('inventory').exec()
);

export const setInventory = (id, mergedItems) => (
  User.findByIdAndUpdate(id, { inventory: mergedItems })
  .select('inventory').lean().exec()
);

export const updateItems = (id, update) => {
  const newItems = typeof update === 'string' ? JSON.parse(update) : update;
  return getItemsByUserId(id)
    .then(oldItems => (
      setInventory(id, Object.assign(oldItems.inventory, newItems))
    ));
};
