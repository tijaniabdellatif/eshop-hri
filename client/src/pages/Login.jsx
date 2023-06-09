import React,{useEffect, useState} from 'react';
import userProfile from '../assets/images/profile-removebg-preview.png'
import {BiShow,BiHide} from 'react-icons/bi';
import { Link,useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import {useSelector,useDispatch} from 'react-redux'
import { loginUser } from '../redux/user/userSlice';


const Login = () => {

  
  const {user,isLoading,token} = useSelector(store => store.user)
  const dispatch = useDispatch();
  const [showPassword,setShowPassword] = useState(false);

  const navigate = useNavigate();
  


  const handleShowPassword = () => {

      setShowPassword(prev => !prev)
  }

  const [data,setData] = useState({

    email:"",
    password:"",   

 });

 const handleChange = (e) => {
      
  setData((prev) => {
    return  {
       ...prev,
       [e.target.name]:e.target.value
    }
  })

}

const handleSubmit = async (e) => {
     e.preventDefault();
     e.persist();

     dispatch(loginUser({
     
        email:data.email,
        password:data.password,
      
      }));
   
     
}



useEffect(() => {
  if(token && user){
     setTimeout(() => {
        navigate('/');
     },2000) 
  }

},[token])

  return (
    <section className='p-3 md:p-4' style={{zIndex:100}}>
    <div className='w-full max-w-sm bg-white m-auto flex flex-col justify-center items-center p-4'>
        <h1 className='text-center font-ysabeau font-bold
        text-2xl mb-2
        '>Sign In To your Shop</h1>

        <div className='w-20 overflow-hidden rounded-full frop-shadow-md shadow-md'>
            <img src={userProfile} alt="user image" className='w-full' />
        </div>

        <form onSubmit={handleSubmit} className='font-alegreya w-full py-3 flex flex-col' style={{zIndex:1000}}>
          

            
            <label htmlFor='email'>Email <span className='text-red-500 text-xl'> *</span></label>
            <input 
            
            className='mt-1 mb-2 px-2 py-1 
            rounded-md outline-0 w-full bg-slate-200/100
            focus-within:outline-sky-500 focus-within:ring-1
            ' 
            value={data.email}
            onChange={handleChange}
            type={'email'} 
            name="email" 
            id="email" 
            placeholder='example@example.com' 
         
            
            />

            <label htmlFor='password'>Password <span className='text-red-500 text-xl'> *</span></label>
            
  
            <div className='flex mt-1 mb-2 px-2 py-1  bg-slate-200/100 rounded-md outline-0 focus-within:outline-sky-500 focus-within:ring-1'>

            <input 
            className=' 
              w-full bg-slate-200/100
              outline-none
            ' 
            value={data.password}
            onChange={handleChange}
            type={showPassword ?'text':"password"} 
            name="password" 
            id="password" 
            placeholder='Your password' 
        
            
            />
            <span onClick={handleShowPassword} className='cursor-pointer flex text-xl'>
               {showPassword ?  <BiShow className='text-lime-500' />:<BiHide className='text-red-500' />}
                </span>

            </div>
           
           {

              isLoading ? <div className='flex items-center justify-center mt-3'><Loader /></div> :  <button type="submit" className='w-full 
              max-w-[150px]
              m-auto transition ease-in-out delay-150
              font-alegreya  
              bg-primary-orange 
              duration-300 rounded-full px-2 py-1 
              cursor-pointer
              text-white text-semibold text-xl 
              mt-4
              hover:bg-darken-orange 
              text-medium text-center'>Login</button>
           }
            
            
        </form>
        <p style={{zIndex:1000}} className='italic text-medium font-ysabeau'>Already have an account ? <Link className='cursor-pointer text-darken-orange' to="/signup">Sign Up</Link></p>
    </div>
</section>
  )
}

export default Login;
