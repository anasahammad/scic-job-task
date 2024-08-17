import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { 
  RouterProvider, 
 } from "react-router-dom"; 


 import "./index.css"; 
import { router } from './Routes/router.tsx';
import ProductProvider from './Providers/ProductProvider.tsx';
import AuthProvider from './Providers/AuthProvider.tsx';
import { Toaster } from 'react-hot-toast';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <AuthProvider>
    <Toaster toastOptions={{
      style: {
        background: 'rgb(51 65 85)',
            color: '#fff'
      }
    }}/>
  <ProductProvider>
  <RouterProvider router={router} /> 
  </ProductProvider>
  </AuthProvider>
  </StrictMode>,
)
