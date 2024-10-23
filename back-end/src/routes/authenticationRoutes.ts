import { Router } from 'express';
import { registerUser, loginUser } from '../controllers/authenticationCon';



const router = Router();



router.post('/register', registerUser);     //  /authentication/register
router.post('/login', loginUser);     //  /authentication/register

export default router;