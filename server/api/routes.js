import express, { Router } from 'express';
import { userIndex } from './controllers/users';
import passport from 'passport';

const router = Router();

router.get('/protected', (req, res, next) => {
  passport.authenticate('jwt', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }
    if (user) {
      return res
        .status(200)
        .json({ secret: '123' });
    }
  })(req, res, next);
});

router.route('/users.json').get(userIndex);

router.route('/').get((req, res) =>
  res.send('Hello Errbody!'),
);

export default router;
