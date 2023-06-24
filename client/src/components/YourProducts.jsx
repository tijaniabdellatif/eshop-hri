import React,{useState,useEffect} from 'react';
import { categories } from '../utils/constants';
import { useSelector,useDispatch } from 'react-redux';
import {BsFilterCircle} from "react-icons/bs"
import FiltredProduct from './FiltredProduct';
  
const YourProducts = () => {

  const {allproducts} = useSelector(store => store.allproduct)

   const [data,setData] = useState([]);

   useEffect(() => {

      setData(allproducts.slice(1,20))
   },[allproducts])

    const handleFilter = (category) => {

      const filter = allproducts.filter(prod => {

            return prod.category.toLowerCase() === category.toLowerCase()
         })

         setData(() => {

             return [...filter]
         })

         
    }

    console.log(data)
   






  
  return (
    <>

  <div className='flex  justify-center  items-center overflow-scroll scrollbar-none'>
    <div className='flex  px-0 mx-0 flex-col items-center justify-center'>
           <div   className='group transition-all ease-linear duration-500 delay-75 hover:bg-primary-orange cursor-pointer text-2xl p-4 bg-secondary-orange rounded-full'>
            <span  className='text-primary-text group-hover:text-white'>
              <BsFilterCircle />
            </span>
            
           </div>
            <div className='flex flex-wrap items-center justify-center w-28'>
              <span className='capitalize font-alegreya mt-2 text-sm text-center leading-4 block w-full'>
                All
              </span>
              </div>
           </div>
         {

       categories?.map((cat) => {

        return(
          <div className='flex   px-0 mx-0 flex-col items-center justify-center'>
           <div key={cat.id}  className='group transition-all ease-linear duration-500 delay-75 hover:bg-primary-orange cursor-pointer text-2xl p-4 bg-secondary-orange rounded-full'>

            <span title={cat.text} className='text-primary-text group-hover:text-white'>{cat.children}</span>
            
           </div>
            <div className='flex flex-wrap items-center justify-center w-28'>
              <span className='capitalize font-alegreya mt-2 text-sm text-center leading-4 block w-full'>{cat.text}</span>
              </div>
           </div>
              )

           })
         }


       
      
   </div>


<div className='grid grid-cols-3 gap-3'>

{

data?.map(item => {

    return(
       <FiltredProduct 
       name={item.name}
       image={item.image}
       price={item.price.$numberDecimal}
       category={item.category}
       />
    )
})
}
</div>
  

        
    </>
  )
}

export default YourProducts;
