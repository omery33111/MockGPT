import { Router } from 'express';
import { registerUser, loginUser } from '../controllers/authenticationCon';



const router = Router();



router.post('/register', registerUser);     //  /user/register
router.post('/login', loginUser);     //  /user/register

export default router;