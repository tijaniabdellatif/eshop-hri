import express from 'express';
import { check, validationResult,body } from 'express-validator';
const router = express.Router();
import  {connectToDatabase}  from '../config/database.js';
import {User}  from '../models/UserModel.js';
import jsonwebtoken from 'jsonwebtoken';
import gravatar from 'gravatar';
import { PasswordHash } from '../utils/PasswordHash.js';
import  {AuthVerirify}  from '../middlewares/AuthMiddleware.js';

router.post('/api/register',[

     check('firstname','First Name is required')
     .not().isEmpty(),

     check('lastname','Lastname Name is required')
     .not().isEmpty(),

     check('email','Please include a valid email')
     .isEmail(),

     check('password','Please enter your password')
     .trim()
     .not()
     .isEmpty(),

     check('confirm','Please enter your confirmation password')
     .trim()
     .not()
     .isEmpty()



],async (req,res,next) => {


    
   

    const {avatar,firstname,lastname,email,password,confirm}=req.body;
    
    try{

        
        const errors = validationResult(req);
        if(!errors.isEmpty()){

         return res.status(400).json({errors:errors.array()})

       }

       if(password !== confirm){

             return res.status(409).json({

                status:409,
                errors:[{msg:'Password and confirm password are not the same try again 🔥 '}]

             })
       }

       await connectToDatabase();

       const userExists = await User.findOne({
        email:email
       })

       const userAvatar = gravatar.url(email,{
          s:'200',
          r:'pg',
          d:'mm'
       })

       if(!userExists){

          const user = await User.create({

             firstname:firstname,
             lastname:lastname,
             email:email,
             password:password,
             confirm:confirm,
             avatar:avatar || userAvatar

          })

          return res.status(201).json({
            user:user,
            msg:' Thank you for being a member, you account is created successfully'
         })


       }

       else {

        return res.status(400).json({

         status:400,
         errors:[{msg:' User Already exists  choose another email 🔥'}]
        });
       }


    }catch(error){


        console.log(error);
    }

})

router.post('/api/login',[


   body('email')
   .isEmail()
   .withMessage('Please enter your email address'),

   body('password')
   .trim()
   .notEmpty()
   .withMessage('Please enter your password')


],async (req,res,next) => {


   const {email,password} = req.body;

   try  {

      await connectToDatabase();
      const signedUser = await User.findOne({email})

      if(!signedUser){
   
   
         return res.status(403).json({
   
            status:403,
            errors:[{msg:'Invalid Credentials 🔥 '}]
         })
   
      }
   
      const passwordMatch = await PasswordHash.compare(signedUser.password,password);
   
      if(!passwordMatch){
   
         return res.status(403).json({
   
            status:403,
            errors:[{msg:'Incorrect Password 🔥 '}]
        })
      }
   
   
      const jwt = jsonwebtoken.sign({
             
         id:signedUser.id,
         email:signedUser.email,
        
      },'secret',{expiresIn:'360000s'},async (err,token) => {
   
           if(err) throw err

        
           return res.status(201).cookie('token',token,{maxAge:60*60*100000})
           .json({
            token:token,
            user:signedUser,
            message:`${signedUser.firstname} ${signedUser.lastname} connected successfully`
         })

          
      });

    

   

   }catch(error){

               console.log(error.message);
               res.status(500).json('Server Error');
   }

  
 
});



router.post('/api/logout',AuthVerirify,(req,res) => {

try {
   
   res.clearCookie('token');
   res.status(200).json({
      message:`Logged out successfully`
   })

}catch(error){

     return res.status(500).json({
       errors:[{msg:error.message}]
     })
}
   


});



export default router;