import React,{useState,useRef,useEffect} from 'react';
import myLogo from '../assets/logo/png/logo-no-background.png';
import { Link,useNavigate } from 'react-router-dom';
import {HiOutlineUserCircle} from 'react-icons/hi';
import {BsCartFill} from 'react-icons/bs';
import {AiOutlineLogout,AiOutlineLogin} from 'react-icons/ai';
import {BsBookmarkStar} from 'react-icons/bs';
import { useSelector,useDispatch } from 'react-redux';
import { logOutUser } from '../redux/user/userSlice';
import { OverlayLoader } from './Overlay';




const Header = () => {

    const [showDropdown,setShopDropdown] = useState(false);
    const menuRef = useRef(null);
    const navigate = useNavigate();

    const {user,loggedOut} = useSelector((store) => store.user);
    const dispatch = useDispatch();

    const handledUser = user ? true:false;

    const closeOpenMenus = (e)=>{
      if(menuRef.current && showDropdown && !menuRef.current.contains(e.target)){
        setShopDropdown(false);
      }
    }
   
      document.addEventListener('mousedown',closeOpenMenus)


      useEffect(() => {

        if(loggedOut){


            setTimeout(() => {
                navigate('/login');
            },1500)
            
        }


      },[loggedOut])


    

  return (

    <>

    <OverlayLoader speed={600} active={loggedOut ? true:false} />
    
    <header className='bg-white fixed shadow-md w-full h-20 px-2 py-2 md:px-4 md:py-4' style={{zIndex:100}}>
       {/* Desktop */}
        <div className='flex items-center justify-between h-full'>
          <Link to='/'>
             <div className='h-12'>
                <img src={myLogo} alt="logo" className='h-full' />
             </div>
          </Link>


          <div className="flex items-center gap-4 md:gap-7">
              <nav className='font-alegreya flex gap-4 md:gap-6 text-base md:text-lg'>
                    <Link to={""} className='transition ease-in-out delay-150 duration-500 text-primary-orange hover:text-primary-blue hover:-translate-y-1 hover:scale-110'>HOME</Link>
                    <Link to={"products"} className='transition ease-in-out delay-150 duration-500 text-primary-orange hover:text-primary-blue hover:-translate-y-1 hover:scale-110'>PRODUCTS</Link>
                    <Link to={"about"} className='transition ease-in-out delay-150 duration-500 text-primary-orange hover:text-primary-blue hover:-translate-y-1 hover:scale-110'>ABOUT</Link>
                    <Link to={"contact"} className='transition ease-in-out delay-150 duration-500 text-primary-orange hover:text-primary-blue hover:-translate-y-1 hover:scale-110'>CONTACT US</Link>
              </nav>

              <div className='relative  text-xl text-primary-blue cursor-pointer'>
                    <BsCartFill />
                    <div className='absolute flex flex-col items-center justify-center -top-2.5 -right-1 bg-primary-red
                    w-4 h-4 rounded-full m-0 p-0 
                    '><span className='text-base text-center text-primary-white'>0</span></div>
              </div>

              <div className='relative text-primary-blue cursor-pointer'  onClick={() => setShopDropdown(!showDropdown)}>
                  <div className='text-3xl h-10 w-10 rounded-full overflow-hidden drop-shadow-md'>
                      {
                        user ? <img src={user.avatar} alt="user profile avatar" />:<HiOutlineUserCircle />
                      }
                  </div>

                    { showDropdown && 
                <div ref={menuRef} class="font-alegreya z-10 absolute top-12 -right-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-primary-blue dark:divide-gray-600">
                   {  user && <div class="px-4 py-3 text-sm text-primary-text dark:text-white">
                                       <div className='text-base truncate font-alegreya'>{user.firstname} {user.lastname}</div>
                                       <div className="font-medium truncate font-alegreya">{user.email}</div>
                                  </div>
                   }
                  <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
                             
                             {
                              user && 
                               <li>
                                <Link to={"newproduct"} class="block px-4 py-2 hover:bg-primary-orange dark:hover:bg-primary-orange dark:hover:text-white">New Product</Link>
                              </li>
                             }
                             
                              <li>
                                {
                                  user &&  <Link to={"bookmarks"} class="block flex gap-2 items-center px-4 py-2 text-sm text-gray-700 hover:bg-primary-orange dark:hover:bg-primary-orange dark:text-gray-200 dark:hover:text-white">
                                  <BsBookmarkStar />Bookmarks
                                    </Link>
                                }
                               
                              </li>
                </ul>
                <div class="py-2 font-semibold">


                        {
                          handledUser ?  <button onClick={() => dispatch(logOutUser())} class="block w-full flex gap-2 items-center px-4 py-2 text-sm text-gray-700 hover:bg-primary-orange dark:hover:bg-primary-orange dark:text-gray-200 dark:hover:text-white">
                          <AiOutlineLogout className='text-xl' />  Logout
                          </button>
                          :
                          <Link to={"signup"} class="block flex gap-2 items-center px-4 py-2 text-sm text-gray-700 hover:bg-primary-orange dark:hover:bg-primary-orange dark:text-gray-200 dark:hover:text-white">
                          <AiOutlineLogin className='text-xl' />  Login / Signup
                          </Link>
                        }
                       

                  
                </div>
                </div>
                    }

                </div>
            </div>
          
        </div>


        {/* Mobile version */}


    </header>
    </>
  
  )
}

export default Header;
