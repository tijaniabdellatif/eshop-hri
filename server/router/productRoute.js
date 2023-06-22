import express from 'express';
import { check, validationResult,body } from 'express-validator';
const router = express.Router();
import  {connectToDatabase}  from '../config/database.js';
import  {AuthVerirify}  from '../middlewares/AuthMiddleware.js';
import { Product } from '../models/productModel.js';
import moment from 'moment';

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



    try{

       
        const errors = validationResult(req);
        if(!errors.isEmpty()){

            return res.status(400).json({errors:errors.array()})
   
          }

          await connectToDatabase();
          const product = await Product.create({

                name:name,
                category:category,
                image:image,
                price:price,
                description:description
         })

         return res.status(201).json({
            product:product,
            msg:'Product created successfully'
         })




    }catch(error){

        console.log(error.message);
        res.status(500).json('Server Error');
    }


})

router.get('/api/products',async (req,res) => {

    try {

        const products = Product.find({}).toArray();

        res.status(200).json({

              product:products,
              msg:'Success'
        })


    }catch(error){


         console.error(error);
         res.status(500).json({

              error:error
         })
    }
      
});


router.get('/api/featured',async (req,res) => {

     
    try {

        await connectToDatabase();
        const product = await Product.find().sort({_id:-1}).limit(4);

        if(product){

             return res.status(200).json({
                 featured:product,
                 msg:'sucess'
             })
        }
       
        return res.status(400).json({
            errors:['Not found'],
            msg:'Not found'
        })

         

    }catch(error){

        console.log(error);
        return res.status(500).json({
           errors:['Server Error'],
           
        })
    }
})


router.get('/api/products/epicerie',async (req,res) => {

    try {

        await connectToDatabase();
        const product = await Product.find({

            price: { $gte: 22 }
        });

        if(product){

             return res.status(200).json({
                 featured:product,
                 msg:'sucess'
             })
        }
       
        return res.status(400).json({
            errors:['Not found'],
            msg:'Not found'
        })

         

    }catch(error){

         
        return res.status(500).json({
           errors:['Server Error'],
           
        })
    }

})



router.get('/api/featuredproduct',async (req,res) => {

    try {

        await connectToDatabase();
        const product = await Product.find({});

        if(product){

             return res.status(200).json({
                 featured:product,
                 msg:'sucess'
             })
        }
       
        return res.status(400).json({
            errors:['Not found'],
            msg:'Not found'
        })

         

    }catch(error){

        console.log(error);
        return res.status(500).json({
           errors:['Server Error'],
           
        })
    }
})

export default router;