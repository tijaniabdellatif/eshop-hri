import React,{useEffect, useState} from 'react';
import userProfile from '../assets/images/profile-removebg-preview.png'
import StrengthMeter from '../utils/StrengthMeter';
import {BiShow,BiHide} from 'react-icons/bi';
import { Link,useNavigate } from 'react-router-dom';
import { imageToBase64 } from '../utils/functions';
import {useSelector,useDispatch} from 'react-redux'
import { registerUser } from '../redux/user/userSlice';
import Loader from '../components/Loader';

const SignUp = () => {

  const navigate = useNavigate();

  const {user,isLoading,registred} = useSelector(store => store.user)
  const dispatch = useDispatch();

  const [data,setData] = useState({

     firstname:"",
     lastname:"",
     email:"",
     password:"",
     confirm:"",
     avatar:""

  });


    const [pwdInput, initValue] = useState({
        password:"",
    });

    const [isError,setError]= useState(null);
    const [showPassword,setShowPassword] = useState(false);
 


    const handleShowPassword = () => {

        setShowPassword(prev => !prev)
    }



   const handlePassChange = (e) => {
    let password = e.target.value;

    initValue({
      ...pwdInput,
      password: e.target.value
    });
    setError(null);
    let caps,small,num,specialSymbol

    if(password.length < 4){

       setError(
          'To secure your Password, it should contain at least 4 characters, with one UPPERCASE, lowercase, number and special character @$! % * ? &'
       )

       return;
    }
    else {

      caps = (password.match(/[A-Z]/g) || []).length;
      small = (password.match(/[a-z]/g) || []).length;
      num = (password.match(/[0-9]/g) || []).length;
      specialSymbol = (password.match(/\W/g) || []).length;

      if (caps < 1) {
        setError("Add one UPPERCASE letter");
        return;
      } else if (small < 1) {
        setError("Add one lowercase letter");
        return;
      } else if (num < 1) {
        setError("Add one number");
        return;
      } else if (specialSymbol < 1) {
        setError("Add one special symbol: @$! % * ? &");
        return;
      }

    }


   }
    

    const handleChange = (e) => {
      
       setData((prev) => {
         return  {
            ...prev,
            [e.target.name]:e.target.value
         }
       })
    
    }

    const handleUploadFile = async (e) => {

      
      const data = await imageToBase64(e.target.files[0]);

      setData((prev) => {

          return {

               ...prev,
               avatar:data
          }

      })

      

    }

    const handleSubmit = async (e) => {
          e.preventDefault();
          e.persist();
          dispatch(registerUser({
            firstname:data.firstname, 
            lastname:data.lastname,
             email:data.email,
              password:data.password,
              avatar:data.avatar,
              confirm:data.confirm}))
         
         

            

           
       
  }
    const [isStrong, initRobustPassword] = useState(null);
    const initPwdInput = async (childData) => {
      initRobustPassword(childData);
    };


    useEffect(() => {

        if(registred){

            setTimeout(() => {

                navigate('/login');

            },2000)
        }
    },[registred])

  
  return (

    <section className='p-3 md:p-4' style={{zIndex:100}}>
        <div className='w-full max-w-sm bg-white m-auto flex flex-col justify-center items-center p-4'>
            <h1 className='text-center font-ysabeau font-bold
            text-2xl mb-2
            '>Join Us</h1>

            <div className='w-20 h-full overflow-hidden rounded-full frop-shadow-md shadow-md relative'>
                
                
                <img src={data.avatar ? data.avatar:userProfile} alt="user image" className='w-full h-full object-center' />
                
            <label htmlFor='avatar'>
                <div style={{zIndex:100000}} className='absolute bottom-0 h-1/3 bg-lighten-black w-full
                text-center cursor-pointer '>
                  <p className='text-sm font-semibold font-alegreya text-white p-1 -m-0.5'>Upload</p>
                </div>
                <input
                onChange={handleUploadFile}
                accept='image/*'
                className='contents' type={"file"} id='avatar' name="avatar" />
              </label>
            </div>

            <form onSubmit={handleSubmit} className='font-alegreya w-full py-3 flex flex-col' style={{zIndex:1000}}>
                <label htmlFor='firstname'>First Name<span className='text-red-500 text-xl'> *</span></label>
             
                  <input 
                className='mt-1 mb-2 px-2 py-1 
                rounded-md outline-0 w-full bg-slate-200/100
                focus-within:outline-sky-500 focus-within:ring-1
                ' 
                type={'text'} 
                value={data.firstname}
                name="firstname" 
                id="firstname" 
                placeholder='Your first name' 
                onChange={handleChange}
            
                />
                

                

                <label htmlFor='lastname'>Last Name<span className='text-red-500 text-xl'> *</span></label>
                <input 
                className='mt-1 mb-2 px-2 py-1 
                rounded-md outline-0 w-full bg-slate-200/100
                focus-within:outline-sky-500 focus-within:ring-1
                ' 
                value={data.lastname}
                type={'text'} 
                name="lastname" 
                id="lastname" 
                placeholder='Your Last Name' 
                onChange={handleChange}
                
                />

                <label htmlFor='email'>Email <span className='text-red-500 text-xl'> *</span></label>
                <input 
                value={data.email} 
                className='mt-1 mb-2 px-2 py-1 
                rounded-md outline-0 w-full bg-slate-200/100
                focus-within:outline-sky-500 focus-within:ring-1
                ' 
                type={'email'} 
                name="email" 
                id="email" 
                placeholder='example@example.com' 
                onChange={handleChange}
                
                />

                <label htmlFor='password'>Password <span className='text-red-500 text-xl'> *</span></label>
                {isError !== null && <p className="errors text-xs font-inter text-red-400 font-semibold"> {isError}</p>}
               
                <div className='flex mt-1 mb-2 px-2 py-1  bg-slate-200/100 rounded-md outline-0 focus-within:outline-sky-500 focus-within:ring-1'>

                <input 
                className=' 
                  w-full bg-slate-200/100
                  outline-none
                ' 
                type={showPassword ?'text':"password"} 
                name="password" 
                value={data.password}
                id="password" 
                placeholder='Your password' 
                onChange={(e) => {handlePassChange(e);handleChange(e)}}
                
                />
                <span onClick={handleShowPassword} className='cursor-pointer flex text-xl'>
                   {showPassword ?  <BiShow className='text-lime-500' />:<BiHide className='text-red-500' />}
                    </span>

                </div>
               
                <label htmlFor='confirm'>Password Confirmation <span className='text-red-500 text-xl'> *</span></label> 
                <div className='flex mt-1 mb-2 px-2 py-1  bg-slate-200/100 rounded-md outline-0 focus-within:outline-sky-500 focus-within:ring-1'>
                <input 
                className=' 
                  w-full bg-slate-200/100
                  outline-none
                ' 
                type={showPassword ?'text':"password"} 
                name="confirm" 
                id="confirm" 
                value={data.confirm}
                placeholder='Confirm Your Pssword' 
                onChange={(e) => {handlePassChange(e);handleChange(e)}}
                />
                </div>

            <StrengthMeter password={pwdInput.password} actions={initPwdInput} />
                
                {

                  isLoading ? <div className='flex items-center justify-center mt-3'><Loader /></div>:<button type="submit" className='w-full 
                  max-w-[150px]
                  m-auto transition ease-in-out delay-150
                  font-alegreya  
                  bg-primary-orange 
                  duration-300 rounded-full px-2 py-1 
                  cursor-pointer
                  text-white text-semibold text-xl 
                  mt-4
                  hover:bg-darken-orange 
                  text-medium text-center'>Register</button>
                }
                 
            </form>
            <p style={{zIndex:1000}} className='italic text-medium font-ysabeau'>Already have an account ? <Link className='cursor-pointer text-darken-orange' to="/login">Login</Link></p>
        </div>
    </section>


  )
}

export default SignUp;
