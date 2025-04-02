import { Router } from 'express';
import {BreedController} from '../../controllers/BreedController.js';

const router = Router();

router.get('/breeds', BreedController.getAllBreeds);

export default router;