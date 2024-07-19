import { Router } from 'express';
import helloRoutes from './helloRoutes';
import byeRoutes from './byeRoutes';

const router = Router();

//export all routes to here
router.use('/', helloRoutes);
router.use('/', byeRoutes);

export default router;