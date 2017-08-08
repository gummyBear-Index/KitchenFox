import express, { Router } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';

import { userIndex, register, login } from './controllers/users';
import { itemsIndex } from './controllers/items';
import User from './models/user';
import { secret } from '../config';

const router = Router();
// delete unless needed

router.get('/protected', (req, res, next) => {
  passport.authenticate('jwt', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json(String(err));
    }
    if (user) {
      return res
        .status(200)
        .json({ secret: '123' });
    }
  })(req, res, next);
});

router.route('/login').post((req, res, next) => login(req, res, next));

router.route('/register').post((req, res) => register(req, res));

router.route('/items').get((req, res, next) => itemsIndex(req, res, next));

// router.route('/users.json').get(userIndex);

router.route('/').get((req, res) =>
  res.send('Hello Errbody!')
);

export default router;
