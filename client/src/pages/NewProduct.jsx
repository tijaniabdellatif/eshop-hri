import React,{useState,useRef} from 'react';
import {MdProductionQuantityLimits} from 'react-icons/md';
import { imageToBase64 } from '../utils/functions';
import {FaRegImages} from 'react-icons/fa';

const NewProduct = () => {


  const inputFileRef = useRef(null);

  const [data,setData] = useState({

    name:"",
    category:"",
    image:"",
    price:"",
    description:"",
 });


  const uploadFile = async (e) => {

    const data = await imageToBase64(e.target.files[0]);

   
    setData((prev) => {

        return {

             ...prev,
             image:data
        }

    })

    return;


  }
  return (

    
    <section  className='relative p-3 md:p-4' style={{zIndex:1}}>
    <div className='w-full max-w-lg bg-white m-auto flex flex-col justify-center items-center p-4 drop-shadow-lg'>
    <h1 className='text-center font-ysabeau font-bold
        text-2xl mb-2
        '>Add a Product</h1>

        <div className='h-full text-5xl text-secondary-orange '>
          <MdProductionQuantityLimits />
        </div>

            <form  className='font-alegreya w-full py-3 flex flex-col' style={{zIndex:1000}}>
                      
                      <label htmlFor='name'>Name <span className='text-red-500 text-xl'> *</span></label>
                      <input 
                      
                      className='mt-1 mb-2 px-2 py-1 
                      rounded-md outline-0 w-full bg-slate-200/100
                      focus-within:outline-sky-500 focus-within:ring-1
                      ' 
                      type={'text'} 
                      name="name" 
                      id="name" 
                      placeholder='Your product name' 
                  
                      
                      />

            <label htmlFor="category">Select a category<span className='text-red-500 text-xl'> *</span></label>
            <select id="category" name="category" className="mt-1 mb-2 px-2 py-1 
                      rounded-md h-8 outline-0 w-full bg-slate-200/100
                      focus-within:outline-sky-500 focus-within:ring-1">
              <option defaultValue={'Choos a category'}>Choose a category</option>
              <option value="US">Grocery</option>
              <option value="CA">Cheese</option>
              <option value="FR">Water & beverage</option>
            
            </select>

          
            <label htmlFor='image'>Product image<span className='text-red-500 text-xl'> *</span></label>
            <input className="block w-full mb-5  border-1 border-sky-500 rounded-full cursor-pointer 
            focus:outline-none
            text-sm text-grey-500
            file:mr-5 file:py-3 file:px-10
            file:rounded-full file:border-0
            file:text-md file:font-semibold  file:text-white
            file:font-ysabeau
            file:bg-secondary-orange file:from-blue-600 file:to-amber-600
            hover:file:cursor-pointer hover:file:opacity-80
            " 
            id="image" 
            name="image" 
            accept='image/*' 
            type="file" 
            onChange={uploadFile}
            ref={inputFileRef}
            />
            <div className='relative h-60 w-full  my-3 rounded flex items-center justify-center border-dashed border-2 border-sky-500'>
            
          {
              data.image ? <img src={data.image} alt="product image" className='w-full h-full object-center'/> :   <FaRegImages className='text-5xl text-secondary-orange' />
          }
          
            </div>

   

            <label htmlFor='price'>Price <span className='text-red-500 text-xl'> *</span></label>
                      <input 
                      
                      className='mt-1 mb-2 px-2 py-1 
                      rounded-md outline-0 w-full bg-slate-200/100
                      focus-within:outline-sky-500 focus-within:ring-1
                      ' 
                    
                      type={'number'} 
                      name="price" 
                      id="price" 
                      placeholder='Price MAD' 
                  
                      
                      />

                  <label htmlFor='description'>description <span className='text-red-500 text-xl'> *</span></label>
                      <textarea 
                      
                      className='mt-1 mb-2 px-2 py-1 
                      resize-none
                      rounded-md outline-0 w-full bg-slate-200/100
                      focus-within:outline-sky-500 focus-within:ring-1
                      '
                      name="description" 
                      id="description"
                      rows={4}
           
                      placeholder='Product description' 
                      >
                     </textarea>

        
          <button  type="submit" className='w-full 
              max-w-[150px]
              m-auto transition ease-in-out delay-150
              font-alegreya  
              bg-secondary-orange 
              duration-300 rounded-full px-2 py-1 
              cursor-pointer
              text-white text-bold text-xl 
              mt-4
              hover:bg-darken-orange 
              text-medium text-center'>Submit</button>
          
          
            </form>


    </div>
    </section>
  )
}

export default NewProduct;
