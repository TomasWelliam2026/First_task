import express from 'express' ;

import api from './api' ;
import admin from './admin' ;

const router = express() ;

router.use('/api', api ) ;
router.use('/admin', admin ) ;

export default router;