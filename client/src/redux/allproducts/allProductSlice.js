import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../api/axios";

const initialeFilterState = {

    search:"",
    searchStatus:'all',
    searchType:'all',
    sort:"latest",
    sortOptions:['latest','oldest','a-z','z-a']
}

const initialState = {

      isLoading:false,
      products:[],
      featured:[],
      allproducts:[],
      totalProducts:0,
      numOfPages : 1,
      page:1,
      stats:{},
      ...initialeFilterState

}

export const featuredProducts = createAsyncThunk('all/products',async (_,thunkAPI) => {

    try {

      const response = await customFetch.get('/api/featured',{
           headers:{

               'Content-Type':"application/json"
           }
      })

         

        return response.data;
    }catch(error){

        return thunkAPI.rejectWithValue('There was an error');

    }
     
});

export const categoryProduct = createAsyncThunk('all/categories',async(_,thunkAPI) => {

      try{

        const response = await customFetch.get('/api/products/epicerie',{

             headers:{

                'Content-Type':'application/json'
             }
        })

        return response.data;


      }catch(error){


        return thunkAPI.rejectWithValue(error.response.data.errors);

      }
    
})

export const getAllProducts = createAsyncThunk('all/getproducts',async(_,thunkAPI) => {

   try {

      const response = await customFetch.get('/api/featuredproduct',{

          headers:{

            "Content-Type":'application/json'
          }
      })

      return response.data;

   }catch(error){

     return thunkAPI.rejectWithValue(error.response.data.errors);

   }
})


const allProductSlice = createSlice({

    name:"allproduct",
    initialState,
    extraReducers:{

          [getAllProducts.pending] : (state) => {
            state.isLoading = true;

          },
          [getAllProducts.fulfilled] : (state,{payload}) => {
            state.isLoading = false;
            state.allproducts = payload.featured;

          },
          [getAllProducts.rejected] : (state,{payload}) => {
            state.isLoading = false;
            console.log(payload)

          },

           [featuredProducts.pending]: (state) => {

              state.isLoading = true;

           },

           [featuredProducts.fulfilled] : (state,{payload}) => {

                 state.isLoading = false;
                 state.products = payload.featured;
           },

           [featuredProducts.rejected] : (state,{payload}) => {

                state.isLoading = false;
                console.log(payload)

           },

           [categoryProduct.pending] :(state) => {

              state.isLoading = true;
           },

           [categoryProduct.fulfilled]:(state,{payload}) => {
           
            state.isLoading = false;
            state.featured = payload.featured;

           },

           [categoryProduct.rejected]:(state,{payload}) => {

            state.isLoading = false;
            console.log(payload);

           }
    }
});



export default allProductSlice.reducer;