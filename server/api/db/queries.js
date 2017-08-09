import jwt from 'jsonwebtoken';
import merge from 'lodash/merge';
import Promise from 'bluebird';

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

export const getItemsByUserId = (id) => {
  const items = User.findById(id).select('inventory').exec();
  return items;
};

export const promiseMerge = (obj1, obj2) => (
  new Promise(() => (merge({}, obj1, obj2)))
);

export const updateItems = (id, update) => {
  const newItems = update;
  const newInventory = getItemsByUserId(id)
    .then(oldItems => (promiseMerge(oldItems, newItems)))
    .then(newInv => User
      .findByIdAndUpdate(id, { $set: { inventory: newInv } }).lean().exec());
  return newInventory;
};
//
//
// Tank.findByIdAndUpdate(id, { $set: { size: 'large' }}, { new: true }, function (err, tank) {
//   if (err) return handleError(err);
//   res.send(tank);
// });
