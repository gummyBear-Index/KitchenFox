import express, { Router } from 'express';
import { userIndex, register, login } from './controllers/users';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import User from './models/user';

const router = Router();

router.get('/recipe', (req, res, next) => {
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
