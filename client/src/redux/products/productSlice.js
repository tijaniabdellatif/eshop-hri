import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import toast from 'react-hot-toast';
import customFetch from '../../api/axios';
import { getStorage, removeFromStorage, setToLocaStorage } from '../../utils/functions';


const initialState = {

    isLoading:false,
    product:null,
    created:false,
    errors:null
    
};


export const createProduct = createAsyncThunk('product/addproduct',async(product,thunkAPI) => {

      try {

        const response = await customFetch.post('/api/addproduct',product,{
            headers: { 
                'Content-Type': 'application/json',
                "x-auth-token": getStorage('token')
            }
       });

       return response.data;

      }catch(error)
      {

      

        return thunkAPI.rejectWithValue(error.response.data.errors);
      }
})

const productSlice = createSlice({

    name:'product',
    initialState,
    extraReducers:{
        [createProduct.pending] : (state) => {

             state.isLoading = false;
             state.created = false;
            
    },

    [createProduct.fulfilled] : (state,{payload}) => {

           

        const {msg} = payload;
        state.isLoading = false;
        state.created = true;
        console.log('fullfiled : ',payload);
        toast.success(msg,{

            icon:"👌",
        })
       
            
    },

    [createProduct.rejected] : (state,{payload}) => {

      
          state.isLoading = false;
          state.created = false;

          console.log("this is payload",payload);

          payload.forEach(item => {

            toast.error(item.msg,{

                icon:"❌"
            })
      })
           

    },


    }

});

export const {getData} = productSlice.actions;
export default productSlice.reducer;
