import {
    createBrowserRouter,  
   } from "react-router-dom"; 
import App from "../App";
import Home from "../pages/Home";
import ProductDetails from "../components/product/ProductDetails";

export const router = createBrowserRouter([ 
    { 
    path: "/", 
    element: <App/>,
    children: [
       {
        index: true,
        element: <Home/>
       
       }, 
       {
        path: "/details/:id",
        element: <ProductDetails/>,
       }
    ]
    }, 
   ]); 