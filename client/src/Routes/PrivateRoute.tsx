
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

interface PrivateRouteProps{
    children: React.ReactNode
}
const PrivateRoute: React.FC<PrivateRouteProps> = ({children}) => {
    const {user, loading} = useAuth()
  
    if(loading){
        <div>Loading...</div>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname || "/"} to="/login" replace></Navigate>
};

export default PrivateRoute;