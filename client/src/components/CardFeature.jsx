import React,{useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getAllProducts } from '../redux/allproducts/allProductSlice';
import Loader from '../components/Loader';
import {BiCategory} from 'react-icons/bi';
const CardFeature = () => {
    const {isLoading,allproducts} = useSelector((store) => store.allproduct)
    const dispatch = useDispatch()
    useEffect(() => {

        (async  () => {
              dispatch(getAllProducts())
        })()

    },[])

    
    if(isLoading){

        return (<div className='flex items-center justify-center mt-3'><Loader /></div>)
      }

    
  return (
    <div className='flex gap-5 p-2 md:p-4'>
      {
         allproducts.map((item) => {

            return (

            <div className='font-ysabeau w-full p-4 py-5 px-4 duration-200 transition-all ease-in-out delay-100 hover:shadow-lg cursor-pointer rounded-md drop-shadow  min-w-[200px] bg-zinc-50'>
             <div className='h-28 flex items-center justify-center'>
             <img src={item.image} className='h-full object-fit' />
             </div> 
             
             <h3 className='my-4 font-semibold text-secondary-blue  capitalize text-lg'>
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
  )
}

export default CardFeature
