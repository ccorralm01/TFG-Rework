import { Router } from 'express';
import { loginUser, registerUser } from '../controllers/login.controller';

const router = Router();

// rutas login y register de usuarios
router.post( '/register', registerUser)
router.post( '/login', loginUser)


export default router;