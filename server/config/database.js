import { MongoAPIError } from "mongodb";
import mongoose from "mongoose";


/**
 * Lambda function connection to database on demand
 */
let isConnected = false;
export const connectToDatabase = async () => {

    mongoose.set('strictQuery',true);

    if(isConnected) {

        console.log('Mongo is already connected');
        return;
    }

    try {

        const action = await mongoose.connect(process.env.MONGO_URL,{
            dbName:"eshop"
        })

        isConnected = true;
        console.log('MongoDB is connected');
    }

    catch(error) {

        throw new MongoAPIError('Something is wrong');
    }

    
    
   
}