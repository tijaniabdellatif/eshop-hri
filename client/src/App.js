import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { Toaster, ToastIcon, toast, resolveValue } from "react-hot-toast";
import { Transition } from '@headlessui/react';
import { useDispatch, useSelector } from 'react-redux';




function App() {

   
  return (
    <>
    <Toaster  position='top-right'>

      {(t) => (

           <Transition
           appear
           show={t.visible}
           className={`mt-2 transform p-4 flex bg-secondary-orange rounded-lg shadow-lg`}
           enter="transition-all duration-150"
           enterTo="opacity-100 scale-100"
           leave="transition-all duration-150"
           leaveFrom="opacity-100 scale-100"
           leaveTo="opacity-0 scale-75"
           >

            <ToastIcon toast={t} />
            <p className='px-2 font-inter'>{resolveValue(t.message)}</p>


           </Transition>
      )}
    </Toaster>
    <div className="main">
       <Header />
       <main className='pt-20 bg-slate-100 min-h-[calc(100vh)]'>
        <Outlet />
       </main>

    </div>
    </>
    
  );
}

export default App;
