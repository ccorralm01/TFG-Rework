import { Router } from 'express';
import { getCalls } from '../controllers/calls.controller';

const router = Router();

// rutas login y register de usuarios
router.post( '/', getCalls)


export default router;