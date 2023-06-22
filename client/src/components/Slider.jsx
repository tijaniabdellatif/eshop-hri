import React,{useEffect} from 'react';
import { Swiper,SwiperSlide} from 'swiper/react';
import { useDispatch,useSelector } from 'react-redux';
import { categoryProduct } from '../redux/allproducts/allProductSlice';
import Loader from '../components/Loader';
import "swiper/css";
import 'swiper/css/navigation';
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation,Pagination,Scrollbar } from 'swiper';
import {GoArrowRight,GoArrowLeft} from 'react-icons/go'

const Slider = () => {
    const dispatch = useDispatch();
    const {featured,isLoading} = useSelector((store) => store.allproduct)

    useEffect(() => {

        (async () => {
         dispatch(categoryProduct())
        })();
        
   
     },[])

     if(isLoading){

        return (<div className='flex items-center justify-center mt-3'><Loader /></div>)
      }
  return (
    <div className='relative bg-zinc-50 px-2 sm:h-[500px] flex items-center justify-center  shadow-md rounded-sm' style={{zIndex:10}}>
      <Swiper
      className='relative group'
      spaceBetween={50}
      slidesPerView={1}
      navigation={{

        nextEl:'.button-next-slide',
        prevEl:'.button-prev-slide'
      }}
      modules={[Navigation]}
      >

         {

             featured.map((item) => {

                  return(
            <SwiperSlide>
                <div className='flex flex-row-reverse items-center justify-center w-full'>
                    <div className='flex-auto w-[50%] h-[350px]'>
                      <img src={item.image} className='object-fit h-[350px] rounded-md'  />
                    </div>
                    <div className='space-y-3 sm:mx-20  flex-auto w-[50%]'>
                       <h3 className='sm:text-[16px] font-semibold font-ysabeau italic'>{item.name}</h3>
                       <h3 className='sm:text-[36px] text-primary-blue font-[700] font-ysabeau'>{item.category.toUpperCase()}</h3>
                       <p className='text-base leading-6 font-ysabeau sm:w-[80%]'>{item.description}</p>
                       <button className='my-2 px-4 py-2 rounded shadow-sm text-primary-white bg-darken-orange text-[13px]
                       '>Order Now</button>
                    </div>
                     </div>
            </SwiperSlide>
                  
                  );
             })
         }
      
         <div className='relative  -top-[12rem] z-10 flex items-center justify-between'>
              <div className='absolute right-1 button-next-slide w-[40px] h-[40px] rounded-md bg-black grid place-items-center'>
              <GoArrowRight className='text-primary-white' />
              </div>

                <div className='absolute left-0 button-prev-slide w-[40px] h-[40px] rounded-md bg-black grid place-items-center'>
                <GoArrowLeft className='text-primary-white' />
                
                </div>
         </div>
        
         
      </Swiper>
    </div>
  )
}

export default Slider
