import express, { Router } from 'express';
import { userIndex, register } from './controllers/users';
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

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    if (user) {
      const token = jwt.sign({ id: user._id, username: user.username }, secret)
      return res
        .status(200)
        .json({ token });
    }
  })(req, res, next);
});


router.route('/register').post((req, res) => register(req, res));

// router.route('/users.json').get(userIndex);

router.route('/').get((req, res) =>
  res.send('Hello Errbody!')
);

export default router;
