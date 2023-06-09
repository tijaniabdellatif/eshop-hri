import express from 'express';
import cors from 'cors';
import userRoute from './router/userRoute.js';
import 'dotenv/config.js';
import cookieSession from 'cookie-session';
import cookieParser from 'cookie-parser';



/**
 * Initialisation and middlewares
 */
const app = express();


const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cookieSession({

    signed:false,
    secure:process.env.NODE_ENV !== 'test'
}));

app.use(cookieParser());
app.use(cors());


app.use(userRoute);






/**
 * Routes 
 */

/**
 * Server listening on ports 
 */
app.listen(PORT,() => {
     
    console.log(`Server listening on ${PORT}`);
})