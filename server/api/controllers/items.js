// import User from '../models/user';
import populate from '../db/populateUser'

import { getDocFromToken, updateItems, getIdFromToken, getItemsByUserId } from '../db/queries';

export const itemsIndex = (req, res) => (
  getDocFromToken(req.headers.authorization)
    .then(user => res.status(200).json(user.inventory))
    .error(error => res.send(error))
);

export const itemsPatch = (req, res) => (
  updateItems(getIdFromToken(req.headers.authorization), req.body.inventory)
    .then(doc => getItemsByUserId(doc._id))
    .then(items => res.status(200).json(items.inventory))
  // populate();
);
