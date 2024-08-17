
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
  
    if(loading){
        <div>Loading...</div>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname || "/"} to="/login" replace></Navigate>
};

export default PrivateRoute;