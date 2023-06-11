import mongoose from "mongoose";

const productSchema = mongoose.Schema({


    name:{
         
        type:String,
        required:true
    },

    category:{

          type:String,
          required:true
    },

    image:{

        type:String
    },

    price:{

        type: mongoose.Types.Decimal128,
        required: true,
        default: mongoose.Types.Decimal128.fromString('0.00')
    },

    description:{

          type:String
    }

},{timestamps:true});

export const Product = mongoose.model('Product',productSchema);

