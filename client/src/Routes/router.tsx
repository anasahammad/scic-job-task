import {
    createBrowserRouter,  
   } from "react-router-dom"; 
import App from "../App";
import Home from "../pages/Home";
import ProductDetails from "../components/product/ProductDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import Contact from "../pages/Contact";
import About from "../pages/About";

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
        element: <PrivateRoute><ProductDetails/></PrivateRoute>,
       },
       {
         path: '/login',
         element: <Login/>
       },
       {
         path: '/register',
         element: <Register/>
       },
       {
         path: "/contact",
         element: <Contact/>
       },
       {
         path: "/about",
         element: <About/>
       }
    ]
    }, 
   ]); 