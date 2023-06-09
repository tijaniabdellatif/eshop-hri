import mongoose from "mongoose";
import {PasswordHash}  from "../utils/PasswordHash.js";

const userSchema = new mongoose.Schema({

     firstname:{
        type:String,
        required:true
      
     },

     lastname:{

        type:String,
        required:true
        
     },
     email : {

        type:String,
        unique:true
        
   },

   password:{

       type:String,
       required:true,
       
      
   },

   confirm:{
    type:String,
    required:true
   

   },
   avatar:{

     type:String,
     
   }


},{

    timestamps:true,
    toJSON:{

        transform(doc,ret){

            ret.id = ret._id;
            delete ret._id;
            delete ret.password;
            delete ret.__v;
            delete ret.confirm;
            delete ret.createdAt;
            delete ret.updatedAt;

        }
    }
})

userSchema.pre('save',async function(done){

    if(this.isModified('password')){

          const hashed = await PasswordHash.toHash(this.get('password'));
          this.set('password',hashed);
    }
    if(this.isModified('confirm')){

        const hashed = await PasswordHash.toHash(this.get('confirm'));
        this.set('confirm',hashed);
    }

    if(this.isModified('firstname')){

        const firstname = this.get('firstname').toLowerCase();
        this.set('firstname',firstname);
    }

    if(this.isModified('lastname')){

        const lastname = this.get('lastname').toLowerCase();
        this.set('lastname',lastname);
    }

    done();
})

export const User = mongoose.model('User',userSchema);



