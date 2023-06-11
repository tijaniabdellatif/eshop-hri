import express from 'express';
import cors from 'cors';
import userRoute from './router/userRoute.js';
import productRoute from './router/productRoute.js';
import 'dotenv/config.js';
import cookieSession from 'cookie-session';
import cookieParser from 'cookie-parser';
const app = express();


const PORT = process.env.PORT || 5001;
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));
app.use(cookieSession({

    signed:false,
    secure:process.env.NODE_ENV !== 'test'
}));

app.use(cookieParser());
app.use(cors());
app.use(userRoute);
app.use(productRoute);







app.listen(PORT,() => {
     
    console.log(`Server listening on ${PORT}`);
})