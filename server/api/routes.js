import express, { Router } from 'express';
import { userIndex } from './controllers/users';

const router = Router();

router.route('/users.json').get(userIndex);

router.route('/').get((req, res) =>
  res.send('Hello Errbody!'),
);

export default router;
