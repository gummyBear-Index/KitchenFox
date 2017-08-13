import express, { Router } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import http from 'http';
const router = Router();

import { userIndex, register, login, showUser } from './controllers/users';
import { itemsIndex, itemsPatch, test, populateDb } from './controllers/items';
import { createQuery, apiCall } from './utils/suggestRecipe';
import { upcLookUp } from './utils/upcLogic';
import { getItemsByUserId } from './db/queries';
import User from './models/user';
import { secret } from '../config';

router.get('/protected', (req, res, next) => {
  passport.authenticate('jwt', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    if (user) {
      return res
        .status(200)
        .json({ secret: '123' });
    }
  })(req, res, next);
});

// app.post('/profile', passport.authenticate('jwt', { session: false }),
//     function(req, res) {
//         res.send(req.user.profile);
//     }
// );

// router.get('/user', passport.authenticate('jwt'), (req, res) => showUser(req, res));
router.route('/user').get((req, res, next) => showUser(req, res, next));

// router.route('/user').get((req, res) => showUser(req, res));

router.route('/login').post((req, res, next) => login(req, res, next));

router.route('/register').post((req, res) => register(req, res));

router.get('/upcLookUp', (req, res, next) => {
  passport.authenticate('jwt', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    if (user) {
      upcLookUp(req.headers.upc_code).then((iteminfo) => {
        return res
        .status(200)
        .json(iteminfo);
      });
    }
  })(req, res, next);
});

router.route('/test').get((req, res, next) => test(req, res, next));

router.get('/recipes', (req, res, next) => {
  passport.authenticate('jwt', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    if (user) {
      getItemsByUserId(user._id).then((result) => {
        apiCall(createQuery(result)).then((recipeinfo) => {
          return res
          .status(200)
          .json(recipeinfo);
        });
      });
    }
  })(req, res, next);
});

router.route('/populate').get((req, res, next) => populateDb(req, res, next));

router.route('/items').get((req, res, next) => itemsIndex(req, res, next));

router.route('/items').patch((req, res, next) => itemsPatch(req, res, next));

// router.route('/users.json').get(userIndex);

router.route('/').get((req, res) => res.send('Hello Errbody!'));

export default router;
