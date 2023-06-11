import express from 'express';
import { check, validationResult,body } from 'express-validator';
const router = express.Router();
import  {connectToDatabase}  from '../config/database.js';
import  {AuthVerirify}  from '../middlewares/AuthMiddleware.js';


router.post('/api/addproduct',[




    check('name','Product Name is required')
    .not().isEmpty(),

    check('category','You must choose a category')
    .not().isEmpty(),

    check('price')
    .trim()
    .isDecimal()
    .withMessage('Price must be a number with floating point') ,

    check('description','Product description is required')
    .not().isEmpty()

],AuthVerirify, async (req,res) => {


    const {name,category,image,price,description} = req.body;

    console.log("request body from product : ",req.body);


    try{

        await connectToDatabase();



    }catch(error){

        console.log(error.message);
        res.status(500).json('Server Error');
    }


})

export default router;