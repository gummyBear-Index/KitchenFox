import User from '../models/user';
import jwt from 'jsonwebtoken';
import { secret } from '../../config';

export const getUserFromToken = (token, callback) => {
  const body = token.split(' ');
  const parsedToken = body.length > 1 ? body[1] : body[0];
  const decoded = jwt.verify(parsedToken, secret);
  const query = User.where({ _id: decoded.id });
  query.findOne((err, user) => callback(user));
};
// 
// export const getInventoryFromUser = (user, callback) => (
//   callback ? callback(user.inventory) : user.inventory
// );
//
// export const getInventoryFromToken = (token, callback) => {
//   const body = token.split(' ');
//   const parsedToken = body.length > 1 ? body[1] : body[0];
//   const decoded = jwt.verify(parsedToken, secret);
//   const query = User.select('inventory').where({ _id: decoded.id });
//   query.findOne((err, user) => callback(user.inventory));
// };
