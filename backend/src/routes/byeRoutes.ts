import { Router } from 'express';
import { byeController } from '../controllers/byeControllers';

const router = Router();

router.get('/bye', byeController);

export default router;
