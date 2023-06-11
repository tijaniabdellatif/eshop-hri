import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globals.css';
import App from './App';
import {
  
   createBrowserRouter,
   createRoutesFromElements,
   Route,
   RouterProvider
   } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import SignUp from './pages/SignUp';
import Bookmarks from './pages/Bookmarks';
import Login from './pages/Login';
import { store } from './store';
import { Provider } from 'react-redux';
import ProtectedRoute from './pages/protectedRoutes/ProtectedRoute';
import NewProduct from './pages/NewProduct';


   const router = createBrowserRouter(
     createRoutesFromElements(

        <Route path='/' element={<App />}>
            <Route index element={<Home />}  />
            <Route path="products" element={<Products />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
         
            <Route path="bookmarks" element={
            <ProtectedRoute>
                <Bookmarks />
            
            </ProtectedRoute>
           
            } />


            <Route path='newproduct' element={

                <ProtectedRoute>
                  <NewProduct />
                </ProtectedRoute>
            } />
            <Route path='*' element={<Error />} />

          </Route>
     )
   )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>
     <RouterProvider router={router} />
  </Provider>
 
);

