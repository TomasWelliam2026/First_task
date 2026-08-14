import express from 'express' ;

import { tokenChecking, IsAdminRequest } from '../../../middleware/auth';
import { dashboard, userDelete } from '../../../controllers';

const router = express() ;

router.post("/users", tokenChecking, IsAdminRequest, dashboard ) ;

router.post("/users/delete", tokenChecking, IsAdminRequest, userDelete ) ;

export default router ;
