// import User from '../models/user';
// import populate from '../db/populateUser'

import { getUserFromToken, updateItems, getIdFromToken } from '../db/queries';

export const itemsIndex = (req, res) => (
  getUserFromToken(req.headers.authorization)
    .then(user => res.status(200).json(user.inventory))
    .error(error => res.send(error))
);


// TODO: Something isn't returning... TMA (too much asynchronous)
export const itemsPatch = (req, res) => (
  updateItems(getIdFromToken(req.headers.authorization), req.body.inventory)
    .then(inventory => res.json(inventory))
);
