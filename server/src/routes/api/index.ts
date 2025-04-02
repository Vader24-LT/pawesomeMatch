import { Router } from 'express';
import {getAllBreeds,getBreedById,createBreed} from '../../controllers/BreedController.js';

const router = Router();

router.get('/breeds', getAllBreeds);
router.post('/breeds', createBreed);
router.get('/breeds/:id', getBreedById);

export default router;