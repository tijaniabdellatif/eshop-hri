import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import toast from 'react-hot-toast';
import customFetch from '../../api/axios';
import { getStorage, removeFromStorage, setToLocaStorage } from '../../utils/functions';

const initialState = {

    isLoading:false,
    user:getStorage('user'),
    token:getStorage('token'),
    registred:false
};



export const registerUser = createAsyncThunk('user/registerUser', 
async(user,thunkAPI) => {

    try {

        const response = await customFetch.post('/api/register',user,{
             headers: { 'Content-Type': 'application/json'}
        });

        return response.data;


    }catch(error){

          return thunkAPI.rejectWithValue(error.response.data.errors);
     }
})


export const loginUser = createAsyncThunk('user/loginUser', 
async(user,thunkAPI) => {

    try {

        const response = await customFetch.post('/api/login',user,{
             headers: { 'Content-Type': 'application/json'}
        });

        return response.data;


    }catch(error){

          return thunkAPI.rejectWithValue(error.response.data.errors);
     }
   
})



const userSlice = createSlice({

    name:'user',
    initialState,
    reducers:{

          logoutUser : (state) =>{

            state.user = null;
            state.token = null;
            state.registred = false;
            removeFromStorage('user');
            removeFromStorage('token');
          }

    },
    extraReducers:{

        [registerUser.pending] : (state) => {

              state.isLoading = true;
              state.registerUser = false;

        },

        [registerUser.fulfilled] : (state,{payload}) => {

            const {msg} = payload;
            state.isLoading = false;
            state.registred = true;
            toast.success(`${msg}`,{

                icon:"👌",
            })

           

        },

        [registerUser.rejected] : (state,{payload}) => {

                state.isLoading = false;
                state.registred = false;

                payload.forEach(item => {

                      toast.error(item.msg,{

                          icon:"❌"
                      })
                })


        },

        [loginUser.pending] : (state) => {


             state.isLoading = true;

           
        },

      [loginUser.fulfilled] : (state,{payload}) => {

        
        const {user,token,message} = payload;
        console.log(payload);
        state.isLoading = false;
        state.user = user;
        state.token = token;

        setToLocaStorage('user',user);
        setToLocaStorage('token',token);
        toast.success(`${user.firstname} ${user.lastname} ${message}`,{

            icon:"👌",
        })

         

      },

      [loginUser.rejected] : (state,{payload}) => {
        state.isLoading = false;

        payload.forEach(item => {

              toast.error(item.msg,{

                  icon:"❌"
              })
        })
             
      }
    }
})


export const {logoutUser} = userSlice.actions;
export default userSlice.reducer;