import express from 'express';
import { SignIn, SignUp, PasswordReset } from '../../../controllers';
import { tokenChecking, isUserExist, NotUserExist, confirmPassword, IsAdmin } from '../../../middleware/auth';

const router = express() ;

router.post('/signin', IsAdmin, isUserExist, SignIn );

router.post('/signup', NotUserExist, confirmPassword, SignUp );

router.post('/reset', tokenChecking, confirmPassword, PasswordReset) ;

export default router;
