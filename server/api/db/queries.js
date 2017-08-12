import jwt from 'jsonwebtoken';
import Promise from 'bluebird';

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

// export const getIdFromToken = (token = '') => {
//   const body = token.split(' ');
//   const parsedToken = body.length > 1 ? body[1] : body[0];
// }


export const getDocFromToken = token => (
  User.findById(getIdFromToken(token)).lean().exec()
  // Return value is a promise. Use by doing below. Error isn't strictly necessary.
  // getDocFromToken(token)
  //  .then(user => coolFunction(user))
  //  .error(error => coolErrorFunction(error));
);

export const removeZeroQuanityItems = () => (
  User.where('inventory').exists().lean().then(userArr => {
    userArr.forEach(user => {
      let inventory = user.inventory;
    })
  })
  // console.log(thing);
  // User.find().execAsycn()
  // .lean().distinct('_id')
  // (err, users) => (console.log(users))
);

export const getUserFromToken = (token) => {
  return User.findById(id).select('username first_name last_name').lean().exec();
};

export const getItemsByUserId = id => (
  User.findById(id).select('inventory').lean().exec()
);

export const setInventory = (id, mergedItems) => (
  User.findByIdAndUpdate(id, { inventory: mergedItems })
  .select('inventory').lean().exec()
);

export const updateItems = (id, update, original) => {
  const newItems = typeof update === 'string' ? JSON.parse(update) : update;
  const oldItems = typeof original === 'string' ? JSON.parse(original) : original;
  const mergedItems = Object.assign(oldItems, newItems);
  const updateDb = User.findByIdAndUpdate(id, { inventory: mergedItems })
    .select('inventory').lean().exec();
  return updateDb.then(() => getItemsByUserId(id));
};
