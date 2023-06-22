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

},{
    
    timestamps:true,
    transform(doc,ret){

        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
    
    }


});

productSchema.pre('save',function(done){

   

  if(this.isModified('price')){

      const price = (Math.floor(this.get('price') * 100))/100;
      this.set('price',price);
  }

  if(this.isModified('name')){

    const name = this.get('name').toLowerCase();
    this.set('price',name);
}
done();
})

export const Product = mongoose.model('Product',productSchema);

