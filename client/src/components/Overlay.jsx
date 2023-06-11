import React from "react";
import LoadingOverlay from 'react-loading-overlay';
import RiseLoader from 'react-spinners/RiseLoader';
import { useSelector } from 'react-redux';



export const OverlayLoader = ({active,children,speed}) => {

    const {user,isLoading} = useSelector(store => store.user)
  return (
    <div className='flex items-center justify-center absolute top-0 h-full w-full'>
         <LoadingOverlay 
      className="h-full w-full"
      active={active}
      fadeSpeed={speed}
      spinner={
        <RiseLoader
            color="#FFD256"
            margin={4}
            size={20}
            speedMultiplier={1}
        />
      }
      styles={{
        overlay: (base) => ({
          ...base,
          background: 'rgba(221, 230, 237,0.7)'
        }),
       
      }}
      >

        {children}

      </LoadingOverlay>
    </div>
     
  )
}


