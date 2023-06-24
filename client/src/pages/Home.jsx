import React from 'react';
import {LuBike} from 'react-icons/lu';
import Card from '../components/Card';
import Slider from '../components/Slider';
import CardFeature from '../components/CardFeature';
import YourProducts from '../components/YourProducts';

const Home = () => {


  return (
    <section className='relative' style={{zIndex:10}}>
      
      
    <div className="md:px-2">
    <Slider />
    </div>
    
    <div className='md:flex p-2 md:p-4'>
      <div className='md:w-1/2'>
      <div className="cursor-pointer text-xs text-center gap-2 inline-flex items-center m-2 font-bold leading-sm  uppercase px-3 py-1 bg-lighten-orange text-darken-orange rounded-full">
      <LuBike className='text-xl text-primary-blue'/> <span className='mr-2'>Secure Delivery by Bike</span>
      </div>
        <h2 className='font-ysabeau md:text-5xl text-primary-blue text-4xl font-semibold'>
        Eshop <span className='font-alegreya text-primary-orange '>Hri</span>, the fasted secure purchase and delivery 
        in <span className='font-alegreya text-primary-orange'>Your Home</span>
        </h2>
        <p className='max-w-lg tracking-wider font-ysabeau leading-8 text-base py-3 font-semibold'><span className='text-primary-orange'>Eshop Hri</span> part of <span className='font-orbitron text-primary-blue'>DIGITAL FOR FUTURE</span> we facilitate the purchase process
        & satisfy the client
        </p>

        <button className='font-ysabeau 
        text-semibold bg-darken-orange
         text-white px-4 py-2 rounded-md
         m-auto transition ease-in-out delay-150
         cursor-pointer hover:bg-primary-orange 
         text-medium text-center
         '>Order Now</button>
      </div>

      <div className='md:w-1/2 my-1'>
       <Card />
      </div>



      

    </div>

  <div className='my-1 w-full'>

 
    <h2 className='p-2 md:p-4 mb-0.5 font-alegreya font-semibold text-3xl text-primary-blue'>
      Featured Products</h2>

    <CardFeature />
    </div>

    <div className='my-3  mb-2 w-full'>
    <h2 className='p-2 md:p-4 mb-0.5 font-alegreya font-semibold text-3xl text-primary-blue'>
          Your Products</h2>
      <YourProducts />
    </div>
    
    </section>
  )
}

export default Home