import jwt from 'jsonwebtoken';


export const AuthVerirify =  (req,res,next) => {


    const token = req.header('x-auth-token');

    //check if no token 

    if(!token) {

         return res.status(401).json({

              message:'No token provided, Authorization denied'
         })
    }


     try {

        const decoded = jwt.verify(token,'secret');
        req.user = decoded.user;
        next();


     }catch(error){

        res.status(401).json({  message:'token is not valid'});

     }  


}