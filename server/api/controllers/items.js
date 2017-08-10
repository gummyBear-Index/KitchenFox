import passport from 'passport';
// import User from '../models/user';
// import populate from '../db/populateUser';

import { updateItems } from '../db/queries';

export const itemsIndex = (req, res) => {
  passport.authenticate('jwt', (err, user) => {
    if (user) {
      return res
        .status(200)
        .json({ inventory: user.inventory });
    } return res.status(401).json({ error: 'Invalid token' });
  })(req, res);
};

export const itemsPatch = (req, res) => {
  passport.authenticate('jwt', (err, user) => {
    if (!user) {
      return res.status(401).json({ error: 'Invalid token' });
    }
    return updateItems(user._id, req.body.inventory, user.inventory)
      .then(newInv => res.status(200).json(newInv.inventory));
  })(req, res);
};
