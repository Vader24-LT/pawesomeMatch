import { Router } from 'express';
import BreedController from '../../controllers/BreedController';

const router = Router();

router.get('/breeds', BreedController.getAllBreeds);

export default router;