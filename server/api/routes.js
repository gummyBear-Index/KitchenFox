import express, { Router } from 'express';
import { userIndex, register, login } from './controllers/users';
import { createQuery, apiCall } from './utils/suggestRecipe';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import User from './models/user';

const router = Router();
const secret = '7x0jhxt&quot;9(thpX6';
// delete unless needed

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

router.route('/login').post((req, res, next) => login(req, res, next));

router.route('/register').post((req, res) => register(req, res));

router.get('/test', function(req, res){
  apiCall(createQuery());
});

// router.route('/users.json').get(userIndex);

router.route('/').get((req, res) =>
  res.send('Hello Errbody!')
);

export default router;
