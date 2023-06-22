import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { featuredProducts } from '../redux/allproducts/allProductSlice';
import Loader from '../components/Loader';
import {ImPriceTags} from 'react-icons/im';
import {MdOutlineFavoriteBorder} from 'react-icons/md'
const Card = () => {

    const {products,isLoading} = useSelector((store) => store.allproduct)
    const dispatch = useDispatch();
    useEffect(() => {

       (async () => {
         dispatch(featuredProducts());
       })()
        
            
    },[])

    console.log(products)

    if(products.length === 0){

        return (<div className='flex items-center justify-center mt-3'><Loader /></div>)
    }
  return (


    <div className='flex flex-wrap gap-5 p-4 justify-center font-ysabeau'>
     {
         products.map((item) => {

               return(
                <div key={item._id} className='relative bg-white flex flex-col  shadow-lg rounded-md p-4'>
                    
                <div
                class="absolute my-2 ml-1 top-0 left-0 text-xs inline-flex items-center leading-sm uppercase px-3 py-1 bg-secondary-orange text-white rounded-full">
            {item.category}
              </div>
                <div className='relative min-h-[150px] w-40  mt-7'>
                        <img src={item.image} className='absolute left-[30%] h-full w-full' />
                </div>

                    <h3 className='font-semibold
                     text-base text-slate-600
                      text-capitalize
                     '>{item.name}</h3>

                   
                     <div className='w-[250px]'>
                       <p className='py-1 text-secondary-blue text-sm text-justify'>{item.description}</p>
                     </div>

                    <div className='flex justify-between'>
                     <div className='flex items-center'><ImPriceTags className='mx-1 text-base text-secondary-orange' /> <span className='font-semibold'>{item.price.$numberDecimal} {' '} MAD</span> </div>
                     <div title='Add to Wishlist' className='cursor-pointer'><MdOutlineFavoriteBorder /></div>
                    </div>
                     
                </div>
               
               )
         })
     }
    </div>
  )
}

export default Card
