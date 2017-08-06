import expree, { Router } from 'express';
import { userIndex } from './controllers/users';

const router = Router();

router.route('/users.json').get(userIndex);

export default router;
