import { Router } from 'express';
import { getCalls } from '../controllers/calls.controller';
import validateToken from './validate-token';

const router = Router();

// rutas login y register de usuarios
router.post( '/', validateToken, getCalls)


export default router;