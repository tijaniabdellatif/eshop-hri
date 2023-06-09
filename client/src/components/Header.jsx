import React,{useState,useRef,useEffect} from 'react';
import myLogo from '../assets/logo/png/logo-no-background.png';
import { Link } from 'react-router-dom';
import {HiOutlineUserCircle} from 'react-icons/hi';
import {BsCartFill} from 'react-icons/bs';
import {CiLogin} from 'react-icons/ci';
import {BsBookmarkStar} from 'react-icons/bs';


const Header = () => {

    const [showDropdown,setShopDropdown] = useState(false);
    const [showLinks,setShowLinks] = useState(false);
    const menuRef = useRef(null);

    const closeOpenMenus = (e)=>{
      if(menuRef.current && showDropdown && !menuRef.current.contains(e.target)){
        setShopDropdown(false);
      }
    }
   
      document.addEventListener('mousedown',closeOpenMenus)


    

  return (
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
                  <div className='text-3xl'>
                      <HiOutlineUserCircle />
                  </div>

                    { showDropdown && 
                <div ref={menuRef} class="font-alegreya z-10 absolute top-12 -right-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-primary-blue dark:divide-gray-600">
                   {  showLinks && <div class="px-4 py-3 text-sm text-primary-text dark:text-white">
                                       <div>Username</div>
                                       <div class="font-medium truncate">email</div>
                                  </div>
                   }
                  <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
                              <li>
                                <a href="#" class="block px-4 py-2 hover:bg-primary-orange dark:hover:bg-primary-orange dark:hover:text-white">New Product</a>
                              </li>
                              <li>
                                <Link to={"bookmarks"} class="block flex gap-2 items-center px-4 py-2 text-sm text-gray-700 hover:bg-primary-orange dark:hover:bg-primary-orange dark:text-gray-200 dark:hover:text-white">
                                <BsBookmarkStar />Bookmarks
                                  </Link>
                              </li>
                </ul>
                <div class="py-2 font-semibold">

                        <Link to={"signup"} class="block flex gap-2 items-center px-4 py-2 text-sm text-gray-700 hover:bg-primary-orange dark:hover:bg-primary-orange dark:text-gray-200 dark:hover:text-white">
                        <CiLogin className='text-xl' />  Login / Register
                        </Link>

                  
                </div>
                </div>
                    }

                </div>
            </div>
          
        </div>


        {/* Mobile version */}


    </header>
  )
}

export default Header;
