import express from 'express';
const router = express.Router();
import  {AuthVerirify}  from '../middlewares/AuthMiddleware.js';

router.get('/',[



],AuthVerirify,async (req,res,next) => {



    res.send('authorized');
    
   


})



export default router;