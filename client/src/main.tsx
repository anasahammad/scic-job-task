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
createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <AuthProvider>
  <ProductProvider>
  <RouterProvider router={router} /> 
  </ProductProvider>
  </AuthProvider>
  </StrictMode>,
)
