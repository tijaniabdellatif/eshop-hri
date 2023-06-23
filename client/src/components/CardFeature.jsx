import React,{useEffect, useRef} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getAllProducts } from '../redux/allproducts/allProductSlice';
import Loader from '../components/Loader';
import {BiCategory} from 'react-icons/bi';
import {GrPrevious,GrNext} from 'react-icons/gr';

const CardFeature = () => {
    const {isLoading,allproducts} = useSelector((store) => store.allproduct)
    const dispatch = useDispatch()
    useEffect(() => {

        (async  () => {
              dispatch(getAllProducts())
        })()

    },[])


    const slideProduct = useRef();
    const nextProduct = () => {
      slideProduct.current.scrollLeft += 200; 

    }

    const previousProduct = () => {

      slideProduct.current.scrollLeft -= 200; 
    }

    
    if(isLoading){

        return (<div className='flex items-center justify-center mt-3'><Loader /></div>)
      }

    
  return (
   <div className='w-full relative'>
   <div className='hidden md:flex absolute  gap-1 right-6 -top-8'>
    <button onClick={previousProduct}  className='p-2 rounded-md bg-zinc-200 hover:bg-slate-400  transition ease-out duration-700 '> <GrPrevious /> </button>
     <button onClick={nextProduct} className='p-2 rounded-md bg-zinc-200 hover:bg-slate-400  transition ease-out duration-700'> <GrNext /></button>  
   </div>
   <div ref={slideProduct} className='flex gap-5 p-2 md:p-4 overflow-scroll scrollbar-none scroll-smooth transition-all duration-1000'>
      {
         allproducts.map((item) => {

            return (

            <div className='font-ysabeau  w-full p-4 py-5 px-4 duration-200 transition-all ease-in-out delay-100 hover:shadow-lg cursor-pointer rounded-md drop-shadow  min-w-[200px] bg-zinc-50'>
             <div className='h-28  flex flex-col items-center  justify-center'>
             <img src={item.image} className='h-full object-fit' />
             </div> 
             
             <h3 className='my-4 font-semibold text-secondary-blue  capitalize text-lg whitespace-nowrap overflow-hidden'>
             {item.name}
             </h3>
             <p className='text-primary-orange text-sm'>
             <span className='flex items-center'><BiCategory className='mx-1' /> {item.category}</span>
             </p>
             <p className='font-bold flex'>
             <span className='font-semibold'>{item.price.$numberDecimal}</span>
             <span className='mx-1 text-primary-red'>MAD</span>
            
             </p>

             <button className='bg-primary-orange transition ease-out duration-700  rounded-md my-2 hover:bg-darken-orange  text-primary-white py-1 px-2'>Add To Cart</button>
            </div>
            );
         })
      }
    </div>
   </div>
    
  )
}

export default CardFeature
